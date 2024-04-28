import React, { FC } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import styles from './StatsPage.module.scss';
import StatsGraph from './components/StatsGraph';
import StatsRates from './components/StatsRates';

const StatsPage: FC = () => {
  return (
    <div className={styles.stats}>
      <Sidebar />
      <div className={styles.stats__content}>
        <div className={styles.stats__content__graph}>
          <p style={{ fontSize: 22, fontWeight: 500 }}>Количество сообщений за время</p>
          <StatsGraph />
        </div>
        <div className={styles.stats__content__rate}>
          <StatsRates />
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
