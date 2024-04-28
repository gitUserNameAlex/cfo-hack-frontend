import { makeAutoObservable } from 'mobx';

class LessonsStore {
  currentLessonId: string = '321815.0';
  messagesTimeline = {
    '307752.0': {
      start_times: [
        '2024-03-13 10:12:22',
        '2024-03-13 10:27:22',
        '2024-03-13 10:42:22',
        '2024-03-13 10:57:22',
        '2024-03-13 11:12:22',
        '2024-03-13 11:27:22',
      ],
      counts: [1, 0, 0, 0, 0, 0],
    },
    '321813.0': {
      start_times: [
        '2024-03-02 12:58:55',
        '2024-03-02 13:13:55',
        '2024-03-02 13:28:55',
        '2024-03-02 13:43:55',
        '2024-03-02 13:58:55',
        '2024-03-02 14:13:55',
      ],
      counts: [36, 13, 6, 8, 7, 6],
    },
    '321814.0': {
      start_times: [
        '2024-03-09 12:59:48',
        '2024-03-09 13:14:48',
        '2024-03-09 13:29:48',
        '2024-03-09 13:44:48',
        '2024-03-09 13:59:48',
        '2024-03-09 14:14:48',
      ],
      counts: [33, 7, 1, 8, 3, 3],
    },
    '321815.0': {
      start_times: [
        '2024-03-16 13:07:12',
        '2024-03-16 13:22:12',
        '2024-03-16 13:37:12',
        '2024-03-16 13:52:12',
        '2024-03-16 14:07:12',
        '2024-03-16 14:22:12',
      ],
      counts: [3, 2, 7, 18, 5, 50],
    },
    '321816.0': {
      start_times: [
        '2024-03-23 12:56:33',
        '2024-03-23 13:11:33',
        '2024-03-23 13:26:33',
        '2024-03-23 13:41:33',
        '2024-03-23 13:56:33',
        '2024-03-23 14:11:33',
      ],
      counts: [59, 50, 29, 53, 36, 37],
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  get lessonsInfo() {
    // Используем Object.entries для получения массива пар [key, value]
    return Object.entries(this.messagesTimeline).map(([id, lessonInfo]) => {
      return {
        id, // ID урока
        start_times: lessonInfo.start_times, // Массив с временами начала
        counts: lessonInfo.counts, // Массив с количествами
      };
    });
  }

  setLessonId(id: string) {
    this.currentLessonId = id;
  }

  get currentLesson() {
    return this.lessonsInfo.find(lesson => lesson.id === this.currentLessonId);
  }
}

export default new LessonsStore();
