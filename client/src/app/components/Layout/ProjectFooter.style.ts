import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

export const FooterStyle = styled.span`
  .project-client-footer {
    background: none;
    border-top: 1px solid #dddddd;
  }

  .footer-logo {
    .ant-image {
      @media screen and (max-width: ${ScreenSizes.medium}) {
        // height: 27px;
      }
    }
  }

  & .copy-right {
    font-size: 13px;
    font-weight: 400;
    color: #666666;

    .external-link {
      font-weight: 700;
      color: #63b233;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
