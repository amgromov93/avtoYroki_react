import styles from '../sass/style.module.scss';

export default function PopUpRewiew({ toggle }) {
  const popupActiveClasses = styles.popup + ' ' + styles.popup_active;

  function onCloseBtnClick() {
    document.querySelector('.style_popup__xRn68').classList.remove('style_popup_active__pLOaw');
  }

  return (
    <div className={toggle ? styles.popup : popupActiveClasses}>
      <div className={styles.popup__box}>
        <button type='button' onClick={onCloseBtnClick}>
        <svg width="15" height="15" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4805 17.4923L34.5822 2.39726C35.1393 1.84048 35.1393 0.97437 34.5822 0.417587C34.0252 -0.139196 33.1587 -0.139196 32.6017 0.417587L17.5 15.5126L2.39832 0.417587C1.84129 -0.139196 0.974801 -0.139196 0.417772 0.417587C-0.139257 0.97437 -0.139257 1.84048 0.417772 2.39726L15.5195 17.4923L0.417772 32.5873C-0.139257 33.1441 -0.139257 34.0102 0.417772 34.5669C0.66534 34.8144 1.03669 35 1.40805 35C1.7794 35 2.15075 34.8763 2.39832 34.5669L17.5 19.4719L32.6017 34.5669C32.8493 34.8144 33.2206 35 33.592 35C33.9633 35 34.3347 34.8763 34.5822 34.5669C35.1393 34.0102 35.1393 33.1441 34.5822 32.5873L19.4805 17.4923Z" fill="black"/>
        </svg>
        </button>
        <div className={styles.popup__text}>
          <h4 className={styles.popup__title}>Залиште відгук!</h4>
          <p className={styles.popup__thanks}>Це дуже важливо для нас!</p>
        </div>
        <div className={styles.popup__inputs}>
          <input placeholder='Ваше ім`я' type="text" />
          <input placeholder='Ваш відгук' type="text" />
          <button className={styles.popup__doneBtn}>Відправити</button>
        </div>
      </div>
    </div>
  )
}