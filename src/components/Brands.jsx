import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const brands = [
    { id: 1, img: "/images/brand-img1.webp" },
    { id: 2, img: "/images/brand-img2.webp" },
    { id: 3, img: "/images/brand-img3.webp" },
    { id: 4, img: "/images/brand-img4.webp" },
    { id: 5, img: "/images/brand-img5.webp" },
    { id: 6, img: "/images/brand-img6.webp" },
    { id: 7, img: "/images/brand-img7.webp" },
    { id: 8, img: "/images/brand-img8.webp" },
    { id: 9, img: "/images/brand-img9.webp" },
    { id: 10, img: "/images/brand-img10.webp" },
    { id: 11, img: "/images/brand-img11.webp" },
    { id: 12, img: "/images/brand-img12.webp" },
    { id: 13, img: "/images/brand-img13.webp" },
    { id: 14, img: "/images/brand-img14.webp" },
    { id: 15, img: "/images/brand-img15.webp" },
    { id: 16, img: "/images/brand-img16.webp" },
    { id: 17, img: "/images/brand-img17.webp" },
    { id: 18, img: "/images/brand-img18.webp" },
    { id: 19, img: "/images/brand-img19.webp" },
    { id: 20, img: "/images/brand-img20.webp" },
    { id: 21, img: "/images/brand-img21.webp" },
    { id: 22, img: "/images/brand-img22.webp" },
    { id: 23, img: "/images/brand-img23.webp" },
    { id: 24, img: "/images/brand-img24.webp" },
];

export function Brands() {
    return (
        <section className="brands">
            <div className="container">
                <div className="brands__wrap">
                    <h2 className="brands__title">Популярные бренды</h2>
                    <Swiper
                        // slidesPerView={5}
                        spaceBetween={45}
                        navigation
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 5
                            },
                            1040: {
                                slidesPerView: 7
                            }
                        }}
                        className="brands__swiper"
                    >
                        {brands.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="brands__card">
                                    <img src={item.img} alt={`Бренд ${item.id}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}