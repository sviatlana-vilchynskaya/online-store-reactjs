import React from 'react'
import './SubHeader.scss'
import logo from '../../assets/image/logo.svg'

const SubHeader = () => {
  return (
    <section className="subheader">
      <div className="container">
        <div className="subheader__wrapper">
          <nav className="subheader__navigation navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a className="navigation__link" href="goods.html#women">
                  Женщинам
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="goods.html#men">
                  Мужчинам
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="goods.html#kids">
                  Детям
                </a>
              </li>
            </ul>
          </nav>
          <a href="index.html" className="subheader__logo">
            <img src={logo} alt="Компания Lomoda" />
          </a>
          <button className="subheader__cart">Корзина</button>
        </div>
      </div>
    </section>
  )
}

export default SubHeader
