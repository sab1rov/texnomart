import React from 'react'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'
import CopyIcon from '../assets/icons/CopyIcon'

function ProductItem() {
  return (
    <div className="prodact">
      <div className="container">
        <ul className="prodact__menu">
          <button className="prodact__left-button">
            <ArrowLeftIcon />
          </button>
          <li className="prodact__menu-list"><a href="#" className="prodact__menu-link">Bosh sahifa</a></li>
          <li className="prodact__menu-list"><a href="#" className="prodact__menu-link">Maxsulotlar katalogi</a></li>
          <li className="prodact__menu-list"><a href="#" className="prodact__menu-link">Televizorlar va audiotexnikalar</a></li>
          <li className="prodact__menu-list"><a href="#" className="prodact__menu-link">Yandex stansiyasi</a></li>
        </ul>
        <div className="product">
          <div className="product__detail-left">
            <h1 className="product__detail-name">Soatsiz Alisali Yandex Mini Stansiyasi aqlli karnayi, Qora, 10Vt</h1>
          </div>
          <div className="product__detail-right">
            <div className="product__detail-list">
              Kod: 00026276
              <button className="product__detail-copy">
                <CopyIcon />
              </button>
            </div>
            <div className="product__detail-info">
              <img src="public/images/eror.png" alt="eror" className="product__deatail-img" />
              <h2 className="product__detail-imgText">Operatordan mavjudligini aniqlash</h2>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="product__info-one">
            <button className="product__info-button">
              <img src="public/images/heart.png" alt="heart" className="product__info-img" />
              <span>Sevimlilarga</span>
            </button>
            <button className="product__info-button">
              <img src="public/images/scales.png" alt="scales" className="product__info-img" />
              <span>Taqqoslashga</span>
            </button>
          </div>
          <div className="product__info-twoo">
            <img src="public/images/star.png" alt="star" className="product__info-twoImg" />
            <span>Sharh yo‘q</span>
          </div>
        </div>

        <div className="product__main">
          <div className="product__midlle-left">
            <div className="product__midlle-xit">
              <div className="product__midlle-text">Xit savdo</div>
              <div className="product__midlle-nomber">50-0-2</div>
            </div>
            <div className="product__slider-wrap">
              <div className="product__slider">
                <div className="product__slider-list">
                  <img src="public/images/alisa.jpg" alt="alisa" className="product__slider-img" />
                </div>
                <div className="product__slider-list">
                  <img src="public/images/alisa-2.jpg" alt="alisa" className="product__slider-img" />
                </div>
                <div className="product__slider-list">
                  <img src="public/images/alisa-3.jpg" alt="alisa" className="product__slider-img" />
                </div>
                <div className="product__slider-list">
                  <img src="public/images/alisa-4.jpg" alt="alisa" className="product__slider-img" />
                </div>
              </div>
              <div className="product__alisa">
                <img src="public/images/Alisaa.jpg" alt="alisa" className="product__alisa-img" />
              </div>
            </div>
          </div>
          <div className="product__midlle-centr">
            <h3 className="product__centr-text">Rang</h3>
            <div className="product__centr-alisa">
              <div className="product__centr-item">
                <img src="public/images/alisa-2.jpg" alt="centr-alisa" className="product__centr-img" />
              </div>
              <div className="product__centr-item">
                <img src="public/images/alisa-3.jpg" alt="centr-alisa" className="product__centr-img" />
              </div>
              <div className="product__centr-item">
                <img src="public/images/alisa-4.jpg" alt="centr-alisa" className="product__centr-img" />
              </div>
            </div>
            <h4>Mahsulot haqida qisqacha</h4>
            <ul className="product__centr-info">
              <li className="product__info-item">
                <h2 className='product__info-text'>
                  <span>Brend</span>
                </h2>
                <span>Yandex</span>
              </li>
              <li className="product__info-item">
                <h2 className='product__info-text'>
                  <span>Umumiy quvvati</span>
                </h2>
                <span>
                  10 Vt</span>
              </li>
              <li className="product__info-item">
                <h2 className='product__info-text'>
                  <span>Ovozli yordamchi</span>
                </h2>
                <span>Alisa
                </span>
              </li>
              <li className="product__info-item">
                <h2 className='product__info-text'>
                  <span>Ovozli yordamchi tili</span>
                </h2>
                <span className='span'>Ruscha</span>
              </li>
              <li className="product__info-item">
                <h2 className='product__info-text'>
                  <span>Dinamik diametri</span>
                </h2>
                <span>
                  42 mm</span>
              </li>
            </ul>
            <button className="product__centr-button">Barcha xususiyatlar</button>
          </div>
          <div className="product__midlle-right">
            <div className="product__btns">
              <div className="product__narx">
                1 190 000
                <span>so`m</span>
              </div>
              <div className="product__tolov">
                <div className='product__div'>
                  Muddatli to'lov
                  <span className='product__span'>99 167so'm</span>
                  18 /oy
                </div>
                <button>
                  <img src="public/images/help.png" alt="help" />
                </button>
              </div>
              <div className="product__text">
                Buyurtmani rasmiylashtirishda 12 oydan 24 oygacha
                <br />
                muddatli to‘lovni tanlashingiz mumkin
              </div>
              <div className="product__button-list">
                <button className="product__button-item">Savatchaga</button>
                <button className="product__button-item-right">Birgina klik orqali xarid</button>
              </div>
              <div className="product__right-button">
                <p className='product__hi'>Muddatli to'lov rasmiylashtirayotganingizda bizdan va hamkorlardan eng ma'qul takliflarga ega bo'ling.</p>
              </div>
              <div className="product__swiper">
                <ul className="product__swiper-list">
                  <li className="product__swiper-img"></li>
                  <li className="product__swiper-item">Axiom nasiya</li>
                </ul>
                <ul className="product__swiper-list">
                  <li className="product__swiper-img"></li>
                  <li className="product__swiper-item">Tehnoboon</li>
                </ul>
                <ul className="product__swiper-list">
                  <li className="product__swiper-img"></li>
                  <li className="product__swiper-item">TBC Nasiya</li>
                </ul>
                <ul className="product__swiper-list">
                  <li className="product__swiper-img"></li>
                  <li className="product__swiper-item">Alif</li>
                </ul>
                <ul className="product__swiper-list">
                  <li className="product__swiper-img"></li>
                  <li className="product__swiper-item">Anorbank</li>
                </ul>
                <ul className="product__swiper-list">
                  <li className="product__swiper-img"></li>
                  <li className="product__swiper-item">Opencard</li>
                </ul>
              </div>
            </div>
            <div className="product__button-centr">
              <div className="product__button-left">
                <div className="product__button-img">
                  <img src="public/images/store.png" alt="store" />
                  <div className="product__button-info">
                    <p className="product__button-text">Do'kondan olib ketish bepul</p>
                    <button className="product__button-button">2 ta do‘konda mavjud</button>
                  </div>
                </div>
              </div>
              <div className="product__button-right">
                <img src="public/images/next.png" alt="right" className="product__button-next" />
              </div>
            </div>
            <div className="product__kafolat">
              <div className="product__kafolat-list">
                <img src="public/images/kafolat.png" alt="kafolat" className="product__kafolat-img" />
                <p className="product__kafolat-text">Kafolat 1 yil</p>
              </div>
            </div>
          </div>
        </div>
        <section class="specs">
          <h2>Mahsulot xususiyatlari</h2>

          <h4>Asosiy xususiyatlar</h4>

          <div class="specs-grid">

            <div class="spec-item">
              <span class="label">Brend</span>
              <span class="value">Yandex</span>
            </div>

            <div class="spec-item">
              <span class="label">Turi</span>
              <span class="value">Aqlli dinamik</span>
            </div>

            <div class="spec-item">
              <span class="label">O'lchamlari (KxBxCh) mm</span>
              <span class="value">97x54x97</span>
            </div>

            <div class="spec-item">
              <span class="label">Og'irligi (kg)</span>
              <span class="value">0.26 kg</span>
            </div>

            <div class="spec-item">
              <span class="label">Ovozli yordamchi</span>
              <span class="value">Alisa</span>
            </div>

            <div class="spec-item">
              <span class="label">Korpus materiali</span>
              <span class="value">Plastik, mato</span>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default ProductItem