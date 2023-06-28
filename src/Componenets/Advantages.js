import styles from '../sass/style.module.scss';

export default function Advantages() {
  const advantagesClasses = styles.advantages + ' ' + styles.container;

  return (
    <section className={advantagesClasses}>
      <h3 className={styles.title}>Наші переваги</h3>
      <div className={styles.advantages__box}>
        <article className={styles.advantages__item}>
          <p className={styles.advantages__item__quantity}>15+ років</p>
          <p className={styles.advantages__item__title}>Стаж викладання</p>
        </article>
        <article className={styles.advantages__item}>
          <p className={styles.advantages__item__quantity}>100000+</p>
          <p className={styles.advantages__item__title}>Часів навчання</p>
        </article>
        <article className={styles.advantages__item}>
          <p className={styles.advantages__item__quantity}>3500+</p>
          <p className={styles.advantages__item__title}>Щасливих клієнтів</p>
        </article>
      </div>
    </section>
  )
}