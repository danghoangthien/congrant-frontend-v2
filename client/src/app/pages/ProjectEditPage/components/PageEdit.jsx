import { Row, Col, Button, DatePicker, Space, Radio, Tag } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
} from '../../CorporationSettingPage/components/Sprites';

import { StyledSubtitle, StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';

import styled from 'styled-components/macro';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const PageEdit = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'ページ編集'}</span>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageEdit;
