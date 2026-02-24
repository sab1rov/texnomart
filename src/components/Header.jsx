import { useState } from "react";
import {
  KatalogIcon, LogoIcon, SearchIcon, ProfilIcon, FavoriteIcon, CartIcon,
  KatalogIconOne, KatalogArrowIcon, KatalogIconTwo, KatalogIconThree, KatalogIconFour,
  KatalogIconFive, KatalogIconSix, KatalogIconSeven, KatalogIconEight, KatalogIconNine, KatalogIconTen,
  KatalogIconEleven, KatalogIconTwelve, KatalogIconThirteen,
  MenuIcon
} from "../assets/Icons";
import { Link } from "react-router";


export function Header() {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(prev => !prev)
  }
  
  const [isOprb, setIsOprb] = useState(false)

  const OpenMenu = () => setIsOprb(true)
  const CloseMenu = () => setIsOprb(false)
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <a href="/" className="header__logo">
            <LogoIcon />
          </a>
          <div className="header__controls">
            <button className="header__katalog-button" onClick={toggle}>
              <KatalogIcon />
              Каталог
            </button>
            <div className="header__search">
              <input type="text" placeholder="Поиск" className="header__search-input" />
              <button className="header__button-search">
                <SearchIcon />
              </button>
            </div>
            <button className="header__menu-button" onClick={OpenMenu}>
              <MenuIcon />
            </button>
            <div className="header__buttons">
              <button className="header__button">
                <ProfilIcon />
                Вход
              </button>
              <Link to={'/favourite'} className="header__button">
                <FavoriteIcon />
                Избранное
              </Link>
              <Link to={'/cat'} className="header__button">
                <CartIcon />
                Корзин
              </Link>
            </div>
          </div>

          <div className={`header__katalog ${isOpen ? "active" : ""}`}>
            <div className="header__katalog-wrap">
              <div className="header__katalog-left">
                <button className="header__left-item">
                  <KatalogIconOne />
                  <span>Смартфоны и гаджеты</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconTwo />
                  <span>Компьютерная техника</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconThree />
                  <span>Телевизоры и аудиотехника</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconFour />
                  <span>Климатическая техника</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconFive />
                  <span>Техника для дома</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconSix />
                  <span>Офисная техника</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconSeven />
                  <span>Техника для кухни</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconEight />
                  <span>Посуда для дома</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconNine />
                  <span>Товары для авто</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconTen />
                  <span>Красота и здоровье</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconEleven />
                  <span>Спорт и увлечение</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconTwelve />
                  <span>Товары для дома и сада</span>
                  <KatalogArrowIcon />
                </button>
                <button className="header__left-item">
                  <KatalogIconThirteen />
                  <span>Товары по акциям и скидки</span>
                  <KatalogArrowIcon />
                </button>
              </div>
              <div className="header__katalog-right"></div>
            </div>
          </div>


          <div className={`header__overlay ${isOprb ? "active" : ""}`}></div>
          <div className={`header__menu ${isOprb ? "active" : ""}`}>
            <div className="header__katalog-left">
              <button className="header__left-item">
                <KatalogIconOne />
                <span>Смартфоны и гаджеты</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconTwo />
                <span>Компьютерная техника</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconThree />
                <span>Телевизоры и аудиотехника</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconFour />
                <span>Климатическая техника</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconFive />
                <span>Техника для дома</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconSix />
                <span>Офисная техника</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconSeven />
                <span>Техника для кухни</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconEight />
                <span>Посуда для дома</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconNine />
                <span>Товары для авто</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconTen />
                <span>Красота и здоровье</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconEleven />
                <span>Спорт и увлечение</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconTwelve />
                <span>Товары для дома и сада</span>
                <KatalogArrowIcon />
              </button>
              <button className="header__left-item">
                <KatalogIconThirteen />
                <span>Товары по акциям и скидки</span>
                <KatalogArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}