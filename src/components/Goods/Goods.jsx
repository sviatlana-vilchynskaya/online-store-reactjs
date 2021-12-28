import React from 'react'
import '../Goods/Goods.scss'

const Goods = () => {
  return (
    <section className="goods">
      <div className="container">
        <h2 className="goods__title">Мужчинам</h2>
        <ul className="goods__list">
          <li className="goods__item">
            <article className="good">
              <a className="good__link-img" href="card-good.html#id56454">
                <img
                  className="good__img"
                  src="goods-image/AD002EMLUEA8_14164246_1_v1.jpg"
                  alt=""
                />
              </a>
              <div className="good__description">
                <p className="good__price">2890 &#8381;</p>
                <h3 className="good__title">
                  Eazyway <span className="good__title__grey">/ Тайтсы</span>
                </h3>
                <p className="good__sizes">
                  Размеры (RUS):{' '}
                  <span className="good__sizes-list">40 42 44 46</span>
                </p>
                <a className="good__link" href="card-good.html#id56454">
                  Подробнее
                </a>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Goods
