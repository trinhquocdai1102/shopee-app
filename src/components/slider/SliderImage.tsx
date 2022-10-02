import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

interface Props {
    space?: number;
    center?: boolean;
    perView?: number;
    delay?: number;
    clickable?: boolean;
    navigation?: boolean;
    className?: string;
    wait?: boolean;
    autoplay?: boolean;
    data: any;
}

const SliderImage = (props: Props) => {
    return (
        <Swiper
            loop={true}
            spaceBetween={48}
            centeredSlides={props.center ?? true}
            slidesPerView={props.perView ?? 1}
            autoplay={
                props.autoplay ?? {
                    delay: props.delay ?? 2500,
                    disableOnInteraction: false,
                }
            }
            pagination={{
                clickable: props.clickable ?? true,
            }}
            navigation={props.navigation ?? true}
            modules={[Autoplay, Pagination, Navigation]}
            className={props.className}
        >
            {props.data.map((item: any) => {
                return (
                    <SwiperSlide key={item.id}>
                        <Link to={item.link}>
                            <img
                                className='image-cover'
                                src={item.src || item.thumbnail || item.image}
                                alt=''
                            />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SliderImage;
