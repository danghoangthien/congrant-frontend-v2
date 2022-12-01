import styled from 'styled-components/macro';
import { ScreenSizes } from 'styles/StyleConstants';

export const OrganizationInfoStyle = styled.div`
  .oranization-name {
    font-size: 21px;
    font-weight: 700;
    line-height: 1.42;
    margin-bottom: 6px;
  }

  .organization-description {
    font-size: 14px;
    font-weight: 400;
    height: 400px;
    overflow: auto;
  }

  .organization-image {
    border-radius: 4px;
    overflow: hidden;
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    margin-bottom: 20px;
  }
`;
