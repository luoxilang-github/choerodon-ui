---
title: API
---

### Select

| 参数                      | 说明                                                                                                                                                                        | 类型                                                           | 默认值                                                                      | 版本 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------- | ----- |
| combo                     | 复合输入值                                                                                                                                                                  | boolean                                                        | false                                                                       |      |
| searchable                | 是否可搜索                                                                                                                                                                  | boolean                                                        | false                                                                       |      |
| reverse                | 是否显示反选按钮                                                                                                                                                               | boolean                                                        | true                                                                       | 1.0.0      |
| searchMatcher             | 搜索器。当为字符串时，作为 lookup 的参数名来重新请求值列表。                                                                                                                | string \| ({ record, text, textField, valueField }) => boolean | ({ record, text, textField }) => record.get(textField).indexOf(text) !== -1 |      |
| optionsFilter             | 选项过滤                                                                                                                                                                    | (record) => boolean                                            |                                                                             |      |
| checkValueOnOptionsChange | 当选项改变时，检查并清除不在选项中的值                                                                                                                                      | boolean                                                        | true                                                                        |      |
| dropdownMatchSelectWidth  | 下拉框匹配输入框宽度                                                                                                                                                        | boolean                                                        | true                                                                        |      |
| dropdownMenuStyle         | 下拉框菜单样式名                                                                                                                                                            | object                                                         |                                                                             |      |
| options                   | 下拉框选项数据源（使用后需要自行处理参数等）                                                                                                                                | DataSet                                                        |                                                                             |      |
| primitiveValue            | 是否为原始值（建议以绑定的数据源 Field 的 type 来决定值类型，如 type 设为 object 相当于 primitiveValue 设为 false）true - 选项中 valueField 对应的值 false - 选项值对象 | boolean                                                        |                                                                             |      |
| optionRenderer            | 渲染 Option 本文的钩子                                                                                                                                                      | ({ record, text, value }) => ReactNode                         |                                                                             |      |
| notFoundContent           | 当下拉列表为空时显示的内容                                                                                                                                                  | ReactNode                                                      |                                                                             |      |
| onOption                  | 设置选项属性，如 disabled         |
| commonItem | 设置常用项 | Array&lt;string&gt; | |     |
| maxCommonTagPlaceholder | 设置常用项标签超出最大数量时的占位描述 | ReactNode \| (restValues) => ReactNode |  |        |
| maxCommonTagCount | 设置常用项标签最大数量 | number |  |      |
| maxCommonTagTextLength | 设置常用项标签文案最大长度 | number |  |                                                                                                                          | ({ dataSet, record })) => object                               |                                                                             |       |
| noCache    | 下拉时自动重新查询，不缓存下拉数据源                                   | boolean |   |       |
| selectAllButton | 多选模式下，是否显示全选按钮， 支持自定义按钮 | boolean \| (ButtonProps[]) => ButtonProps[] | true | 1.0.0       |
| popupContent | 下拉框的自定义内容, 注意函数参数 dataSet 为下拉列表的 options | ReactNode \| ({ dataSet, field, record, textField, valueField, content, setValue(value), setPopup(popup) }) => ReactNode | | 1.4.1      |
| searchFieldInPopup | 搜索框显示在下拉框中  | boolean |  | 1.4.4 |
| searchFieldProps | 搜索框显示在下拉框中时，可以设置输入框的属性  | TextFieldProps |  | 1.4.4 |

更多属性请参考 [TriggerField](/zh/procmp/abstract/trigger-field/#TriggerField)。

### Select.OptGroup

| 参数  | 说明       | 类型   |
| ----- | ---------- | ------ |
| label | 选项组标题 | string |

### Select.Option

| 参数     | 说明   | 类型    |
| -------- | ------ | ------- |
| value    | 选项值 | any     |
| disabled | 禁用   | boolean |
