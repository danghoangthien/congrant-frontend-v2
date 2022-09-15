import styled, { keyframes } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

interface Props extends SvgProps {}

const speed = 1.5;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

interface SvgProps {
    small?: boolean;
}

const Svg = styled.svg<SvgProps>`
    animation: ${rotate} ${speed * 1.75}s linear infinite;
    height: ${p => (p.small ? '1.25rem' : '3rem')};
    width: ${p => (p.small ? '1.25rem' : '3rem')};
    transform-origin: center;
`;

const SvgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        color: #f5f4ff;

        background: linear-gradient(95.14deg, #9a90fc 0%, #ff8bc7 52.6%, #ffab51 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const LoadingIndicator = (props: Props): JSX.Element => {
    const { t } = useTranslation();
    return (
        <>
            <SvgContainer>
                <Svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    small={props.small}
                >
                    <path
                        d="M12 24C10.3805 24 8.80781 23.6836 7.32891 23.0578C5.89922 22.4531 4.61719 21.5859 3.51563 20.4844C2.41406 19.3828 1.54688 18.1008 0.942188 16.6711C0.316406 15.1922 0 13.6195 0 12C0 11.5336 0.377344 11.1562 0.84375 11.1562C1.31016 11.1562 1.6875 11.5336 1.6875 12C1.6875 13.3922 1.95938 14.7422 2.49844 16.0148C3.01875 17.243 3.76172 18.3469 4.70859 19.2938C5.65547 20.2406 6.75938 20.9859 7.9875 21.5039C9.25781 22.0406 10.6078 22.3125 12 22.3125C13.3922 22.3125 14.7422 22.0406 16.0148 21.5016C17.243 20.9813 18.3469 20.2383 19.2938 19.2914C20.2406 18.3445 20.9859 17.2406 21.5039 16.0125C22.0406 14.7422 22.3125 13.3922 22.3125 12C22.3125 10.6078 22.0406 9.25781 21.5016 7.98516C20.983 6.75998 20.2325 5.64659 19.2914 4.70625C18.3521 3.76387 17.2385 3.01321 16.0125 2.49609C14.7422 1.95938 13.3922 1.6875 12 1.6875C11.5336 1.6875 11.1563 1.31016 11.1563 0.84375C11.1563 0.377344 11.5336 0 12 0C13.6195 0 15.1922 0.316406 16.6711 0.942188C18.1008 1.54688 19.3828 2.41406 20.4844 3.51562C21.5859 4.61719 22.4508 5.90156 23.0555 7.32891C23.6813 8.80781 23.9977 10.3805 23.9977 12C23.9977 13.6195 23.6813 15.1922 23.0555 16.6711C22.4531 18.1008 21.5859 19.3828 20.4844 20.4844C19.3828 21.5859 18.0984 22.4508 16.6711 23.0555C15.1922 23.6836 13.6195 24 12 24Z"
                        fill="url(#paint0_linear_1090_2110)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1090_2110"
                            x1="0"
                            y1="0"
                            x2="25.9473"
                            y2="2.33503"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9A90FC" />
                            <stop offset="0.526042" stopColor="#FF8BC7" />
                            <stop offset="1" stopColor="#FFAB51" />
                        </linearGradient>
                    </defs>
                </Svg>
                <div className="text">{t(translations.loading)}</div>
            </SvgContainer>
        </>
    );
};
