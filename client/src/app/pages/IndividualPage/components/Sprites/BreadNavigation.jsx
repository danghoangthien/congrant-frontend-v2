import { Button, Space } from 'antd';
import styled from 'styled-components/macro';
import { LIST_MODE } from '../../consts';

const StyledNavigation = styled(Space)`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 24px;
  background: #f0f0ee;
  border-radius: 4px;
  .bread {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Navigation = ({ setMode, label, identityLabel, id }) => {
  return (
    <StyledNavigation className="mb-8">
      <Button onClick={() => setMode(LIST_MODE)}>{'一覧へ'}</Button>
      <span className="bread">{label}</span>
      <span>{'/'}</span>
      <span>
        {identityLabel}
        {' : '}
        {id}
      </span>
    </StyledNavigation>
  );
};

export default Navigation;
