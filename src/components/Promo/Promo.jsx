import React from 'react'
import './Promo.scss'
import premium from '../../assets/image/premium.jpg'
import sport from '../../assets/image/sport.jpg'
import beach from '../../assets/image/beach.jpg'
import umbrella from '../../assets/image/umbrella.jpg'
import sneakers from '../../assets/image/sneakers.jpg'
import child from '../../assets/image/child.jpg'

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <ul className="promo__grid">
          <li className="promo__grid-item promo__grid-item__big">
            <img className="promo__grid-image" src={beach} alt="" />
          </li>
          <li className="promo__grid-item promo__grid-item__small">
            <img className="promo__grid-image" src={sport} alt="" />
          </li>
          <li className="promo__grid-item promo__grid-item__small">
            <img className="promo__grid-image" src={umbrella} alt="" />
          </li>
        </ul>
        <ul className="promo__grid promo__grid-reverse">
          <li className="promo__grid-reverse-item promo__grid-reverse-item__big">
            <img className="promo__grid-image" src={premium} alt="" />
          </li>
          <li className="promo__grid-reverse-item promo__grid-reverse-item__small">
            <img className="promo__grid-image" src={sneakers} alt="" />
          </li>
          <li className="promo__grid-reverse-item promo__grid-reverse-item__small">
            <img className="promo__grid-image" src={child} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Promo
