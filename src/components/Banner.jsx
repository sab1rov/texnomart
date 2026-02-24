import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    { id: 1, img: '/images/swiper-img1.webp' },
    { id: 2, img: '/images/swiper-img2.webp' },
    { id: 3, img: '/images/swiper-img3.webp' },
    { id: 4, img: '/images/swiper-img4.webp' },
    { id: 5, img: '/images/swiper-img5.webp' },
    { id: 6, img: '/images/swiper-img6.webp' },
];

const CategoriesSlides = [
    { id: 1, title: "Акции и скидки", img: '/images/categories-img1.webp' },
    { id: 2, title: "Смартфоны", img: '/images/categories-img2.webp' },
    { id: 3, title: "Кондиционеры", img: '/images/categories-img3.webp' },
    { id: 4, title: "Пылесосы", img: '/images/categories-img4.webp' },
    { id: 5, title: "Холодильники", img: '/images/categories-img5.webp' },
    { id: 6, title: "Ноутбуки", img: '/images/categories-img6.webp' },
    { id: 7, title: "Телевизоры", img: '/images/categories-img7.webp' },
    { id: 8, title: "Кофемашины", img: '/images/categories-img8.webp' },
    { id: 9, title: "Стиральные машины", img: '/images/categories-img9.webp' },
    { id: 10, title: "Фены", img: '/images/categories-img10.webp' },
    { id: 11, title: "Планшеты", img: '/images/categories-img11.webp' },
];

export function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wrap">
                    <Swiper
                        slidesPerView={1.3}
                        spaceBetween={15}
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        className="banner-swiper"
                    >
                        {slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <img src={slide.img} alt={`Слайд ${slide.id}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        // slidesPerView={7}
                        spaceBetween={20}
                        navigation
                        modules={[Navigation, Pagination, Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 4
                            },
                            1040: {
                                slidesPerView: 7
                            }
                        }}  
                        className="small-swiper"
                    >
                        {CategoriesSlides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <div
                                    className="card"
                                    style={{ backgroundImage: `url(${ slide.img })` }}
                                >
                                    <p>{slide.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}