import Table from 'app/components/Table';
import { TableStyle } from 'app/components/Table/Table.style';
import './Models';
import * as metaData from './metaData';

const ActivityTable = ({ ...rest }) => (
  <TableStyle>
    <Table
      className="clickable-table"
      tableLayout="fixed"
      model="activityList"
      metaData={metaData}
      showRowSelection={false}
      showDownLoad={false}
    />
  </TableStyle>
);

export default ActivityTable;
