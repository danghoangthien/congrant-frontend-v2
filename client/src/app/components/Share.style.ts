import styled from 'styled-components/macro';

export const ShareButton = styled.span`
  height: 24px;
  line-height: 22px;
  background: red;
  display: inline-block;
  color: #ffffff;
  border-radius: 4px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  .ant-space-item {
    // line-height: 1;
  }

  svg {
    color: #ffffff;
  }

  &.facebook {
    background-color: #1877f2;
  }

  &.twitter {
    background-color: #1d9bf0;
  }

  &.line {
    background-color: #39c754;
  }
`;
