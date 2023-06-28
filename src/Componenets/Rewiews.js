import styles from '../sass/style.module.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import PopUpRewiew from './PopUpRewiew';
import { useState } from 'react';

export default function Rewiews() {
  const [toggle, setToggle] = useState('false');

  const rewiewClasses = styles.rewiews + ' ' + styles.container;
  
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  const userLogo = (
    <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="person">
      <g data-name="Layer 2">
        <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person" fill="#4252CF"></path>
      </g>
    </svg>
  );

  const userRewiew = [
    {
      id: 1,
      img: userLogo,
      name: 'Микита',
      rewiew: 'Рекомендую! Чудовий інструктор, доступно подає всю інформацію, можна і посміятися і отримати за неуважність. Задоволений на всі сто відсотків.',
    },
    {
      id: 2,
      img: userLogo,
      name: 'Олександр',
      rewiew: 'Рекомендую! Чудовий інструктор, доступно подає всю інформацію, можна і посміятися і отримати за неуважність. Задоволений на всі сто відсотків.',
    },
    {
      id: 3,
      img: userLogo,
      name: 'Олена',
      rewiew: 'Рекомендую! Чудовий інструктор, доступно подає всю інформацію, можна і посміятися і отримати за неуважність. Задоволений на всі сто відсотків.',
    },
  ];

  return (
    <div>
      <section className={rewiewClasses}>
        <svg className={styles.rewiews__bgi} width="520" height="474" viewBox="0 0 520 474" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M466.25 0.96875H53.75C24.5312 0.96875 0.46875 25.0312 0.46875 54.25V336.125C0.46875 365.344 24.5312 389.406 53.75 389.406H179.219L238.516 461.594C243.672 470.187 251.406 473.625 260 473.625C268.594 473.625 276.328 470.187 281.484 463.312L340.781 391.125H466.25C495.469 391.125 519.531 367.063 519.531 337.844V55.1094C519.531 25.0313 495.469 0.96875 466.25 0.96875ZM481.719 336.984C481.719 345.578 474.844 352.453 466.25 352.453H339.922C330.469 352.453 321.016 355.891 314.141 362.766C313.281 363.625 313.281 363.625 312.422 364.484L260 428.937L207.578 364.484C206.719 363.625 206.719 363.625 205.859 362.766C198.984 355.891 190.391 352.453 180.078 352.453H53.75C45.1562 352.453 38.2812 345.578 38.2812 336.984V55.1094C38.2812 46.5156 45.1562 39.6406 53.75 39.6406H466.25C474.844 39.6406 481.719 46.5156 481.719 55.1094V336.984Z" fill="#1F37FF" fillOpacity="0.27"/>
          <path d="M132.813 127.297H369.141C379.453 127.297 388.047 118.703 388.047 108.391C388.047 98.0781 379.453 89.4844 369.141 89.4844H132.813C122.5 89.4844 113.906 98.0781 113.906 108.391C113.906 118.703 122.5 127.297 132.813 127.297Z" fill="#1F37FF" fillOpacity="0.27"/>
          <path d="M132.813 215.812H303.828C314.141 215.812 322.734 207.219 322.734 196.906C322.734 186.594 314.141 178 303.828 178H132.813C122.5 178 113.906 186.594 113.906 196.906C113.906 207.219 122.5 215.812 132.813 215.812Z" fill="#1F37FF" fillOpacity="0.27"/>
          <path d="M391.484 264.797H132.813C122.5 264.797 113.906 273.391 113.906 283.703C113.906 294.016 122.5 302.609 132.813 302.609H391.484C401.797 302.609 410.391 294.016 410.391 283.703C410.391 273.391 401.797 264.797 391.484 264.797Z" fill="#1F37FF" fillOpacity="0.27"/>
        </svg>
        <h3 className={styles.title}>Відгуки</h3>
        <Slider {...settings} className={styles.slider} id="sliderContainer">
          {userRewiew.map((item) => {
            return (
              <div key={item.id} className={styles.rewiews__box}>
                <div className={styles.rewiews__item}>
                  <div className={styles.rewiews__item__logo}>
                    {item.img}
                  </div>
                  <p className={styles.rewiews__item__name}>{item.name}</p>
                  <p className={styles.rewiews__item__rewiew}>{item.rewiew}</p>
                </div>
              </div>
            )
          })}
        </Slider>
        <button className={styles.rewiews__addButton} onClick={() => setToggle(!toggle)}>Залишити відгук</button>
        <PopUpRewiew toggle={toggle} />
      </section>
    </div>
  )
}