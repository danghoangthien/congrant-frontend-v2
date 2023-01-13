import Table from 'app/components/Table';
import { TableStyle } from 'app/components/Table/Table.style';
import './Models';
import * as metaData from './metaData';

const CommentTable = ({ ...rest }) => (
  <TableStyle>
    <Table
      className="clickable-table"
      tableLayout="fixed"
      model="commentList"
      metaData={metaData}
      showRowSelection={false}
      showDownLoad={false}
      rowClassName={record => {
        console.log('record', record);
        return record.status === 1 ? 'table-row-light' : 'table-row-dark';
      }}
    />
  </TableStyle>
);

export default CommentTable;
