import React, { useState } from 'react'

import { favorite_data } from "../utils/data.jsx"
import { Link } from 'react-router';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon.jsx';
import Trash from '../assets/icons/Trash.jsx';



function CartPage() {
  const total = favorite_data.reduce((sum, item) => sum + Number(item.price2 * item.count || 0), 0);
  return (
    <section className="cardpage">
        <div className="container">

            <div className="cardpage__header">
                <Link to={'/'}  ><ArrowLeftIcon /></Link>
                <p className="cardpage__header-home"> Bosh sahifa </p>
                <p className="cardpage__header-favorite"> Savat </p>
            </div>

            <div className="cardpage__center">
                <h2 className="cardpage__center-title"> Savatcha </h2>
                <h2 className="cardpage__center-button">X Barchasini o'chirish</h2>
            </div>

            <div className="cardpage__line"></div>

            <div className="cardpage__main">
              <div className="cardpage__cards">


              {
                favorite_data.map(item => (
                    <div className="cardpage__card" key={item.id}>
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

            <div className="cardpage__main-calc">
              <div className="calc">
                <p className="calc__title">{favorite_data.length} dona mahsulot narxi {new Intl.NumberFormat("ru-RU").format(total)} so'm</p>
                
              </div>
              <button className="calc__rasmiylashtirish">Rasmiylashtirish</button>
            </div>
            </div>

        </div>
      </section>
  )
}

export default CartPage