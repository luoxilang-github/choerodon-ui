import { Lang } from './enum';
import { Locale } from './locale';

const locale: Locale = {
  lang: Lang.ja_JP,
  Tabs: {
    rename: '名前の変更',
    default: 'ディフォルト',
    restore_default: 'デフォルトに戻す',
    set_default: 'デフォルトとして設定',
    set_default_tip: 'デフォルトとして設定されたタブは、次に関数を開いたときにデフォルトで表示されます',
    show_count: '表示番号',
    yes: 'はい',
    no: 'いいえ',
    save: '保存する',
    customization_settings: 'タブページの表示設定',
  },
  Table: {
    show_cached_seletion: '選択したすべてのレコードを表示',
    hide_cached_seletion: '選択したすべてのレコードを非表示にする',
    selection_tips: '{count} データがチェックされました',
    select_current_page: '現在のページを選択してください',
    unselect_current_page: '現在のページの選択を解除します',
    select_all_page: 'すべてのページを選択',
    unselect_all_page: 'すべてのページの選択を解除します',
    edit_button: '編集',
    create_button: '追加',
    save_button: '保存する',
    cancel_button: 'キャンセル',
    delete_button: '削除',
    remove_button: '削除',
    reset_button: 'リセット',
    query_button: 'クエリ',
    expand_button: '展開',
    collapse_button: '折り畳み',
    export_button: '書き出す',
    file_name: 'ファイル名',
    defalut_export: 'デフォルトのエクスポートファイル',
    more_button: 'その他操作',
    advanced_search: '高度な検索',
    export_waiting: 'データ量が多いので、待ってください',
    dirty_info: '表示条件が変更されました',
    restore: '復元',
    empty_data: 'データがまだありません',
    choose_export_columns: 'エクスポートする列を選択してください',
    column_name: '列名',
    filter_bar_placeholder: 'フィルターテーブル',
    advanced_query: '高度なクエリ',
    advanced_query_conditions: '高度なクエリ条件',
    more: 'もっと',
    download_button: 'ダウンロード',
    export_failed: 'エクスポート失敗',
    export_success: 'エクスポート成功',
    export_ing: 'エクスポート中...',
    retry_button: '再試行',
    export_break: 'データのエクスポートが中断されました。再試行をクリックして再エクスポートします。',
    export_operating: '表のデータをエクスポートしています。エクスポートの中止をクリックしてください。',
    enter_text_filter: 'フィルタリングするテキストを入力してください',
    clear_filter: 'クリアフィルター',
    save_filter: 'フィルタを保存',
    collapse: '片付け',
    predefined_fields: '事前定義されたフィールド',
    add_filter: 'フィルタを追加',
    enter_search_content: 'ファジークエリ、高頻度のテキストフィールドの集計',
    save_as: '名前を付けて保存',
    modified: '変更',
    no_save_filter: '保存フィルターなし',
    fast_filter: '高速フィルタリング',
    default_flag: 'ディフォルト',
    rename: '名前を変更',
    set_default: 'デフォルトとして設定',
    cancel_default: 'デフォルトをキャンセル',
    filter_rename: 'フィルタの名前変更',
    save_filter_as: 'フィルタを名前を付けて保存',
    whether_delete_filter: 'フィルタレコードを削除するかどうか',
    filter_name: 'フィルタ名',
    please_enter: '入ってください',
    query_option_yes: 'はい',
    query_option_no: 'いいえ',
    customization_settings: 'カスタマイズの設定',
    display_settings: '表示設定',
    table_settings: 'テーブルの設定',
    view_display: 'ディスプレイビュー',
    tiled_view: 'タイル張りのビュー',
    aggregation_view: '集計ビュー',
    density_display: '表示密度',
    normal: '通常',
    compact: 'コンパクト',
    parity_row: 'ゼブラパターン',
    height_settings: '高さの設定',
    auto_height: '自動高さ',
    fixed_height: '固定高さ',
    flex_height: 'レスポンシブ高さ',
    flex_height_help: 'テーブルの高さ = ウィンドウの高さ - レスポンシブな高さ',
    column_settings: 'ヘッダー設定',
    restore_default: 'デフォルトに戻す',
    left_lock: '左側をロック',
    right_lock: '右側をロック',
    unlocked: 'ロック解除',
    unlock: 'ロックを解除する',
    top: '上',
    up: 'アップ',
    down: 'ダウン',
    row_expand_settings: '行拡張設定',
    expand_cell: 'セルを展開します',
    expand_row: '行全体を展開します',
    expand_column: '列全体を展開します',
    collapse_cell: 'セルを折りたたむ',
    collapse_row: '行全体を折りたたむ',
    collapse_column: '列全体を折りたたむ',
  },
  Pagination: {
    page: 'ページ',
    jump_to: 'ジャンプする',
    jump_to_confirm: 'を選択します',
    records_per_page: 'ページあたりの行数:',
  },
  Upload: {
    file_selection: 'ファイルを選択',
    click_to_upload: 'クリックアップロード',
    upload_success: 'アップロード成功',
    upload_failure: 'アップロードに失敗しました',
    no_file: 'ファイルなし',
    been_uploaded: 'アップロードされたファイル',
    upload_path_unset: 'アップロードパスが設定されていません',
    not_acceptable_prompt: 'アップロードタイプのファイルが一致しません。予想:',
    file_list_max_length: 'ファイル数が上限を超えています',
  },
  Attachment: {
    value_missing_no_label: '添付ファイルをアップロードしてください。',
    value_missing: '{label}をアップロードしてください。',
    upload_attachment: '添付ファイルをアップロード',
    upload_picture: '画像をアップロード',
    download_all: 'すべてダウンロード',
    view_attachment: '添付ファイルを表示',
    no_attachments: '添付ファイルなし',
    by_upload_time: 'アップロード時間別',
    by_name: '名前で',
    operation_records: '運用記録',
    view_operation_records: '操作記録の表示',
    download: 'ダウンロード',
    delete: '消去',
    file_max_size: 'ファイルサイズは次を超えることはできません：{size}',
    file_list_max_length: 'ファイルの最大数は次のように制限されています：{count}',
    file_type_mismatch: 'ファイルタイプの不一致、正しいタイプ：{types}',
  },
  Modal: {
    ok: 'OK',
    cancel: 'キャンセル',
    close: '閉鎖',
    preview_picture: 'プレビュー画像',
  },
  DataSet: {
    unsaved_data_confirm: '未保存のデータがあります。続行しますか？ ',
    invalid_query_dataset: 'クエリ条件データセットの検証に失敗しました',
    delete_selected_row_confirm: '選択した行を削除してもよろしいですか？ ',
    delete_all_row_confirm: '本当にすべての行を削除しますか？ ',
    query_failure: 'クエリに失敗しました',
    submit_success: '送信に成功しました',
    submit_failure: '送信に失敗しました',
    cannot_add_record_when_head_no_current:
      'ヘッダーが選択されていません。新しい行レコードを作成できません',
  },
  DatePicker: {
    value_missing_no_label: '日付を選択してください。',
    value_missing: '{label}を選択してください。',
    type_mismatch: '有効な日付を入力してください。',
    ok: 'OK',
    today: '今日',
    now: 'この瞬間',
    this_week: '今週',
    invalid_date: '日付が無効です',
  },
  EmailField: {
    value_missing_no_label: 'メールアドレスを入力してください',
    value_missing: '{label}を入力してください。',
    type_mismatch: '有効なメールアドレスを入力してください',
  },
  IntlField: {
    modal_title: '多言語情報を入力してください',
  },
  NumberField: {
    value_missing_no_label: '数字を入力してください',
    value_missing: '{label}を入力してください。',
  },
  Radio: {
    value_missing_no_label: '選択してください。',
    value_missing: '{label}を選択してください。',
  },
  SelectBox: {
    value_missing_no_label: '選択してください。',
    value_missing: '{label}を選択してください。',
  },
  Select: {
    value_missing_no_label: '選択してください。',
    value_missing: '{label}を選択してください。',
    no_matching_results: '一致結果はありません。',
    select_all: 'すべて選択',
    select_re: '逆選択',
    unselect_all: 'いや',
    common_item: '共通アイテム',
  },
  Lov: {
    choose: '選択してください',
  },
  Transfer: {
    items: 'アイテム',
  },
  UrlField: {
    value_missing_no_label: 'urlを入力してください。',
    value_missing: '{label}を入力してください。',
    type_mismatch: '有効なurlを入力してください。',
  },
  ColorPicker: {
    value_missing_no_label: '色を選択してください',
    value_missing: '{label}を選択してください。',
    type_mismatch: '有効な色を選択してください。',
  },
  Validator: {
    bad_input: '数字を入力してください。',
    pattern_mismatch: '有効な値を入力してください。',
    range_overflow: '{label}は{max}以下でなければなりません。',
    range_underflow: '{label}は{min}以上でなければなりません。',
    step_mismatch: '有効な値を入力してください。 最も近い有効な値は{0}です。',
    step_mismatch_between:
      '有効な値を入力してください。 最も近い有効な2つの値は、それぞれ{0}と{1}です。',
    too_long:
      'コンテンツを{maxlength}以下の文字に減らしてください（現在は{length}文字を使用しています）。',
    too_short:
      'コンテンツを{minlength}以上の文字に増やしてください（現在は{length}文字を使用しています）。',
    type_mismatch: 'タイプに一致する有効な値を入力してください。',
    value_missing_no_label: 'このフィールドに入力してください。',
    value_missing: '{label}を入力してください。',
    unique: 'このフィールドの値は一意ではありません。再入力してください。',
    unknown: '不明なエラー。',
  },
  Icon: {
    icons: 'アイコン',
    whatsNew: '追加',
    direction: '方向性',
    suggestion: 'プロンプト提案',
    edit: 'クラスの編集',
    data: 'データクラス',
    other: 'Webサイト全般',
    series: 'セット',
  },
  Cascader: {
    please_select: '選んでください',
    value_missing_no_label: '選択してください。',
    value_missing: '{label}を選択してください。',
    select_all: 'すべて選択',
    unselect_all: 'いや',
  },
  Screening: {
    selected: '選択済み',
    pack_up: '片付け',
    more: 'もっと',
    multi_select: '複数の選択肢',
    confirm: '確認',
    cancel: 'キャンセル',
  },
};

export default locale;
