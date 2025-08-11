import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
    return (
        <div className="image-slider-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto rounded-sm"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
