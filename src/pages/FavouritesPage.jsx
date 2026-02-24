import React from 'react'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'
import { favorite_data } from "../utils/data.jsx"
import Trash from '../assets/icons/Trash.jsx'
import { Link } from 'react-router'

function FavouritesPage() {
  return (
    <section className="favorite">
        <div className="container">

            <div className="favorite__header">
                <Link to={'/'}  ><ArrowLeftIcon /></Link>
                <p className="favorite__header-home"> Bosh sahifa </p>
                <p className="favorite__header-favorite"> Sevimlilar </p>
            </div>

            <div className="favorite__center">
                <h2 className="favorite__center-title"> Sevimlilar </h2>
                <h2 className="favorite__center-button">X Barchasini o'chirish</h2>
            </div>

            <div className="favorite__line"></div>

            <div className="favorite__cards">


              {
                favorite_data.map(item => (
                    <div className="cardpage__card" key={item.id} >
                    <div className="cardpage__card-img" ><p className="cardpage__img-title">50-0-2</p></div>
                        
                    <div className="cardpage__card-info">
                      <h3 className="cardpage__card-title">{item.name}</h3>
                      <div className="cardpage__count">
                        <button className="cardpage__count-pilus">+</button>
                        <p className="cardpage__count-number">{item.count}</p>
                        <button className="cardpage__count-minus">--</button>
                      </div>
                      <div className="cardpage__card-price-div">
                        <p className="cardpage__card-price-2">{new Intl.NumberFormat("ru-RU").format(item.price2)} <sub>so'm</sub></p>
                        <button className="cardpage__trash-button"><Trash /></button>
                      </div>
                    </div>
                  </div>
                ))
              }
                  




            </div>

        </div>
      </section>
  )
}

export default FavouritesPage