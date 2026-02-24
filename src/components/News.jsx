import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
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
]

export function News() {
    return (
        <section className="news">
            <div className="container">
                <div className="news__wrap">
                    <h2 className="news__title">Новинки</h2>
                    <Swiper
                        // slidesPerView={4}
                        spaceBetween={15}
                        navigation
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 3.4
                            },
                            1040: {
                                slidesPerView: 4
                            }
                        }}
                        className="news__card-swiper"
                    >
                        {cards.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="news__card">
                                    <div className="news__card-img"></div>
                                    <p className="news__date">09 декабрь 2025</p>
                                    <div className="news__card-text">Lorem.</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}