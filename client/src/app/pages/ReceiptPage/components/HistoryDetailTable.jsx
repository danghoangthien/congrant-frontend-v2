import { Card } from 'antd';
import { StyledTable } from './HistoryTable.style';
import Table from 'app/components/Table';
import SendMail from 'app/components/SendMail';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/IndividualPage/components/Detail';
import { DETAIL_MODE } from 'app/pages/IndividualPage/consts';
import * as metaData from './../historyDetailMetaData';
import '../Models/historyDetail';

// メッセージを送るボタン
const MailButton = ({ selectedRowKeys }) => <SendMail />;

// その他の操作メニュー
const contextDropdownItems = metaData.menuItems;

const HistoryTable = () => (
  <StyledTable>
    <Table
      className="clickable-table"
      TableName="領収書一覧"
      tableLayout="fixed"
      model="receiptHistoryDetail"
      metaData={metaData}
      Detail={
        <Detail
          activeKey={DETAIL_KEY_MAP.RECEIPT}
          data={{ receipt_id: 1 }}
          viewMode={DETAIL_MODE}
        />
      }
      contextButtons={[MailButton]}
      contextDropdownItems={contextDropdownItems}
    />
  </StyledTable>
);

export default HistoryTable;
