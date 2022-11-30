import { Row, Col } from 'antd';
import BreadcumdButton from 'app/components/BreadcumdButton';
import { BREADCUMD_DATA } from './../consts';

const Header = ({ activeBreadcumb }) => {
  return (
    <div className="mb-7">
      <Row justify="space-between" align="middle">
        {/* 左の部分・Left Part */}
        <Col>
          <Row type="flex" align="middle">
            <Col className="mr-6">
              <div className="page-title">
                <span className="material-symbols-outlined icon">format_list_bulleted</span>
                <span className="ml-2">{'決済明細'}</span>
              </div>
            </Col>
            <Col className="mr-2">
              <BreadcumdButton data={BREADCUMD_DATA} active={activeBreadcumb} />
            </Col>
          </Row>
        </Col>
        {/* 右の部分・Right Part */}
        <Col />
      </Row>
    </div>
  );
};

export default Header;
