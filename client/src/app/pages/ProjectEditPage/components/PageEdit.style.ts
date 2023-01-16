import styled from 'styled-components/macro';

export const PageEditStyle = styled.div`
  width: 100%;

  // .ant-upload-list-picture-card-container {
  //   width: 32%;
  //   height: auto;
  // }

  .ant-upload-list {
    display: flex;
  }

  .ant-upload-picture-card-wrapper {
    &.upload-items-3 {
      .ant-upload-list-picture-card-container {
        flex-grow: 1;
        height: auto;
      }
    }
  }

  .ant-upload-list-picture-card .ant-upload-list-item-thumbnail,
  .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
    object-fit: cover;
  }

  .page-image {
    .img-list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;

      > li {
        flex-grow: 1;
        position: relative;
        padding-top: 50%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding: 0 10px;
        }
      }
    }
  }

  .block-item {
    position: relative;

    .block-btn {
      position: absolute;
      left: -50px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      display: flex;
    }

    &:hover,
    &.active {
      .block-btn {
        opacity: 1;
      }
    }
  }
`;
