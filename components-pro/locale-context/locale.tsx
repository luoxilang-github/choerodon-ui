/* eslint-disable camelcase */
import { Lang } from 'choerodon-ui/dataset/locale-context/enum';
import { Locale as DataSetLocale } from 'choerodon-ui/dataset/locale-context/locale';
import zh_CN from './zh_CN';

export interface Locale extends DataSetLocale {
  lang: Lang;
  Tabs: {
    rename: string;
    default: string;
    restore_default: string;
    set_default: string;
    set_default_tip: string;
    show_count: string;
    yes: string;
    no: string;
    save: string;
    customization_settings: string;
  };
  Table: {
    show_cached_records: string;
    hide_cached_records: string;
    cached_tips: string;
    cached_type_selected: string;
    cached_type_created: string;
    cached_type_updated: string;
    cached_type_destroyed: string;
    selection_tips: string;
    select_current_page: string;
    unselect_current_page: string;
    select_all_page: string;
    unselect_all_page: string;
    edit_button: string;
    create_button: string;
    save_button: string;
    cancel_button: string;
    delete_button: string;
    remove_button: string;
    reset_button: string;
    all_reset_button: string;
    filter_placeholder: string;
    query_button: string;
    expand_button: string;
    collapse_button: string;
    export_button: string;
    default_export: string;
    advanced_search: string;
    dirty_info: string;
    restore: string;
    empty_data: string;
    choose_export_columns: string;
    column_name: string;
    filter_bar_placeholder: string;
    advanced_query: string;
    advanced_query_conditions: string;
    export_failed: string;
    download_button: string;
    export_success: string;
    export_ing: string;
    retry_button: string;
    file_name: string;
    export_break: string;
    export_operating: string;
    export_waiting: string;
    more: string;
    query_more_children: string;
    enter_text_filter: string;
    clear_filter: string;
    save_filter: string;
    collapse: string;
    predefined_fields: string;
    add_filter: string;
    enter_search_content: string;
    no_save_filter: string;
    save_as: string;
    modified: string;
    fast_filter: string;
    default_flag: string;
    rename: string;
    set_default: string;
    cancel_default: string;
    filter_edit: string;
    save_filter_as: string;
    save_filter_value: string,
    preset: string,
    user: string,
    whether_delete_filter: string;
    filter_name: string;
    please_enter: string;
    query_option_yes: string;
    query_option_no: string;
    customization_settings: string;
    display_settings: string;
    view_display: string;
    tiled_view: string;
    aggregation_view: string;
    density_display: string;
    normal: string;
    compact: string;
    parity_row: string;
    table_settings: string;
    height_settings: string;
    auto_height: string;
    fixed_height: string;
    flex_height: string;
    flex_height_help: string;
    column_settings: string;
    restore_default: string;
    left_lock: string;
    right_lock: string;
    drag_lock_tip: string;
    unlocked: string;
    unlock: string;
    top: string;
    up: string;
    down: string;
    row_expand_settings: string;
    expand_cell: string;
    expand_row: string;
    expand_column: string;
    collapse_cell: string;
    collapse_row: string;
    collapse_column: string;
    current_page: string;
    current_page_records: string;
    cached_records: string;
    refresh: string;
    export_all: string,
    export_selected: string,
    filter_header_title: string,
    field_settings: string,
    lock_first_column: string,
    lock_column: string,
    cancel_lock_first_column: string,
    cancel_lock_column: string,
    enter_search_filter: string,
    search: string,
    clear: string,
    show: string,
    hide: string,
    add_search: string,
    custom_sort: string,
    add_sort: string,
    please_select_column: string,
    ascending: string,
    descending: string,
    current_data_sort: string;
    all_data_sort: string;
    ad_search_help: string,
    ad_search_all: string,
    ad_search_any: string,
    ad_search_custom: string,
    ad_search_placeholder: string,
    ad_search_add: string,
    ad_search_title: string,
    ad_search_validation: string,
    table_support: string,
    ctrl_c_info: string,
    ctrl_v_info: string,
    download_table_template: string,
    download_table_template_tooltip: string,
    copy_config: string,
    copy_pristine: string,
    copy_display: string,
    copy_display_success: string,
    copy_pristine_success: string,
    paste_template: string,
    no_xlsx: string,
    arrange_count: string,
    arrange_avg: string,
    arrange_max: string,
    arrange_min: string,
    arrange_sum: string,
  };
  Pagination: {
    page: string;
    jump_to: string;
    jump_to_confirm: string;
    records_per_page: string;
    max_pagesize_info: string;
  };
  Upload: {
    file_selection: string;
    click_to_upload: string;
    upload_success: string;
    upload_failure: string;
    no_file: string;
    upload_path_unset: string;
    been_uploaded: string;
    not_acceptable_prompt: string;
    file_list_max_length: string;
  };
  Attachment: {
    value_missing_no_label: string;
    value_missing: string;
    upload_attachment: string;
    upload_picture: string;
    download_all: string;
    view_attachment: string;
    no_attachments: string;
    by_upload_time: string;
    by_name: string;
    by_custom: string;
    operation_records: string;
    view_operation_records: string;
    download: string;
    delete: string;
    file_max_size: string;
    file_list_max_length: string;
    file_type_mismatch: string;
    drag_info: string;
    download_template: string;
    secret_level_modal_title: string;
    remove_confirm_title: string;
  };
  Modal: {
    ok: string;
    cancel: string;
    close: string;
    preview_picture: string;
  };
  DatePicker: {
    value_missing: string;
    value_missing_no_label: string;
    type_mismatch: string;
    ok: string;
    today: string;
    now: string;
    this_week: string;
    invalid_date: string;
    year: string;
  };
  EmailField: {
    value_missing: string;
    value_missing_no_label: string;
    type_mismatch: string;
  };
  IntlField: {
    modal_title: string;
    output_modal_title: string;
  };
  NumberField: {
    value_missing: string;
    value_missing_no_label: string;
  };
  Radio: {
    value_missing: string;
    value_missing_no_label: string;
  };
  SelectBox: {
    value_missing: string;
    value_missing_no_label: string;
  };
  Select: {
    value_missing: string;
    value_missing_no_label: string;
    no_matching_results: string;
    select_all: string;
    select_re: string;
    unselect_all: string;
    common_item: string;
    query_loading: string;
  };
  SecretField: {
    edit: string;
    query: string;
    verify_type: string;
    verify_value: string;
    verify_code: string;
    get_verify_code: string;
    cancel: string;
    next_step: string;
    verify_slider_hint: string;
    verify_finish: string;
    ok_btn: string;
    type_mismatch: string;
  };
  Lov: {
    choose: string;
    selection_tips: string;
    non_conformity_warning: string;
  };
  Transfer: {
    items: string;
    search_placeholder_left: string;
    search_placeholder_right: string;
  };
  UrlField: {
    value_missing: string;
    value_missing_no_label: string;
    type_mismatch: string;
  };
  ColorPicker: {
    value_missing: string;
    value_missing_no_label: string;
    type_mismatch: string;
    used_view: string;
    custom_view: string;
    pick_color_view: string;
  };
  Icon: {
    icons: string;
    whatsNew: string;
    direction: string;
    suggestion: string;
    edit: string;
    data: string;
    other: string;
    series: string;
  };
  Cascader: {
    please_select: string;
    value_missing_no_label: string;
    value_missing: string;
    select_all: string;
    unselect_all: string;
  };
  Screening: {
    selected: string;
    pack_up: string;
    more: string;
    multi_select: string;
    confirm: string;
    cancel: string;
  };
  Typography: {
    expand: string;
    copy: string;
    copied: string;
  };
  Operator: {
    equal: string;
    not_equal: string;
    greater_than: string;
    greater_than_or_equal_to: string;
    less_than: string;
    less_than_or_equal_to: string;
    in: string;
    not_in: string;
    is_null: string;
    is_not_null: string;
    fully_fuzzy: string;
    after_fuzzy: string;
    before_fuzzy: string;
    range: string;
  };
}

export default zh_CN;
