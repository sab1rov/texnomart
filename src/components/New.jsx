import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Newproducts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
]

export function New() {
    return (
        <section className="new">
            <div className="container">
                <div className="new__wrap">
                    <h2 className="new__title">Новинки</h2>
                    <Swiper
                        // slidesPerView={5}
                        spaceBetween={15}
                        navigation
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 3
                            },
                            1040: {
                                slidesPerView: 5
                            }
                        }}
                        className="new__card-swiper"
                    >
                        {Newproducts.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="favorite__card">
                                    <div className="favorite__card-img">
                                        <p className="favorite__img-title">50-0-2</p>
                                    </div>

                                    <div className="favorite__card-info">
                                        <h3 className="favorite__card-title">Товар {item.id}</h3>
                                        <p className="favorite__sharx">⭐️ <strong>5</strong> - 1 ta sharh</p>
                                        <p className="favorite__card-price">500 000 so'mdan / 18 oy</p>
                                        <div className="favorite__card-price-div">
                                            <p className="favorite__card-price-2">9 000 000 <sub>so'm</sub></p>
                                            <img src="/images/savat.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}