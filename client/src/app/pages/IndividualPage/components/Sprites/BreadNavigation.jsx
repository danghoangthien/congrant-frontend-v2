import { Button, Space, Row } from 'antd';
import styled from 'styled-components/macro';
import { LIST_MODE } from '../../consts';
import { TEXT_GRAY_COLOR, LIGHT_GRAY } from 'styles/StyleConstants';

const StyledNavigation = styled(Space)`
  width: 100%;
  padding: 8px 16px;
  background: ${LIGHT_GRAY};
  border-radius: 4px;
`;

const Navigation = ({ setMode, label, identityLabel, id }) => {
  return (
    <StyledNavigation className="mb-8" size={24}>
      <Button
        className="icon-btn less-shadow-btn"
        icon={<span className="material-symbols-outlined fill-icon">chevron_left</span>}
        onClick={() => setMode(LIST_MODE)}
      >
        {'一覧へ'}
      </Button>
      <Row align="middle">
        <span style={{ color: TEXT_GRAY_COLOR }}>{label}</span>
        <span className="mx-2">{'/'}</span>
        <span>
          {identityLabel}
          {' : '}
          {id}
        </span>
      </Row>
    </StyledNavigation>
  );
};

export default Navigation;
