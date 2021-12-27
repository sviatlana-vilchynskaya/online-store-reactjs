import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__columns">
        <div className="footer__column">
          <h3 className="footer__column-title">Помощь</h3>
          <ul className="footer__column-list">
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Статус заказа по номеру
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Центр поддержки Lamoda
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Как оформить заказ
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Как выбрать размер
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Условия доставки
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Мои заказы
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Возврат
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Публичная оферта
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Публичная оферта Lamoda Стилист
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Программа лояльности
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Часто задаваемые вопросы
              </a>
            </li>
            <li className="footer__column-item">
              <a className="footer__link" href="#">
                Исследования
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__column-title">О нас</h3>
          <ul className="footer__column-list">
            <li className="footer__column-item">
              <ul className="footer__column-icons">
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="footer__social-item footer__social-item_fb"
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="footer__social-item footer__social-item_vk"
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="footer__social-item footer__social-item_yt"
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="footer__social-item footer__social-item_ig"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="footer__column-item">
              <a className="link footer__link" href="#">
                Fashion-блог Lamoda
              </a>
            </li>
            <li className="footer__column-item">
              <a className="link footer__link" href="#">
                Подарочные сертификаты Lamoda
              </a>
            </li>
            <li className="footer__column-item">
              <a className="link footer__link" href="#" target="_blank">
                Вакансии
              </a>
            </li>
          </ul>

          <h3 className="footer__column-title">Партнерам</h3>
          <ul className="footer__column-list">
            <li className="footer__column-item">
              <a className="link footer__link" href="#">
                Подключиться к партнёрской программе "Маркетплейс"
              </a>
            </li>
            <li className="footer__column-item">
              <a className="link footer__link" href="#">
                Стать подрядчиком Lamoda
              </a>
            </li>
            <li className="footer__column-item">
              <a className="link footer__link" href="#">
                Арендодателям
              </a>
            </li>
            <li className="footer__column-item">
              <a className="link footer__link" href="#">
                Подарочные сертификаты для бизнеса
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__column-item">
            <h3 className="footer__column-title">Способы оплаты</h3>
            <ul className="footer__column-icons">
              <li className="footer__column-icon footer__icon-mastercard"></li>
              <li className="footer__column-icon footer__icon-visa"></li>
              <li className="footer__column-icon footer__icon-mir"></li>
            </ul>
          </div>
          <p className="footer__column-item footer__text">
            Вы можете оплатить покупки
            <br />
            наличными при получении, либо
            <br />
            выбрать
            <a className="inline-link" href="#">
              другой способ оплаты
            </a>
            .
          </p>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Для мобильных устройств</h3>
          <ul className="footer__column-icons footer__column-icons__app">
            <li>
              <a
                target="_blank"
                className="footer__block-icon footer__icon-appstore"
                href="#"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__block-icon footer__icon-googleplay"
                href="#"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__block-icon footer__icon-huaweistore"
                href="#"
              ></a>
            </li>
          </ul>
          <p className="footer__column-item footer__text">
            Вы также можете перейти
            <br />
            на{' '}
            <a href="#" className="inline-link js-mobile-version">
              мобильную версию сайта
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
