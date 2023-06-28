import styles from "../sass/style.module.scss"

import logo from "../img/logoAvtoYroki_light.png";
import headerImage from "../img/avtoschoolCar.png";

import { useState } from "react";

const BODY_SELECTOR = '.body';

export default function Header() {
  const containerClasses = styles.container + ' ' + styles.header__container;
  const containerInfoClasses = styles.container + ' ' + styles.header__info;

  const [toggle, setToggle] = useState('false');

  const body = document.querySelector(BODY_SELECTOR);

  function toggleOverflow() {
    if (!toggle) {
      body.classList.add(styles.body__overflow__none);
    } else {
      body.classList.remove(styles.body__overflow__none);
    }
  }

  toggleOverflow();

  return (
    <header className={styles.header}>
      <div className={styles.header__background}>
        <div className={containerClasses}>
          <a className={styles.header__logo} href="./index.html">
            <img src={logo} alt="logo" width="120" height="70"></img>
          </a>
          <div>
            <menu className={styles.header__menu}>
              <button type="button" onClick={() => setToggle(!toggle)} className={toggle ? styles.header__hamburger : styles.header__hamburger_active}>
                <span className={styles.header__hamburger__line}></span>
                <span className={styles.header__hamburger__line}></span>
                <span className={styles.header__hamburger__line}></span>
              </button>
              <ul className={toggle ? styles.header__menu__links : styles.header__menu__links_active}>
                <li><a href="./index.html">Головна</a></li>
                <li><a href="./prices.html">Прайс</a></li>
                <li><a href="./questions.html">Питання</a></li>
                <li><a href="./contacts.html">Контакти</a></li>
              </ul>
            </menu>
          </div>
        </div>
        <div className={containerInfoClasses}>
          <div className={styles.header__info__box}>
            <h2 className={styles.header__info__text}>Уроки вождіння в Києві</h2>
            <h1 className={styles.header__info__title}>Швидко та якісно навчимо Вас керуванню!</h1>
            <p className={styles.header__info__question}>Ще вагаєшься? Скоріше натискай кнопку знизу, починай кермувати вже сьогодні!</p>
            <a className={styles.header__info__btn} href="tel:+380939216404">Зателефонувати</a>
          </div>
          <div className={styles.header__info__img}>
            <img src={headerImage} width="500px" alt="автошкола осокорки Київ"></img>
          </div>
        </div>
      </div>
    </header>
  )
}