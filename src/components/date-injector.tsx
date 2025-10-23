import React from 'react';

type Props = {
  uploadDate: Date;
  soldCount: number; // Terima props baru
};

// Fungsi 'getRelativeTime' (SAMA PERSIS, copy-paste dari kode lama)
const rtf = new Intl.RelativeTimeFormat('id-ID', { numeric: 'always' });
function getRelativeTime(date: Date): string {
  // Cek dulu kalo datenya invalid
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
const intervals = [
    // { unit: 'year', seconds: 31536000 }, // <-- KITA BUANG INI
    { unit: 'month', seconds: 2592000 }, // 30 hari
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ] as const;
  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return rtf.format(-count, interval.unit);
    }
  }
  return 'baru saja';
}


// --- Komponen UI (Kita modif tampilannya) ---
const DateInjector: React.FC<Props> = ({ uploadDate, soldCount }) => {
  const relativeTime = getRelativeTime(uploadDate);

  const formattedDate = uploadDate.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // --- LOGIC BARU: Hitung SPD ---
  const daysDiff = (new Date().getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24);
  // Biar aman gak bagi 0, kita anggap minimal 1 hari
  const daysSinceUpload = Math.max(daysDiff, 1); 
  const spd = (soldCount / daysSinceUpload).toFixed(1); // Sales Per Day, 1 desimal
  // --- Akhir Logic Baru ---

  // Format angka 'sold' (misal 5300 -> 5.3RB)
  const formattedSold = new Intl.NumberFormat('id-ID', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(soldCount);

  return (
    // Kita pake flexbox biar rapi
    <div 
      className="mt-2 flex flex-col gap-0.5 w-full justify-between rounded bg-[#00BFA5] px-2 py-0.5 text-xs font-semibold text-white z-50 items-start"
    >
      
      <p>⏰ {formattedDate}</p> 
      <p className='mt-1'>⏳ {relativeTime}</p>
  

      {/* Bagian Kanan: Info Sales */}
      <p className="flex-shrink-0">
        🔥 {spd} SPD ({formattedSold} terjual)
      </p>
    </div>
  );
};

export default DateInjector;
// ---------------------------------------------------

