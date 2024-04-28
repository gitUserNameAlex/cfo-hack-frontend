import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import SpamStore from '@/store/SpamStore';
import styles from './PieChart.module.scss';

export default function Chart() {
  const data1 = [
    { label: 'Spam', value: SpamStore.spamCount, color: '#ffbb38' },
    { label: 'Censorship', value: SpamStore.censorshipCount, color: '#4c78ff' },
  ];
  return (
    <div className={styles.chart}>
      <PieChart
        className={styles.chart__container}
        series={[
          {
            outerRadius: 150,

            data: data1,
          },
        ]}
        height={400}
        width={400}
        slotProps={{
          legend: { hidden: true },
        }}
      />
      <div className={styles.chart__container__text}>
        <p style={{ color: '#ffbb38' }}>Spam</p>
        <p style={{ color: '#4c78ff' }}>Censorship</p>
      </div>
    </div>
  );
}
