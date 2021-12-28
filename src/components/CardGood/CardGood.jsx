import React from 'react'
import goodImage from '../../assets/image/goods-image/MP002XG01REQ_14210247_1_v1.jpg'

const CardGood = () => {
  return (
    <section className="card-good">
      <div className="container card-good__wrapper">
        <div className="card-good__image-wrapper">
          <img className="card-good__image" src={goodImage} alt="" />
        </div>
        <div className="card-good__description">
          <h2 className="card-good__title-wrapper">
            <p className="card-good__brand">Befree</p>
            <p className="card-good__title">Платье Exclusive online</p>
          </h2>
          <p className="card-good__price">1 799 ₽</p>

          <div className="card-good__color-wrapper card-good__select__wrapper">
            <button className="card-good__color card-good__select">
              Черный
            </button>
            <ul className="card-good__color-list card-good__select-list">
              <li className="card-good__select-item">Черный</li>
            </ul>
          </div>

          <div className="card-good__sizes-wrapper card-good__select__wrapper">
            <button className="card-good__sizes card-good__select">
              Выберите размер
            </button>
            <ul className="card-good__sizes-list card-good__select-list">
              <li className="card-good__select-item">36</li>
            </ul>
          </div>

          <button className="card-good__buy">Добавить в корзину</button>
        </div>
      </div>
    </section>
  )
}

export default CardGood
