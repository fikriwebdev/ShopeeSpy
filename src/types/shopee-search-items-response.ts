export interface ShopeeSearchItemsResponse {
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
  card_set: any
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
  item_basic: ItemBasic
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
  item_card_displayed_asset: any
  item_data: any
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

export interface ItemBasic {
  itemid: number
  shopid: number
  name: string
  label_ids: number[]
  image: string
  images: string[]
  currency: string
  stock: number
  status: number
  ctime: number
  sold: number
  historical_sold: number
  liked: boolean
  liked_count: number
  view_count: any
  catid: number
  brand: string
  cmt_count: number
  flag: number
  cb_option: number
  item_status: string
  price: number
  price_min: number
  price_max: number
  price_min_before_discount: number
  price_max_before_discount: number
  hidden_price_display: any
  price_before_discount: number
  has_lowest_price_guarantee: boolean
  show_discount: number
  raw_discount: number
  discount?: string
  is_category_failed: any
  size_chart: any
  video_info_list?: VideoInfoList[]
  tier_variations: TierVariation[]
  item_rating: ItemRating
  item_type: number
  reference_item_id: string
  transparent_background_image: string
  is_adult: boolean
  badge_icon_type: any
  shopee_verified: boolean
  is_official_shop: boolean
  show_official_shop_label: boolean
  show_shopee_verified_label: boolean
  show_official_shop_label_in_title: any
  is_cc_installment_payment_eligible: boolean
  is_non_cc_installment_payment_eligible: boolean
  coin_earn_label: any
  show_free_shipping: boolean
  preview_info: any
  coin_info: any
  exclusive_price_info: any
  bundle_deal_id: any
  can_use_bundle_deal: any
  bundle_deal_info?: BundleDealInfo
  is_group_buy_item: any
  has_group_buy_stock: any
  group_buy_info: any
  welcome_package_type: number
  welcome_package_info: any
  add_on_deal_info?: AddOnDealInfo
  can_use_wholesale: boolean
  is_preferred_plus_seller: boolean
  shop_location: string
  has_model_with_available_shopee_stock: any
  voucher_info?: VoucherInfo
  can_use_cod: boolean
  is_on_flash_sale: boolean
  spl_installment_tenure?: number
  is_live_streaming_price: any
  is_mart: boolean
  pack_size: any
  deep_discount_skin: any
  is_service_by_shopee: boolean
  spl_repayment_label_repayment?: string
  spl_repayment_label_text?: string
  highlight_video: any
  free_shipping_info: any
  global_sold_count: any
  wp_eligibility: any
  live_streaming_info: any
  non_wifi_highlight_video: any
  dynamic_ui_flag: any
  estimated_delivery_time: EstimatedDeliveryTime
  adult_age_threshold: any
  need_kyc: boolean
  adult_types: any
  item_card_display_price: ItemCardDisplayPrice
  item_card_display_label?: ItemCardDisplayLabel
  model_id: any
  is_shopee_choice: boolean
  item_card_display_sold_count: ItemCardDisplaySoldCount
  spl_installment_discount?: SplInstallmentDiscount
  item_card_hidden_field: any
  compatible_with_user_vehicle: boolean
  item_card_display_overlay: any
  shop_name: string
  shop_icon: any
  is_lowest_price: boolean
  name_tr: any
  shop_location_tr: any
  fbs_logo: any
  item_card_display_brand_info: any
  voucher_label_display_infos?: VoucherLabelDisplayInfo[]
  item_card_element_collection: any
}

export interface VideoInfoList {
  video_id: string
  thumb_url: string
  duration: number
  version: number
  vid: string
  formats: Format[]
  default_format: DefaultFormat
  mms_data: any
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

export interface TierVariation {
  name: string
  options: string[]
  images?: string[]
  properties: any[]
  type: number
}

export interface ItemRating {
  rating_star: number
  rating_count: number[]
  rcount_with_context: number
  rcount_with_image: number
}

export interface BundleDealInfo {
  bundle_deal_id: number
  bundle_deal_label: string
}

export interface AddOnDealInfo {
  add_on_deal_id: number
  add_on_deal_label: string
  sub_type: number
  status: number
}

export interface VoucherInfo {
  promotion_id: number
  voucher_code: string
  label: string
}

export interface EstimatedDeliveryTime {
  estimated_delivery_time_text: string
  edt_type: number
  distance: any
  is_show_shop_name_and_icon: boolean
  edt_icon: any
  model_id: number
  edt_tracking_info: string
}

export interface ItemCardDisplayPrice {
  promotion_type: number
  promotion_id: number
  price: number
  strikethrough_price?: number
  discount: number
  hidden_price_display_text: any
  recommended_shop_voucher_promotion_id: any
  discount_text?: string
  model_id: number
  recommended_platform_voucher_promotion_id: any
  recommended_shop_voucher_info: any
  recommended_platform_voucher_info: any
  original_price: number
  model_selection_logic: any
}

export interface ItemCardDisplayLabel {
  label_type: number
  exclusive_price_result: any
  deep_discount_skin?: DeepDiscountSkin
}

export interface DeepDiscountSkin {
  skin_id: number
  start_time: number
  end_time: number
  skin_data: SkinData
}

export interface SkinData {
  promo_label: PromoLabel
}

export interface PromoLabel {
  promotion_price: string
  hidden_promotion_price: string
  text: any
  start_time: number
  end_time: number
}

export interface ItemCardDisplaySoldCount {
  historical_sold_count: any
  monthly_sold_count: any
  historical_sold_count_text: any
  monthly_sold_count_text: any
  display_sold_count: number
  rounded_local_monthly_sold_count: number
  local_monthly_sold_count_text: string
  rounded_display_sold_count: number
  display_sold_count_text: string
}

export interface SplInstallmentDiscount {
  card_promo_title_text: string
  card_promo_sub_title_text: string
}

export interface VoucherLabelDisplayInfo {
  type: number
  label_texts: string[]
  shop_voucher: ShopVoucher
  platform_voucher: any
}

export interface ShopVoucher {
  voucher_id: number
}

export interface TrackingInfo {
  viral_spu_tracking: any
  business_tracking: any
  multi_search_tracking: any
  groupid: any
  ruleid?: number[]
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
