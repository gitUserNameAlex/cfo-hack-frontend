import React, { FC } from 'react';
import styles from './StatsRates.module.scss';
import { observer } from 'mobx-react-lite';
import RateStore from '@/store/RateStore/RateStore';

const StatsRates: FC = observer(() => {
  const rate = RateStore.currentRate;

  if (!rate) {
    return <div>Рейтинг не найден</div>;
  }

  return (
    <div className={styles.rates}>
      <div className={styles.rates__elem}>
        <div style={{ background: '#FFF5D9' }} className={styles.rates__elem__num}>
          {rate.n_spam}
        </div>
        <div className={styles.rates__elem__text}>
          <p className={styles.rates__elem__text__title}>Спам</p>
          <p className={styles.rates__elem__text__desc}>Зафиксировано большое кол-во спам-сообщений</p>
        </div>
      </div>
      <div className={styles.rates__elem}>
        <div style={{ background: '#E7EDFF' }} className={styles.rates__elem__num}>
          {rate.hard}
        </div>
        <div className={styles.rates__elem__text}>
          <p className={styles.rates__elem__text__title}>Сложность</p>
          <p className={styles.rates__elem__text__desc}>Студентам урок показался сложным</p>
        </div>
      </div>
      <div className={styles.rates__elem}>
        <div style={{ background: '#E0FFE5' }} className={styles.rates__elem__num}>
          {rate.pos}
        </div>
        <div className={styles.rates__elem__text}>
          <p className={styles.rates__elem__text__title}>Понравилось</p>
          <p className={styles.rates__elem__text__desc}>Студентам урок показался полезным</p>
        </div>
      </div>
      <div className={styles.rates__elem}>
        <div style={{ background: '#FFE0EB' }} className={styles.rates__elem__num}>
          {rate.neg}
        </div>
        <div className={styles.rates__elem__text}>
          <p className={styles.rates__elem__text__title}>Отрицательный опыт</p>
          <p className={styles.rates__elem__text__desc}>Студенты считают что можно улучшить урок</p>
        </div>
      </div>
    </div>
  );
});

export default StatsRates;
