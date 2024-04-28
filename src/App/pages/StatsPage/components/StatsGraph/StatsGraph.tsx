import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import LessonsStore from '@/store/LessonsStore';
import styles from './StatsGraph.module.scss';
import { observer } from 'mobx-react-lite';

const StatsGraph = observer(() => {
  // Получаем первый урок из хранилища
  const lesson = LessonsStore.currentLesson; // Меняйте индекс в зависимости от нужного урока

  if (!lesson) {
    return <div>Урок не найден</div>;
  }

  return (
    <BarChart
      className={styles.barChart}
      slotProps={{
        bar: {
          clipPath: `inset(0px round 15px 15px 0px 0px)`,
        },
      }}
      height={300}
      series={[{ data: lesson.counts, label: 'Messages', id: 'countsId', color: '#FCAA0B' }]}
      xAxis={[{ data: lesson.start_times, scaleType: 'band' }]} // Используем start_times для оси X
    />
  );
});

export default StatsGraph;
