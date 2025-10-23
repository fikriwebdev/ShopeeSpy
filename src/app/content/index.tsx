import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineContentScript } from '#imports';
import '~/assets/styles/globals.css';
import DateInjector from '@/components/date-injector';
import { ShopeeSearchItemsResponse } from '@/types/shopee-search-items-response';

console.log('🚀 ShopeeSpy (Observer Sort Edition) Active!');

// --- CONFIG (SAMA) ---
const PRODUCT_CARD_SELECTOR = '.shopee-search-item-result__item';
const PRODUCT_LIST_CONTAINER_SELECTOR = 'ul.shopee-search-item-result__items';
const PROCESSED_MARKER = 'shopeespy-processed';

// --- "DATABASE" LOKAL (SAMA) ---
const itemDataMap: Record<string, { ctime: number; sold: number; spd: number }> = {};

// --- DEBOUNCE HELPER (BARU) ---
// Ini fungsi 'magic' biar 'sortProductsBySPD' gak dipanggil 1000x per detik
// Dia bakal nunggu 250ms setelah 'keributan' DOM selesai, baru jalan
let sortTimer: NodeJS.Timeout | null = null;
function debounce(func: () => void, delay: number) {
  if (sortTimer) {
    clearTimeout(sortTimer);
  }
  sortTimer = setTimeout(func, delay);
}
// --- AKHIR FUNGSI BARU ---


// --- FUNGSI UTIL (SAMA, UDAH BENER) ---
// (getItemIdFromUrl, injectReactComponent)

function getItemIdFromUrl(url: string): string | null {
  try {
    const parts = url.split('?')?.[0]?.split('.') ?? [];
    if (parts.length < 2) return null;
    const itemId = parts[parts.length - 1];
    const shopId = parts[parts.length - 2];
    if (itemId && !isNaN(Number(itemId)) && !isNaN(Number(shopId))) {
      return itemId;
    }
    return null;
  } catch {
    return null;
  }
}

function injectReactComponent(card: Element, ctime: number, sold: number) {
  // Cek dulu, jangan sampe dobel inject
  if (card.querySelector('.shopeespy-react-root')) return;

  const uploadDate = new Date(ctime * 1000);
  const reactRootEl = document.createElement('div');
  reactRootEl.className = 'shopeespy-react-root';
  const textContainer = card.querySelector('.p-2.flex-1.flex.flex-col');
  if (textContainer) {
    textContainer.append(reactRootEl);
  } else {
    card.append(reactRootEl);
  }
  const root = ReactDOM.createRoot(reactRootEl);
  root.render(
    <React.StrictMode>
      <DateInjector uploadDate={uploadDate} soldCount={sold} />
    </React.StrictMode>
  );
}

// --- FUNGSI SORTING (SAMA, UDAH BENER) ---
function sortProductsBySPD() {
  const container = document.querySelector(PRODUCT_LIST_CONTAINER_SELECTOR);
  if (!container || !container.parentNode) return; 
  
  const cards = Array.from(
    container.querySelectorAll(PRODUCT_CARD_SELECTOR)
  ) as HTMLLIElement[];
  
  cards.sort((cardA, cardB) => {
    const linkA = cardA.querySelector('a');
    const itemIdA = linkA ? getItemIdFromUrl(linkA.href) : null;
    const linkB = cardB.querySelector('a');
    const itemIdB = linkB ? getItemIdFromUrl(linkB.href) : null;
    const dataA = itemIdA ? itemDataMap[itemIdA] : undefined;
    const dataB = itemIdB ? itemDataMap[itemIdB] : undefined;

    if (dataA && dataB) return dataB.spd - dataA.spd;
    if (dataA) return -1;
    if (dataB) return 1;
    return 0;
  });

  cards.forEach(card => container.appendChild(card));
  console.log(`ShopeeSpy: Produk di-sortir ulang! (Total ${cards.length} card)`);
}

// --- FUNGSI "SCAN" (DIUBAH) ---
// Sekarang namanya 'handleDomUpdate', dia ngerjain 2 hal:
// 1. Pasang badge ke card baru
// 2. Manggil sortir (pake debounce)
function handleDomUpdate() {
  const newCards = document.querySelectorAll(
    `${PRODUCT_CARD_SELECTOR}:not(.${PROCESSED_MARKER})`
  );

  // 1. Pasang Badge (kalo ada card baru)
  if (newCards.length > 0) {
    // console.log(`ShopeeSpy: Ditemukan ${newCards.length} card baru. Memasang badge...`);
    for (const card of newCards) {
      const link = card.querySelector('a');
      if (!link || !link.href) continue;
      const itemId = getItemIdFromUrl(link.href);
      if (!itemId) {
        card.classList.add(PROCESSED_MARKER);
        continue;
      }
      const itemData = itemDataMap[itemId];
      if (itemData) {
        card.classList.add(PROCESSED_MARKER);
        injectReactComponent(card, itemData.ctime, itemData.sold);
      }
    }
  }

  // 2. Panggil Sortir (Pake Debounce)
  // Ini bakal jalan terus tiap ada mutasi, tapi 'debounce'
  // bakal nahan eksekusinya sampe DOM-nya "tenang"
  debounce(sortProductsBySPD, 250); // Tunggu 250ms
}

// --- processApiData (DIUBAH) ---
// Sekarang TUGASNYA CUMA SATU: MASUKIN DATA KE MAP
function processApiData(items: any[]) {
  if (!items) return;
  for (const item of items) {
    const standardizedItem = {
      id: item?.item_basic?.itemid?.toString(),
      ctime: item?.item_basic?.ctime,
      sold: item?.item_basic?.historical_sold || item?.item_basic?.sold || 0,
    };

    if (
      standardizedItem.id &&
      standardizedItem.ctime &&
      !itemDataMap[standardizedItem.id]
    ) {
      const uploadDate = new Date(standardizedItem.ctime * 1000);
      const daysDiff = (new Date().getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24);
      const daysSinceUpload = Math.max(daysDiff, 1);
      const spd = (standardizedItem.sold / daysSinceUpload);
      itemDataMap[standardizedItem.id] = {
        ctime: standardizedItem.ctime,
        sold: standardizedItem.sold,
        spd: spd,
      };
    }
  }
  // GAK ADA LAGI 'scanForNewCards' atau 'sort' DI SINI
}

// --- FUNGSI INTERCEPTOR (SAMA PERSIS) ---
// (Salin-tempel interceptXHR dan interceptFetch lo yang udah bener)

function interceptXHR() {
  const { open: originalOpen, send: originalSend } = XMLHttpRequest.prototype;
  XMLHttpRequest.prototype.open = function (
    method: string, url: string | URL, ...args: any[]
  ) {
    (this as any)._shopeespy_url = url.toString();
    // @ts-ignore
    return originalOpen.apply(this, [method, url, ...args]);
  };
  XMLHttpRequest.prototype.send = function (...args: any[]) {
    this.addEventListener('load', () => {
        const url = (this as any)._shopeespy_url;
        if (url && url.includes('/api/v4/search/search_items')) {
          try {
            const data = JSON.parse(this.responseText) as ShopeeSearchItemsResponse;
            if (data.items) processApiData(data.items); // CUMA PANGGIL INI
          } catch (e) {}
        }
      }, false
    );
    // @ts-ignore
    return originalSend.apply(this, args);
  };
  console.log('ShopeeSpy: XHR Interceptor loaded.');
}

function interceptFetch() {
  const { fetch: originalFetch } = window;
  const newFetch = async function (
    ...args: Parameters<typeof originalFetch>
  ): Promise<Response> {
    const urlInput = args[0];
    const url = (urlInput instanceof Request) 
                  ? urlInput.url 
                  : (urlInput as string | URL).toString();
    const response = await originalFetch.apply(window, args);
    if (url.includes('/api/v4/search/search_items')) {
      try {
        const clone = response.clone();
        const data = await clone.json() as ShopeeSearchItemsResponse;
        if (data.items && data.items.length) {
          processApiData(data.items); // CUMA PANGGIL INI
        }
      } catch (e) {}
    }
    return response;
  };
  Object.setPrototypeOf(newFetch, originalFetch);
  (window as any).fetch = newFetch;
  console.log('ShopeeSpy: Fetch Interceptor loaded.');
}


// --- WXT entry point (DIUBAH) ---
export default defineContentScript({
  matches: [
    'https://shopee.co.id/search*',
    'https://shopee.co.id/kategori*',
    'https://shopee.co.id/mall*',
    'https://shopee.co.id/daily*',
    'https://shopee.co.id/universal-link*',
  ],
  world: 'MAIN',
  runAt: 'document_start',

  async main() {
    console.log('ShopeeSpy "main" running (Observer Sort Edition)');

    // 1. Pasang interceptor (SAMA)
    interceptXHR();
    interceptFetch();

    // 2. Pasang observer (DIUBAH)
    const initObserver = () => {
      // Observer ini sekarang manggil 'handleDomUpdate'
      const domObserver = new MutationObserver(() => handleDomUpdate());
      
      // Kita "awasi" container produknya, bukan 'document.body'
      // biar lebih efisien
      const productListContainer = document.querySelector(PRODUCT_LIST_CONTAINER_SELECTOR);
      
      if (productListContainer) {
        domObserver.observe(productListContainer, { childList: true }); // Awasi kalo ada '<li>' baru
        console.log('ShopeeSpy: Observer aktif di list produk.');
        // Panggil sekali pas awal
        handleDomUpdate();
      } else {
        // Fallback kalo container-nya gak langsung ada
        const bodyObserver = new MutationObserver(() => handleDomUpdate());
        bodyObserver.observe(document.body, { childList: true, subtree: true });
        console.log('ShopeeSpy: Observer aktif di BODY (Fallback).');
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initObserver);
    } else {
      initObserver();
    }
  },
});