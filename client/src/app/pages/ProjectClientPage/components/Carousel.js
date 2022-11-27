import React, { useState } from 'react';
import { CarouselStyle } from './Carousel.style';
import { Image, Row, Col } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
// import required modules
import { EffectFade, Thumbs, Autoplay } from 'swiper';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <CarouselStyle>
      <Row>
        <Col span={24} className="mb-6">
          <Swiper
            spaceBetween={10}
            effect={'fade'}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Autoplay, EffectFade, Thumbs]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            className="main-slider"
          >
            <SwiperSlide>
              <div className="img-cover">
                <img
                  src="https://media.istockphoto.com/id/624183176/photo/terraced-rice-field-in-mu-cang-chai-vietnam.jpg?s=612x612&w=0&k=20&c=8r_qT3g_x58wtOr6WKNtZDN7D1c4yKWttcfLJDnB9EA="
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-cover">
                <img
                  src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-cover">
                <img
                  // preview={false}
                  // width={700}
                  // height={394}
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col span={24}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="thumb-slider"
          >
            <SwiperSlide>
              <div className="img-cover">
                <img
                  // width={100}
                  // height={56}
                  // preview={false}
                  src="https://media.istockphoto.com/id/624183176/photo/terraced-rice-field-in-mu-cang-chai-vietnam.jpg?s=612x612&w=0&k=20&c=8r_qT3g_x58wtOr6WKNtZDN7D1c4yKWttcfLJDnB9EA="
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-cover">
                <img
                  // width={100}
                  // height={56}
                  // preview={false}
                  src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-cover">
                <img
                  // width={100}
                  // height={56}
                  // preview={false}
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </CarouselStyle>
  );
};

export default Carousel;
