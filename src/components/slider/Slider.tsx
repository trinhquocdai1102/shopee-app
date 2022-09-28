import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../../assets/fake-data/slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={48}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='home-swiper'
        >
            {sliderData.map((item) => {
                return (
                    <SwiperSlide>
                        <Link to={item.link}>
                            <img
                                className='image-cover'
                                src={item.link}
                                alt=''
                            />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
