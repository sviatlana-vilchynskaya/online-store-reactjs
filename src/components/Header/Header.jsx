import React from 'react'
import './Header.scss'
import img35 from './../../image/35.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <button className="header__city-button">Укажите город</button>
          <div className="header__right-block">
            <p className="header__delivery">Бесконтактная доставка</p>
            <p className="header__pay">Платите чем хотите</p>
            <div className="header__birthday">
              <span>нам </span>
              <img className="header__birthday-img" src={img35} alt="" />
              <span>лет!</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
