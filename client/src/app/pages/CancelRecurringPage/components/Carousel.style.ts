import styled from 'styled-components/macro';
import { ScreenSizes } from 'styles/StyleConstants';
import { media } from 'styles/media';

export const CarouselStyle = styled.div`
  width: 100%;

  .ant-image-img {
    height: 100%;
    object-fit: cover;
  }

  .main-slider {
    // width: 700px;
    // height: 394px;
    margin-left: 0;

    .swiper-slide {
      .img-cover {
        width: 100%;
        height: 100%;
        padding-top: 57%;
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    @media screen and (max-width: ${ScreenSizes.small}) {
      height: auto;
    }
  }

  .thumb-slider {
    .swiper-slide-thumb-active {
      position: relative;
      border-radius: 4px;
      overflow: hidden;

      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    .swiper-slide {
      // width: 100px !important;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }

      @media screen and (max-width: ${ScreenSizes.mobile}) {
        // width: auto !important;
      }

      ${media.small`
        width: 100px !important;
      `}
    }

    .img-cover {
      width: 100%;
      height: 100%;
      padding-top: 57%;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;
