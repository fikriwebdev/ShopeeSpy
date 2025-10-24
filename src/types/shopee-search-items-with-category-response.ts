export interface ShopeeSearchItemsWithCategoryResponse {
  bff_meta: any
  error: any
  error_msg: any
  reserved_keyword: any
  suggestion_algorithm: any
  algorithm: any
  total_count: number
  nomore: boolean
  items: Item[]
  price_adjust: any
  adjust: Adjust
  total_ads_count: number
  hint_keywords: any
  show_disclaimer: boolean
  json_data: string
  query_rewrite: QueryRewrite
  disclaimer_infos: any[]
  need_next_search: boolean
  low_result: any
  autoplay_info: any
  food_item_info: FoodItemInfo
  search_tracking: string
  search_sessionid: string
  batch_size: number
  search_item_bff_tracking: string
  user_info: UserInfo
  request_id: string
  cached_result: any
  experiments: Experiment[]
  item_extra_config: string
  config: Config
  live_stream: any
  ymal_items: any
  uff_cat_ids: any
  is_auto_part_intention: boolean
  card_set: CardSet
  ads_data_tms: string
  srp_component_info: SrpComponentInfo
  user_address: any
  shop_result_info: any
  performance: Performance
  ui_info: UiInfo
  union_experiment_info: any
  landing_page_info: LandingPageInfo
  shop_aggregated_info: any
  debug_info: DebugInfo
}

export interface Item {
  item_basic: any
  adsid?: number
  campaignid?: number
  distance: any
  match_type?: number
  ads_keyword?: string
  deduction_info?: string
  collection_id: any
  display_name: any
  campaign_stock: any
  json_data: string
  tracking_info: TrackingInfo
  itemid: number
  shopid: number
  algo_image: any
  fe_flags: any
  item_type: number
  foody_item: any
  search_item_tracking: string
  bff_item_tracking: string
  personalized_labels: any
  biz_json: string
  creative_image_id?: string
  creative_id?: string
  creative_id_int?: number
  item_card_label_groups: any
  title_max_lines: any
  play_icon_ui_type: number
  item_card_bottom_element: any
  video_card: any
  live_card: any
  item_card_element_collection: any
  item_card_price: any
  display_ad_tag?: number
  traffic_source: number
  live_card_item: any
  live_card_rcmd_label: any
  item_card_displayed_asset: ItemCardDisplayedAsset
  item_data: ItemData
  ads_data_tms: string
  item_config: ItemConfig
  ctx_item_type: number
  real_items: any
  v_model_id: any
  video_card_item: any
  shop: any
  creator: any
  ad_voucher_signature: any
  ui_info: any
  minifeed_card_detail: any
  topic_card_detail: any
  repeated_item_type: number
  debug_info: any
}

export interface TrackingInfo {
  viral_spu_tracking: any
  business_tracking: any
  multi_search_tracking: any
  groupid: any
  ruleid?: number[]
}

export interface ItemCardDisplayedAsset {
  name: string
  image: string
  images: string[]
  shop_location: string
  highlight_videos: any
  item_card_mask: any
  icon_in_image: IconInImage
  image_overlay: ImageOverlay
  seller_flag?: SellerFlag
  promotion_label_list: PromotionLabelList[]
  icon_in_price: any
  discount_tag?: DiscountTag
  voucher_applied_icon: any
  rating: Rating
  sold_count: SoldCount
  estimated_delivery_time: EstimatedDeliveryTime
  free_badge: any
  find_similar: FindSimilar
  long_image: any
  long_images: any
  item_card_specs: any
  display_price: DisplayPrice
  name_tr: any
  shop_location_tr: any
  brand_info: any
  in_title_image_flags?: InTitleImageFlag[]
  highlight_video: any
  non_wifi_highlight_video: any
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
  style: string
  specs: Specs
  data?: Data
}

export interface Specs {
  text_color?: string
  border_color?: string
  background_color?: string
  primary_color: any
  secondary_color: any
  image?: Image
  gradient_colors?: string[]
  left_image: any
}

export interface Image {
  md5: string
  width: number
  height: number
  background_color?: string
  top_offset: any
}

export interface Data {
  text: string
  text_left: any
  text_right: any
  progress_percent?: number
  texts: any
}

export interface DiscountTag {
  discount_text: string
}

export interface Rating {
  rating_text: string
  icon: Icon
  rating_type: number
}

export interface Icon {
  hash: string
  width: number
  height: number
}

export interface SoldCount {
  text: string
}

export interface EstimatedDeliveryTime {
  estimated_delivery_time_text: string
  edt_type: number
  distance?: string
  is_show_shop_name_and_icon: boolean
  edt_icon: EdtIcon
  model_id: number
  edt_tracking_info: string
}

export interface EdtIcon {
  hash: string
  width: number
  height: number
}

export interface FindSimilar {
  button_text: string
}

export interface DisplayPrice {
  price: number
  strikethrough_price?: number
  hidden_price_display_text: any
}

export interface InTitleImageFlag {
  type: number
  name: string
  icon: Icon2
}

export interface Icon2 {
  hash: string
  width: number
  height: number
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
  overlay_images: any
  item_rating: ItemRating
  global_brand: GlobalBrand
  tier_variations: any
  model_id: any
  dynamic_ui_flag: any
  live_stream_session: any
}

export interface ItemCardDisplayPrice {
  promotion_type: number
  promotion_id: number
  price: number
  strikethrough_price?: number
  discount: number
  hidden_price_display_text: any
  recommended_shop_voucher_promotion_id: any
  discount_text: any
  model_id: number
  recommended_platform_voucher_promotion_id: any
  recommended_shop_voucher_info: any
  recommended_platform_voucher_info: any
  original_price: number
  model_selection_logic: number
}

export interface ItemCardDisplaySoldCount {
  historical_sold_count: number
  monthly_sold_count: number
  historical_sold_count_text: string
  monthly_sold_count_text: string
  display_sold_count: any
  rounded_local_monthly_sold_count: any
  local_monthly_sold_count_text: any
  rounded_display_sold_count: any
  display_sold_count_text: any
}

export interface ShopData {
  shop_name: string
  shop_icon: any
}

export interface GlobalCat {
  catid: number[]
}

export interface ItemRating {
  rating_star: number
  rating_count: number[]
  rcount_with_context: any
  rcount_with_image: any
}

export interface GlobalBrand {
  brand_id: number
  display_name?: string
}

export interface ItemConfig {
  disable_model_id_to_pdp: boolean
  disable_image_to_pdp: boolean
}

export interface Adjust {
  count: number
}

export interface QueryRewrite {
  fe_query_write_status: number
  rewrite_keyword: any
  hint_keywords: any
  ori_keyword: string
  ori_total_count: number
  rewrite_type: any
}

export interface FoodItemInfo {
  total_count: number
}

export interface UserInfo {
  user_type: number[]
  is_affiliate: boolean
}

export interface Experiment {
  key: string
  value: string
}

export interface Config {
  highlight_video_delay_ms: number
  image_ui_type: number
}

export interface CardSet {
  layout_id: number
  element_toggle: ElementToggle
}

export interface ElementToggle {
  atc_button: boolean
  feedback_button: boolean
}

export interface SrpComponentInfo {
  show_ai_chat_entry: boolean
  buy_together_card_count_per_page: number
  buy_together_card_meta_info: any
  buy_together_card_offset: number
  async_cards_query_cfg: AsyncCardsQueryCfg
}

export interface AsyncCardsQueryCfg {
  enable: boolean
  next_query_after: number
}

export interface Performance {
  request_id: string
  request_pack_size: number
  response_pack_size: number
  server_cost: number
  be_performance_info: string
}

export interface UiInfo {
  card_display_layout_type: number
  cover_image_ratio_type: any
  dynamic_translation_status: number
  can_show_shop_layout: any
  title_is_rewrite: any
}

export interface LandingPageInfo {
  buy_together_landing_page_meta_info: any
}

export interface DebugInfo {
  fallback: string
}
