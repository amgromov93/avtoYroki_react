import styles from '../sass/style.module.scss';

import instructor from '../img/instructor.jpg';
import townDrive from '../img/town-drive.jpeg';
import parking from '../img/parking.jpeg';
import pdr from '../img/pdr.jpeg';

export default function Features() {
  const featuresClasses = styles.features + ' ' + styles.container;
  
  return (
    <section className={featuresClasses}>
      <h3 className={styles.title}>Особливості навчання</h3>
      <article className={styles.features__box}>
        <img className={styles.features__img} src={instructor} alt=""></img>
        <h5 className={styles.features__title}>Відпрацювання маршрутів</h5>
        <p className={styles.features__text}>В практичні заняття, можна включити маршрут яким Ви плануєте їздити на роботу, чи відвозити дітей до школи, чи навіть поїздка за місто в сторону дачі.</p>
      </article>
      <article className={styles.features__box}>
        <img className={styles.features__img} src={townDrive} alt=""></img>
        <h5 className={styles.features__title}>Поїздка містом</h5>
        <p className={styles.features__text}>Поїздка містом, мабуть кращий варіант навчання. Відпрацювання трафіку, заторів, звичайного водіння загалом.</p>
      </article>
      <article className={styles.features__box}>
        <img className={styles.features__img} src={parking} alt=""></img>
        <h5 className={styles.features__title}>Паркування</h5>
        <p className={styles.features__text}>Відпрацювання паркування в місті. Спочатку навчаємо з конусами, після на парковці поряд з іншими автомобілями.</p>
      </article>
      <article className={styles.features__box}>
        <img className={styles.features__img} src={pdr} alt=""></img>
        <h5 className={styles.features__title}>Правила ПДР</h5>
        <p className={styles.features__text}>Під час керування, вивчаємо чи згадуємо, якщо забули, правила дорожнього руху, знаки, світлофори та інше.</p>
      </article>
    </section>
  )
}