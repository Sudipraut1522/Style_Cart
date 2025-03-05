import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface SwiperComponentProps<T> {
  data?: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number }>;
  clickable?: boolean;
  autoPlay?: boolean;
  className?: string;
}

const SwiperComponent = <T,>({
  className,
  autoPlay = false,
  clickable = true,
  data,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 10,
  breakpoints = {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  },
}: SwiperComponentProps<T>) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    navigation
    pagination={{ clickable: clickable }}
    className={`${className}`}
    autoplay={{ delay: 3000, disableOnInteraction: autoPlay }}
    breakpoints={breakpoints}
  >
    {data?.map((item, index) => (
      <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperComponent;
