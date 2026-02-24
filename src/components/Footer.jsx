export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__item-wrap">
            <p className="footer__contact-text">Возникли вопросы? звоните</p>
            <p className="footer__contact-num">+998712099944</p>
            <div className="footer__contact-massenger">
            </div>
          </div>
          <div className="footer__item-wrap">
            <p className="footer__title">Компания</p>
            <a href="#" className="footer__company-item">Юридическим лицам</a>
            <a href="#" className="footer__company-item">О Техномарт</a>
            <a href="#" className="footer__company-item">Новости и блоги</a>
            <a href="#" className="footer__company-item">Поверка IMEI</a>
            <a href="#" className="footer__company-item">Работа в Техномарт</a>
          </div>
          <div className="footer__item-wrap">
            <p className="footer__title">Информация</p>
            <a href="#" className="footer__item">Бесплатная доставка</a>
            <a href="#" className="footer__item">Сервисные центры</a>
            <a href="#" className="footer__item">Личныый кабинет</a>
            <a href="#" className="footer__item">Поверка IMEI</a>
            <a href="#" className="footer__item">Работа в Техномарт</a>
          </div>
          <div className="footer__item-wrap">
            <p className="footer__title">Помощь покупателю</p>
            <a href="#" className="footer__item">Юридическим лицам</a>
            <a href="#" className="footer__item">О Техномарт</a>
            <a href="#" className="footer__item">Новости и блоги</a>
          </div>
          <div className="footer__item-wrap">
            <p className="footer__title">Скачать приложение</p>
            <div className="footer__qrimg">
              <img src="/images/QR-img.webp" alt="QR-code" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
