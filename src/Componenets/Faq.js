import styles from '../sass/style.module.scss';
import { Collapse } from 'antd';

export default function Faq() {
  const faqClasses = styles.container + ' ' + styles.faq;
  
  const items = [
    {
      key: '1',
      label: <h2 className={styles.faq__question}>Скільки часу йде заняття</h2>,
      children: <p>В залежності від змоги та побажань учня, графік підбирається індивідуально під кожного. В середньому це півтори години.</p>,
    },
    {
      key: '2',
      label: <h2 className={styles.faq__question}>Як проходять заняття</h2>,
      children: <p>Ми з вами зв'язуємось, та попередньо домовляємось на час і місце зустрічі. Зустрічаємось на узгодженному місці і їдемо відпрацьовувати маршрути чи паркування в місті чи за містом.</p>,
    },
    {
      key: '3',
      label: <h2 className={styles.faq__question}>Бувають під час навчання якісь критичні ситуації</h2>,
      children: <p>Так звісно, але Ви можете не переживати, ми маємо великий досвід навчання, дублюючі педалі, автомобіль з усіма можливими системами безпеки. Хвилюватися абсолютно немає сенсу.</p>,
    },
    {
      key: '4',
      label: <h2 className={styles.faq__question}>Яким категоріям навчаєте</h2>,
      children: <p>Тільки категорія "B" легкові автомобілі.</p>,
    },
    {
      key: '5',
      label: <h2 className={styles.faq__question}>Що приносити на перше заняття</h2>,
      children: <p>Якщо маєте права, то права, а як ні - то медичну довідку для кермування та документ що підтверджує особу.</p>,
    },
    {
      key: '6',
      label: <h2 className={styles.faq__question}>Треба платити тільки за заняття чи є ще якісь витрати</h2>,
      children: <p>Всі витрати вже включені у вартість заняття.</p>,
    },
    {
      key: '7',
      label: <h2 className={styles.faq__question}>Чи можна займатися у вихідні</h2>,
      children: <p>Так звісно, ми працюємо 7 днів на тиждень.</p>,
    },
    {
      key: '8',
      label: <h2 className={styles.faq__question}>На яких машинах проходять заняття</h2>,
      children: <p>VW Tiguan з автоматичною коробкою передач. Автомобіль обладнаний дублюючими педалями.</p>,
    },
    {
      key: '9',
      label: <h2 className={styles.faq__question}>З якого віку можна навчатися кермуванню</h2>,
      children: <p>Однозначно з 18 років</p>,
    },
    {
      key: '10',
      label: <h2 className={styles.faq__question}>Можливе навчання на моєму автомобілі</h2>,
      children: <p>Так можливе.</p>,
    },
  ];

  return (
    <section className={faqClasses}>
      <h2 className={styles.title}>Питання і відповіді</h2>
      <Collapse accordion items={items}/>
    </section>
  )
}