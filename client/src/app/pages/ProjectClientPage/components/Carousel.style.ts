import styled from 'styled-components/macro';

export const CarouselStyle = styled.div`
  width: 100%;

  .ant-image-img {
    height: 100%;
    object-fit: cover;
  }

  .main-slider {
    // width: 700px;
    height: 394px;
    margin-left: 0;

    .swiper-slide {
      border-radius: 4px;
      overflow: hidden;

      .ant-image {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }

  .thumb-slider {
    .swiper-slide {
      width: 100px !important;
      border-radius: 4px;
      overflow: hidden;
    }
  }
`;
