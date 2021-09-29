import React from 'react';
import ReactDOM from 'react-dom';
import { Table, DataSet } from 'choerodon-ui/pro';

const App = () => {
  const ds = React.useMemo(
    () =>
      new DataSet({
        fields: [
          {
            name: 'attachment',
            type: 'attachment',
            label: '技术附件',
            max: 9,
            accept: ['.deb', '.txt', '.pdf', 'image/*'],
            required: true,
          },
          { name: 'attachment2', type: 'attachment', label: '管理附件' },
        ],
        data: [
          {
            attachment: '4c74a34a-fa37-4e92-be9d-5cf726fb1472',
            attachment2: '88888888-fa37-4e92-be9d-5cf726fb1472',
          },
        ],
      }),
    [],
  );
  const columns = React.useMemo(
    () => [{ name: 'attachment', editor: true }, { name: 'attachment2' }],
    [],
  );
  return <Table dataSet={ds} columns={columns} />;
};

ReactDOM.render(<App />, document.getElementById('container'));