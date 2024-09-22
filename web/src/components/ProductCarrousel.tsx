import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

type IProductCarrouselProps = {
  images: string[];
};

export function ProductCarrousel({
  images,
}: IProductCarrouselProps) {

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product  ${index}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
