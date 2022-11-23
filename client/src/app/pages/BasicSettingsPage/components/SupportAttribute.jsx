import { Space, Row, Col, Input, Badge, Button } from 'antd';
import { TEXT_GRAY_COLOR, DANGER_COLOR, LIGHT_GRAY } from 'styles/StyleConstants';

const SupportAttribute = () => {
  return (
    <Row>
      <Col span={24} className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'サポーター属性'}</span>
        </Col>
      </Col>

      <Col span={24} className="mb-6">
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <span class="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
                menu
              </span>
              <Input value={'理事'} />
              <Badge
                count={'99'}
                className="roboto-mono"
                style={{ backgroundColor: LIGHT_GRAY, color: TEXT_GRAY_COLOR }}
              />
              <span
                class="material-symbols-outlined fill-icon"
                style={{ color: DANGER_COLOR, fontSize: '18px', display: 'flex' }}
              >
                delete
              </span>
            </Space>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <span class="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
                menu
              </span>
              <Input value={'ボランティア'} />
              <Badge
                count={'99'}
                className="roboto-mono"
                style={{ backgroundColor: LIGHT_GRAY, color: TEXT_GRAY_COLOR }}
              />
              <span
                class="material-symbols-outlined fill-icon"
                style={{ color: DANGER_COLOR, fontSize: '18px', display: 'flex' }}
              >
                delete
              </span>
            </Space>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <span class="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
                menu
              </span>
              <Input value={'代表知人'} />
              <Badge
                count={'99'}
                className="roboto-mono"
                style={{ backgroundColor: LIGHT_GRAY, color: TEXT_GRAY_COLOR }}
              />
              <span
                class="material-symbols-outlined fill-icon"
                style={{ color: DANGER_COLOR, fontSize: '18px', display: 'flex' }}
              >
                delete
              </span>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="pl-8">
        <Space align="center">
          <Input placeholder={'理事'} />
          <Button className="icon-btn" type="primary">
            <span class="material-symbols-outlined">add</span>
            <span>{'追加'}</span>
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default SupportAttribute;
