import { useState } from 'react';
// ANTD
import { Image, Typography, Button } from 'antd';
// MEDIA QUERY
import Media from 'react-media';
import { OrganizationInfoStyle } from './OrganizationInfo.style';

const { Paragraph } = Typography;

const OrganizationInfo = () => {
  const [row, setRow] = useState(4);

  const description =
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認する';

  return (
    <OrganizationInfoStyle>
      <Media
        query="(min-width: 992px)"
        render={() => (
          <div className="mb-5">
            <Image
              className="organization-image"
              preview={false}
              src="https://media.istockphoto.com/id/624183176/photo/terraced-rice-field-in-mu-cang-chai-vietnam.jpg?s=612x612&w=0&k=20&c=8r_qT3g_x58wtOr6WKNtZDN7D1c4yKWttcfLJDnB9EA="
              alt=""
            />
          </div>
        )}
      />
      <div className="oranization-name">NPO法人コングラントへのご支援をお願いします。</div>
      <div className="organization-description">
        <Media queries={{ small: '(max-width: 991px)' }}>
          {matches =>
            matches.small ? (
              <>
                <Paragraph ellipsis={{ rows: row }}>{description}</Paragraph>
                {row && (
                  <Button
                    type="text"
                    className="more-btn"
                    onClick={e => {
                      setRow(null);
                    }}
                  >
                    続きを読む
                  </Button>
                )}
              </>
            ) : (
              <>{description}</>
            )
          }
        </Media>
      </div>
    </OrganizationInfoStyle>
  );
};

export default OrganizationInfo;
