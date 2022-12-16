import { CourseBox } from './CourseInfo.style';
import { Row, Col, Image, Descriptions, Button } from 'antd';
import styled from 'styled-components/macro';

const CourseInfo = () => {
  const MAIN_COLOR = '#e34855';

  const CourseStyle = styled.div`
    .course-btn {
      width: 100%;
      border-color: ${MAIN_COLOR};
      background: ${`linear-gradient(95.98deg, ${MAIN_COLOR} 14.71%, #F11628 91.59%)`};
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  `;

  return (
    <CourseStyle>
      <Row>
        <Col span={24}>
          <CourseBox style={{ width: '100%' }} bodyStyle={{ padding: '18px' }}>
            <Row>
              <Col span={24} className="mb-4">
                <Image
                  preview={false}
                  width={'100%'}
                  height={160}
                  src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                  style={{ objectFit: 'cover' }}
                />
              </Col>
              <Col span={24}>
                <Descriptions
                  title="Aコース"
                  colon={false}
                  size="small"
                  labelStyle={{ color: '#737373', fontWeight: '500', fontSize: '13px' }}
                  contentStyle={{ fontWeight: '700', fontSize: '15px' }}
                >
                  <Descriptions.Item span={1} label="金額">
                    5,000円
                  </Descriptions.Item>
                  <Descriptions.Item span={1} label="在庫">
                    無制限
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col className="mb-3">
                <div className="course-description">
                  コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。
                </div>
              </Col>
              <Col span={24}>
                <Button size="large" className="course-btn" type="primary">
                  このコースで支援する
                </Button>
              </Col>
            </Row>
          </CourseBox>
        </Col>
        <Col span={24}>
          <CourseBox style={{ width: '100%' }} bodyStyle={{ padding: '18px' }}>
            <Row>
              <Col span={24} className="mb-4">
                <Image
                  preview={false}
                  width={'100%'}
                  height={160}
                  src="https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  style={{ objectFit: 'cover' }}
                />
              </Col>
              <Col span={24}>
                <Descriptions
                  title="Aコース"
                  colon={false}
                  size="small"
                  labelStyle={{ color: '#737373', fontWeight: '500', fontSize: '13px' }}
                  contentStyle={{ fontWeight: '700', fontSize: '15px' }}
                >
                  <Descriptions.Item span={1} label="金額">
                    5,000円
                  </Descriptions.Item>
                  <Descriptions.Item span={1} label="在庫">
                    無制限
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col className="mb-3">
                <div className="course-description">
                  コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。
                </div>
              </Col>
              <Col span={24}>
                <Button size="large" className="course-btn" type="primary">
                  このコースで支援する
                </Button>
              </Col>
            </Row>
          </CourseBox>
        </Col>
        <Col span={24}>
          <CourseBox style={{ width: '100%' }} bodyStyle={{ padding: '18px' }}>
            <Row>
              <Col span={24} className="mb-4">
                <Image
                  preview={false}
                  width={'100%'}
                  height={160}
                  src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  style={{ objectFit: 'cover' }}
                />
              </Col>
              <Col span={24}>
                <Descriptions
                  title="Aコース"
                  colon={false}
                  size="small"
                  labelStyle={{ color: '#737373', fontWeight: '500', fontSize: '13px' }}
                  contentStyle={{ fontWeight: '700', fontSize: '15px' }}
                >
                  <Descriptions.Item span={1} label="金額">
                    5,000円
                  </Descriptions.Item>
                  <Descriptions.Item span={1} label="在庫">
                    無制限
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col className="mb-3">
                <div className="course-description">
                  コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。
                </div>
              </Col>
              <Col span={24}>
                <Button size="large" className="course-btn" type="primary">
                  このコースで支援する
                </Button>
              </Col>
            </Row>
          </CourseBox>
        </Col>
        <Col span={24}>
          <CourseBox
            style={{ width: '100%' }}
            bodyStyle={{ padding: '18px' }}
            className="out-number"
          >
            <Row>
              <Col span={24} className="mb-4">
                <Image
                  preview={false}
                  width={'100%'}
                  height={160}
                  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  style={{ objectFit: 'cover' }}
                />
              </Col>
              <Col span={24}>
                <Descriptions
                  title="Aコース"
                  colon={false}
                  size="small"
                  labelStyle={{ color: '#737373', fontWeight: '500', fontSize: '13px' }}
                  contentStyle={{ fontWeight: '700', fontSize: '15px' }}
                >
                  <Descriptions.Item span={1} label="金額">
                    5,000円
                  </Descriptions.Item>
                  <Descriptions.Item span={1} label="在庫">
                    無制限
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <div className="course-description">
                  コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。
                </div>
              </Col>
            </Row>
          </CourseBox>
        </Col>
      </Row>
    </CourseStyle>
  );
};

export default CourseInfo;
