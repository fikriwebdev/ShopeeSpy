export interface ShopeeCategoryProductResponse {
  error: any
  error_msg: any
  data: Data
}

export interface Data {
  total: number
  key: string
  units: Unit[]
  batch_info: BatchInfo
  card_set: CardSet
  card_version: string
  bff_meta: any
  realtime_meta_data: any
  user_behaviour_config: any
  misc_info: any
  buy_together_landing_meta_info: any
  dynamic_translation_result: DynamicTranslationResult
}

export interface Unit {
  info: string
  data_type: string
  nap_ui_type: number
  count: number
  label_info: any
  rsku_info: any[]
  ctx_item_type: number
  highlight_video: any
  smart_ui_video: any
  image_source: any
  ads_info: AdsInfo
  roi_info: RoiInfo
  item: Item
  itemV1: any
  dynamic_translation_result: any
  new_arrival: any
  stream: any
  generic_video_card: any
  generic_search_card: any
  fashion_match_card: any
}

export interface AdsInfo {
  adsid: number
  campaignid: number
  deduction_info: string
  ads_tms_info: string
  ads_type: any
  display_ad_tag: any
  traffic_source: any
}

export interface RoiInfo {
  display_ad_tag: number
  ads_type: number
  traffic_source: number
}

export interface Item {
  item_card_displayed_asset: ItemCardDisplayedAsset
  item_data: ItemData
  rcmd_data: any
}

export interface ItemCardDisplayedAsset {
  name: string
  image: string
  images: string[]
  shop_location: any
  highlight_videos: HighlightVideo[]
  item_card_mask: any
  icon_in_image: IconInImage
  image_overlay: ImageOverlay
  seller_flag?: SellerFlag
  promotion_label_list: PromotionLabelList[]
  icon_in_price: any
  discount_tag?: DiscountTag
  voucher_applied_icon: any
  rating: any
  sold_count: SoldCount
  estimated_delivery_time: any
  free_badge: any
  find_similar: any
  long_image?: string
  long_images?: string[]
  top_product_badge: any
  item_card_specs: any
  display_price: DisplayPrice
  cta_button: any
  name_tr: any
  shop_location_tr: any
}

export interface HighlightVideo {
  video_id: string
  thumb_url: any
  duration: number
  version: number
  vid: string
  formats: Format[]
  default_format?: DefaultFormat
  mms_data?: string
  video_source: any
}

export interface Format {
  format: number
  defn: string
  profile: string
  path: string
  url: string
  width: number
  height: number
}

export interface DefaultFormat {
  format: number
  defn: string
  profile: string
  path: string
  url: string
  width: number
  height: number
}

export interface IconInImage {
  icon_type?: number
  ads_text: string
}

export interface ImageOverlay {
  featured_promo_overlay: any
  legacy_overlay: LegacyOverlay
}

export interface LegacyOverlay {
  name: string
  image_overlay: ImageOverlay2
}

export interface ImageOverlay2 {
  hash: string
  width: number
  height: number
}

export interface SellerFlag {
  type: any
  name: string
  image_flag: ImageFlag
}

export interface ImageFlag {
  hash: string
  width: number
  height: number
}

export interface PromotionLabelList {
  type: string
  media_type: any
  extra: any
  style: string
  specs: Specs
  data?: Data2
}

export interface Specs {
  text_color?: string
  border_color?: string
  background_color?: string
  primary_color: any
  secondary_color: any
  image?: Image
  gradient_colors?: string[]
}

export interface Image {
  md5: string
  width: number
  height: number
  background_color?: string
  top_offset: any
}

export interface Data2 {
  text: string
  text_left: any
  text_right: any
  progress_percent?: number
}

export interface DiscountTag {
  discount_text: string
}

export interface SoldCount {
  text: string
}

export interface DisplayPrice {
  price: number
  strikethrough_price: any
  hidden_price_display_text: any
}

export interface ItemData {
  itemid: number
  shopid: number
  is_adult: boolean
  need_kyc: boolean
  adult_age_threshold: any
  item_card_display_price: ItemCardDisplayPrice
  item_card_display_sold_count: ItemCardDisplaySoldCount
  is_sold_out: boolean
  is_preview: boolean
  label_ids: number[]
  catid: number
  shopee_verified: boolean
  liked_count: number
  item_type: number
  reference_item_id: string
  shop_data: ShopData
  status: number
  ctime: number
  flag: number
  item_status: string
  global_cat: GlobalCat
  overlay_images: OverlayImage[]
  item_rating: ItemRating
  global_brand: GlobalBrand
  platform_voucher: any
  video_info_list: VideoInfoList[]
  tier_variations: TierVariation[]
  can_use_bundle_deal: boolean
  virtual_sku_info: any
  real_sku_info_list: any[]
}

export interface ItemCardDisplayPrice {
  item_id: number
  model_id: number
  promotion_type: number
  promotion_id: number
  price: number
  strikethrough_price?: number
  discount: number
  discount_text: any
  hidden_price_display_text: any
  recommended_shop_voucher_promotion_id: any
  recommended_platform_voucher_promotion_id: any
  recommended_shop_voucher_info: any
  recommended_platform_voucher_info: any
  original_price: any
  model_selection_logic: number
}

export interface ItemCardDisplaySoldCount {
  display_sold_count: any
  historical_sold_count: any
  monthly_sold_count: any
  historical_sold_count_text: string
  monthly_sold_count_text: string
  rounded_display_sold_count: any
  display_sold_count_text: any
  rounded_local_monthly_sold_count: any
  local_monthly_sold_count_text: any
  rounded_local_historical_sold_count: any
  local_historical_sold_count_text: any
  rounded_global_historical_sold_count_text: any
  global_historical_sold_count_text: any
}

export interface ShopData {
  shop_name: string
  shop_icon: any
  shop_location: string
}

export interface GlobalCat {
  catid: number[]
}

export interface OverlayImage {
  overlay_image: string
  overlay_ids: string[]
}

export interface ItemRating {
  rating_star: number
  rating_count: number[]
  rcount_with_image: any
  rcount_with_context: any
}

export interface GlobalBrand {
  brand_id: number
  display_name: any
}

export interface VideoInfoList {
  video_id: string
  thumb_url: string
  duration: number
  version: number
  vid: string
  formats: Format2[]
  default_format: DefaultFormat2
  mms_data: string
  video_source: any
}

export interface Format2 {
  format: number
  defn: string
  profile: string
  path: string
  url: string
  width: number
  height: number
}

export interface DefaultFormat2 {
  format: number
  defn: string
  profile: string
  path: string
  url: string
  width: number
  height: number
}

export interface TierVariation {
  name: string
  options: string[]
  images?: string[]
  properties: any[]
  type: number
}

export interface BatchInfo {
  next_offset: any
  on_end_reached_threshold: any
}

export interface CardSet {
  layout_id: number
  element_toggle: ElementToggle
  card_set_name: string
}

export interface ElementToggle {
  atc_button: boolean
  feedback_button: boolean
}

export interface DynamicTranslationResult {
  item_dynamic_translation_status: number
  stream_dynamic_translation_status: any
  video_dynamic_translation_status: any
}
