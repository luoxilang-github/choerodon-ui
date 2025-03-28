---
order: 2
title:
  zh-CN: 绑定数据源
  en-US: DataSet Binding
---

## zh-CN

绑定数据源

## en-US

DataSet Binding

````jsx
import { Popover } from 'choerodon-ui';
import { Attachment, DataSet, Form, Button } from 'choerodon-ui/pro';

const App = () => {
  const ds = React.useMemo(() => new DataSet({
    fields: [{ name: 'attachment', help: '1支持文件类型： .deb .txt .pdf image/*', type: 'attachment', label: <span>技术附件</span>, max: 9, required: true, template: { attachmentUUID: '4c74a34a-fa37-4e92-be9d-5cf726fb1472' } }],
  }), []);
  const props = {
    accept: ['.deb', '.txt', '.pdf', 'image/*'],
    name: 'attachment',
    help: '支持文件类型： .deb .txt .pdf image/*',
    labelLayout: 'float',
    showValidation: 'newLine',
    viewMode: 'popup',
    listType: 'picture-card',
  };

  React.useEffect(() => {
    ds.loadData([{ attachment: '4c74a34a-fa37-4e92-be9d-5cf726fb1472' }]);
    setTimeout(() => {
      ds.loadData([{ attachment: '4c74a34a-fa37-4e92-be9d-5cf726fb1472' }]);
    }, 0);
    setTimeout(() => {
      ds.loadData([{ attachment: '4c74a34a-fa37-4e92-be9d-5cf726fb1472' }]);
    }, 0);
  }, []);

  return (
    <Form dataSet={ds}>
      <Attachment {...props} />
      <Attachment
        {...props}
        templateDownloadButtonRenderer={() => 
          <Popover title="模板标题" content="模板信息">
            <Button
              funcType="flat"
              style={{marginLeft: 0 }}
            >
              下载模板
            </Button>
          </Popover>
        }
        label="自定义下载模板按钮"
      />
    </Form>
  );
}

ReactDOM.render(
  <App />,
  mountNode,
);
````
