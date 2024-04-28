import React, { FC } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import ComplaintsTable from './components/ComplaintsTable';
import ComplaintsStore from '@/store/ComplaintsStore';
import styles from './DashboardPage.module.scss';
import { observer } from 'mobx-react-lite';
import SpamTable from './components/SpamTable';
import PieChart from './components/PieChart';

const DashboardPage: FC = observer(() => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__content__spam}>
          <SpamTable />
          <PieChart />
        </div>
        <div className={styles.dashboard__content__complaints}>
          <div className={styles.dashboard__content__complaints__audio}>
            <div className={styles.dashboard__content__complaints__audio__text}>
              <p className={styles.dashboard__content__complaints__audio__text__title}>Жалобы на звук</p>
              <p className={styles.dashboard__content__complaints__audio__text__amount}>
                {ComplaintsStore.complaintsAmount} всего
              </p>
            </div>
            <ComplaintsTable complaintType="audio" />
          </div>

          <div className={styles.dashboard__content__complaints__connection}>
            <div className={styles.dashboard__content__complaints__connection__text}>
              <p className={styles.dashboard__content__complaints__connection__text__title}>Жалобы на качество</p>
              <p className={styles.dashboard__content__complaints__connection__text__amount}>
                {ComplaintsStore.complaintsAmount} всего
              </p>
            </div>
            <ComplaintsTable complaintType="connection" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default DashboardPage;
