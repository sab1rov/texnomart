import React from 'react'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'

function FavouritesPage() {
  return (
    <section className="favorite">
        <div className="container">

            <div className="favorite__header">
                <ArrowLeftIcon />
                <p className="favorite__header-home"> Bosh sahifa </p>
                <p className="favorite__header-favorite"> Sevimlilar </p>
            </div>

            <div className="favorite__center">
                <h2 className="favorite__center-title"> Sevimlilar </h2>
                <h2 className="favorite__center-button">X Barchasini o'chirish</h2>
            </div>

            <div className="favorite__line"></div>

            <div className="favorite__cards">

                  <div className="favorite__card">
                    <div className="favorite__card-img" ><p className="favorite__img-title">50-0-2</p></div>
                        
                    <div className="favorite__card-info">
                      <h3 className="favorite__card-title">Avalon ART 12HQ Konditioneri</h3>
                      <p className="favorite__sharx">⭐️ <strong>5</strong> - 1 ta sharh</p>
                      <p className="favorite__card-price"> 666 584 so'mdan / 18 oy</p>
                      <div className="favorite__card-price-div">
                        <p className="favorite__card-price-2">7 999 000 <sub>so'm</sub></p>
                        <img src="/images/savat.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="favorite__card">
                    <div className="favorite__card-img" ><p className="favorite__img-title">50-0-2</p></div>
                        
                    <div className="favorite__card-info">
                      <h3 className="favorite__card-title">Avalon ART 12HQ Konditioneri</h3>
                      <p className="favorite__card-sharx">⭐️ <strong>5</strong> - 1 ta sharh</p>
                      <p className="favorite__card-price"> 666 584 so'mdan / 18 oy</p>
                      <div className="favorite__card-price-div">
                        <p className="favorite__card-price-2">7 999 000 <sub>so'm</sub></p>
                        <img src="/images/savat.svg" alt="" />
                      </div>
                    </div>
                  </div>


                  <div className="favorite__card">
                    <div className="favorite__card-img" ><p className="favorite__img-title">50-0-2</p></div>
                        
                    <div className="favorite__card-info">
                      <h3 className="favorite__card-title">Avalon ART 12HQ Konditioneri</h3>
                      <p className="favorite__card-sharx">⭐️ <strong>5</strong> - 1 ta sharh</p>
                      <p className="favorite__card-price"> 666 584 so'mdan / 18 oy</p>
                      <div className="favorite__card-price-div">
                        <p className="favorite__card-price-2">7 999 000 <sub>so'm</sub></p>
                        <img src="/images/savat.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="favorite__card">
                    <div className="favorite__card-img" ><p className="favorite__img-title">50-0-2</p></div>
                        
                    <div className="favorite__card-info">
                      <h3 className="favorite__card-title">Avalon ART 12HQ Konditioneri</h3>
                      <p className="favorite__card-sharx">⭐️ <strong>5</strong> - 1 ta sharh</p>
                      <p className="favorite__card-price"> 666 584 so'mdan / 18 oy</p>
                      <div className="favorite__card-price-div">
                        <p className="favorite__card-price-2">7 999 000 <sub>so'm</sub></p>
                        <img src="/images/savat.svg" alt="" />
                      </div>
                    </div>
                  </div>


                  <div className="favorite__card">
                    <div className="favorite__card-img" ><p className="favorite__img-title">50-0-2</p></div>
                        
                    <div className="favorite__card-info">
                      <h3 className="favorite__card-title">Avalon ART 12HQ Konditioneri</h3>
                      <p className="favorite__card-sharx">⭐️ <strong>5</strong> - 1 ta sharh</p>
                      <p className="favorite__card-price"> 666 584 so'mdan / 18 oy</p>
                      <div className="favorite__card-price-div">
                        <p className="favorite__card-price-2">7 999 000 <sub>so'm</sub></p>
                        <img src="/images/savat.svg" alt="" />
                      </div>
                    </div>
                  </div>




            </div>

        </div>
      </section>
  )
}

export default FavouritesPage