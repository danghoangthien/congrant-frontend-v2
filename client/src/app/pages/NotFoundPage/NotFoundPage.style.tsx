import { StyleConstants, ScreenSizes } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

import BackGround from './assets/background.png';

export const Wrapper = styled.div`
    height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 320px;
    background-image: url(${BackGround});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const PageNotFoundLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    widht: 90%;

    .notFound-img-1 {
        height: 500px;
        width: 500px;
    }

    .notFound-div-1 {
        font-style: normal;
        font-weight: 300;
        font-size: 46px;
        line-height: 63px;
        text-align: center;
        color: #ffffff;
    }

    .notFound-div-2 {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 23px;
        text-align: center;
        color: #ebe9fa;
        margin-top: 16px;
        white-space: pre;
    }

    .notFound-div-3 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 92px;
        background: #7d70f6;
        border-radius: 9px;
        margin: 24px 0px;

        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        border: 1px solid #7d70f6;

        &:hover {
            cursor: pointer;
            background: unset;
            border: 1px solid #7d70f6;
            transition: all ease 0.3s;
        }
    }

    @media (max-width: ${ScreenSizes.small}) {
        .notFound-img-1 {
            width: 90%;
        }
        .notFound-div-2 {
            width: 90%;
        }
    }

    @media (max-width: ${ScreenSizes.mobile}) {
        .notFound-div-2 {
            white-space: unset;
            width: 90%;
        }
        .notFound-div-3 {
            width: 90%;
        }
    }
`;
