webpackJsonp([171],{2102:function(t,n){t.exports={content:["section",["p","为组件提供统一的全局化配置。"],["h2","使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> configure<span class="token punctuation">,</span> getConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prefixCls<span class="token punctuation">:</span> <span class="token string">\'ant\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token string">\'prefixCls\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { configure, getConfig } from 'choerodon-ui';\n\nconfigure({ prefixCls: 'ant' });\n\nconst prefixCls = getConfig('prefixCls');"]]],meta:{category:"Components",subtitle:"全局化配置",cols:1,type:"Other",title:"Configure",filename:"components/configure/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","prefixCls"],["td","设置统一样式前缀"],["td","string"],["td","c7n"]],["tr",["td","proPrefixCls"],["td","设置统一样式前缀(pro组件)"],["td","string"],["td","c7n-pro"]],["tr",["td","ripple"],["td","是否开启波纹效果"],["td","boolean"],["td","true"]],["tr",["td","lookupUrl"],["td","lookup取值的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/code/${code}/","`"]],["tr",["td","lookupAxiosMethod"],["td","Lookup 和 lov 默认请求方法"],["td","string ","|"," string"],["td","post"]],["tr",["td","lovDefineUrl"],["td","Lov取配置的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/sys/lov/lov_define?code=${code}","`"]],["tr",["td","lovDefineAxiosConfig"],["td","返回Lov配置的钩子"],["td","(code: string) => AxiosRequestConfig"],["td","-"]],["tr",["td","lovQueryUrl"],["td","Lov取值的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/lov/dataset/${code}","`"]],["tr",["td","lovQueryAxiosConfig"],["td","Lov取值Axios逻辑的钩子"],["td","(code: string, lovConfig?: LovConfig) => AxiosRequestConfig"],["td","-"]],["tr",["td","axios"],["td","替换内置的axios实例"],["td","AxiosInstance"],["td"]],["tr",["td","dataKey"],["td","默认DataSet的dataKey"],["td","string"],["td","rows"]],["tr",["td","totalKey"],["td","默认DataSet的totalKey"],["td","string"],["td","total"]],["tr",["td","statusKey"],["td","默认DataSet提交的数据中标识状态的key"],["td","string"],["td","__status"]],["tr",["td","tlsKey"],["td","默认DataSet数据中标识多语言的key"],["td","string"],["td","__tls"]],["tr",["td","status"],["td","默认DataSet提交的数据的状态映射"],["td","{ add: string, update: string, delete: string }"],["td","{ add: 'add', update: 'update', delete: 'delete' }"]],["tr",["td","labelLayout"],["td","默认Form的labelLayout"],["td","string"],["td","horizontal"]],["tr",["td","queryBar"],["td","默认Table的queryBar"],["td","string"],["td","normal"]],["tr",["td","tableBorder"],["td","默认Table的border"],["td","boolean"],["td","true"]],["tr",["td","tableHighLightRow"],["td","默认Table当前行高亮"],["td","boolean"],["td","true"]],["tr",["td","tableRowHeight"],["td","默认Table行高"],["td","auto ","|"," number"],["td","30"]],["tr",["td","tableColumnResizable"],["td","默认Table列可调整列宽"],["td","boolean"],["td","true"]],["tr",["td","modalSectionBorder"],["td","默认Modal的头和脚有边框线"],["td","boolean"],["td","true"]],["tr",["td","modalOkFirst"],["td","默认Modal的ok按钮排在第一个"],["td","boolean"],["td","true"]],["tr",["td","buttonFuncType"],["td","默认Button的功能类型"],["td","string"],["td","raised"]],["tr",["td","renderEmpty"],["td","自定义组件空状态。"],["td","(componentName: string) => ReactNode"],["td","-"]],["tr",["td","generatePageQuery"],["td","分页参数转换的钩子"],["td","({ page?: number, pageSize?: number, sortName?: string, sortOrder?: string }) => object"],["td","-"]]]]]}}});