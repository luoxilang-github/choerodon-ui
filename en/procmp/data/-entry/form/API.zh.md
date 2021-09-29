---
title: API
---

| 参数                   | 说明                                                                                                                                  | 类型                        | 默认值                    | 版本   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------- | --- |
| action                 | 表单提交请求地址，当设置了 dataSet 时，该属性无作用                                                                                   | string                      |                           |    |
| method                 | 表单提交的 HTTP Method，可选值 GET \| POST                                                                                           | string                      | POST                      | |
| target                 | 表单提交的目标，当表单设置了设置 target 且没有 dataSet 时作浏览器默认提交，否则作 Ajax 提交                                           | string                      |                           |    |
| layout | 布局, 可选值： table \| none | string | table | 1.4.0 |
| processParams          | Ajax 提交时的参数回调                                                                                                                 | (event) => object           |                           |    |
| useColon | 是否使用冒号当开启时会在所有的label后面加上冒号,并且必填的*号会被移到最前方, 在没有label时不显示。 | boolean | false | |
| labelWidth | 内部控件的标签宽度。如果为数组则分别对应每列的标签宽度。数组长度不够列数，以默认值补全, 响应式参考[Responsive](#Form Responsive), 如果为auto，则根据内部label最大长度来对齐所有label | number\| 'auto' \| ('auto' \| number)[] \| object | 100 | |
| labelAlign             | 标签文字对齐方式，只在 labelLayout 为 horizontal 时起作用，可选值：left \| center \| right，响应式参考[Responsive](#Form Responsive) | string \| object            | right                     | |
| labelLayout            | 标签位置，可选值 horizontal \| vertical \| placeholder \| float \| none，响应式参考[Responsive](#Form Responsive)                       | string \| object            | horizontal                |  |
| dataIndex              | 对照 record 在 DataSet 中的 index                                                                                                     | number                      | ds.currentIndex           |    |
| record                 | 对照 record，优先级高于 dataSet 和 dataIndex                                                                                          | Record                      |                           |    |
| columns                | 列数，响应式参考[Responsive](#Form Responsive)                                                                                        | number \| object            | 1                         |    |
| pristine               | 显示原始值                                                                                                                            | boolean                     | false                     |    |
| onSubmit               | 提交回调                                                                                                                              | Function                    |                           |    |
| onReset                | 重置回调                                                                                                                              | Function                    |                           |    |
| onSuccess              | 提交成功回调                                                                                                                          | Function                    |                           |    |
| onError                | 提交失败回调                                                                                                                          | Function                    |                           |    |
| separateSpacing | 切分单元格间隔，当 label 布局为默认值 horizontal 时候使用padding修改单元格横向间距可能需要结合 labelWidth 效果会更好 | {width:number,height:number} | - |   |
| fieldHighlightRenderer | 高亮渲染器 | ({ title, content, dataSet, record, name, className, style }, element) => ReactNode |  |    |
| showValidation | 校验信息提示方式 | tooltip \| newLine | | 1.4.4 |

更多属性请参考 [ViewComponent](/zh/procmp/abstract/ViewComponent#viewcomponent)。

### Form Layout

#### Form 子元素属性

| 参数       | 说明                                                                                            | 类型                | 默认值 | 版本    |
| ---------- | ----------------------------------------------------------------------------------------------- | ------------------- | ------ | ------ |
| rowSpan    | 表单下控件跨越的行数                                                                            | number              | 1      |     |
| colSpan    | 表单下控件跨越的列数                                                                            | number              | 1      |     |
| newLine    | 另起新行                                                                                        | boolean             |        |     |
| label      | 标签                                                                                            | string \| ReactNode |        |     |
| name       | 字段名。可获取 DataSet 的字段属性，如 label，require 等，一般用于控件外需要嵌套其他元素时使用。 | string              |        |     |
| labelWidth | 标签宽度。同列控件中标签宽度取最大设定值。子元素的 labelWidth 无法响应式。                      | number              |        | 1.1.0    |
| useColon | 是否使用冒号,当开启时会在所有的label后面加上冒号,并且必填的*号会被移到最前方, 在没有label时不显示。未设置时沿用Form的useColon属性 | boolean | |        |
| hidden | 是否隐藏字段（依然会校验字段）| boolean | | 1.4.4 |

#### Form.Item

| 参数 | 说明 | 类型  | 版本 |
| --- | --- | --- |  --- |
| label | 标签 | string \| ReactNode   | 1.4.2  |
| name | 字段名。可获取 DataSet 的字段属性，如 label，require 等，一般用于控件外需要嵌套其他元素时使用。 | string   | 1.4.2 |
| labelWidth | 标签宽度。同列控件中标签宽度取最大设定值。子元素的 labelWidth 无法响应式。 | number  | 1.4.2 |
| useColon | 是否使用冒号,当开启时会在所有的label后面加上冒号,并且必填的*号会被移到最前方, 在没有label时不显示。未设置时沿用Form的useColon属性 | boolean | 1.4.2 |
| hidden | 是否隐藏字段（依然会校验字段）| boolean | | 1.4.4 |

### Form.FormVirtualGroup

> 当需要对 Form 的一些表单控件进行分组控制的时候可以使用，例如统一控制某些表单控件的显隐，此外，使用`FormVirtualGroup`可以统一对表单控件进行属性注入，例如统一的`className`等.注意，`FormVirtualGroup`组件本身不会产生实际的`dom`结果，其结果与去掉`FormVirtualGroup`然后将显隐控制等逐一写入表单控件中的写法完全一致，

### Form Responsive

响应式可设置参数 columns \| labelWidth \| labelAlign \| labelLayout 为一个键值对。

键值可参考 [Responsive BreakPoints](/zh/procmp/data-display/responsive/#BreakPoints)。