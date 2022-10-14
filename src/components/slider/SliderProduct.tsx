import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    space?: number;
    center?: boolean;
    perView?: number;
    delay?: number;
    clickable?: boolean;
    navigation?: boolean;
    className?: string;
    wait?: boolean;
    pagination: boolean;
    autoplay?: boolean;
    speed?: number;
    perGroup?: number;
    perGroupAuto?: boolean;
    children?: React.ReactNode | JSX.Element[];
}

const SliderProduct = (props: Props) => {
    return (
        <Swiper
            loop={false}
            centeredSlides={props.center ?? true}
            slidesPerView={props.perView ?? 1}
            speed={props.speed}
            slidesPerGroup={props.perGroup ?? props.perView}
            slidesPerGroupAuto={props.perGroupAuto ?? false}
            autoplay={
                props.autoplay ?? {
                    delay: props.delay ? props.delay : 2500,
                    disableOnInteraction: false,
                }
            }
            pagination={
                props.pagination ?? {
                    clickable: props.clickable ?? true,
                }
            }
            navigation={props.navigation ?? true}
            modules={[Autoplay, Pagination, Navigation]}
            className={`common-swiper ${props.className}`}
        >
            {props.children}
        </Swiper>
    );
};

export default SliderProduct;
