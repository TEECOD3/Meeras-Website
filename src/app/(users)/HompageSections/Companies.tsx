import React from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { images } from "@/data/Data";

type Props = {};

const Companies = (props: Props) => {
  return (
    <div className="w-full text-center">
      <p className="mb-4 text-base font-semibold lg:text-xl  text-[#000B17]">
        Join the 100+ companies using the Segment platform
      </p>
      <ul className="mt-10 flex w-full gap-5 md:mx-auto md:w-[80%]">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2400}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <li>
                <Image
                  key={image.id}
                  className="h-14 w-14 rounded-full md:h-20 md:w-20 object-cover"
                  src={image.image}
                  alt="images of clients"
                  loading="lazy"
                  placeholder="blur"
                />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default Companies;
