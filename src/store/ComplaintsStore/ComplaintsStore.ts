import axios from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';
import { IComplaint } from '@/types/interfaces';

class ComplaintsStore {
  complaints = [
    {
      videoID: 340458.0,
      message: '\u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-03 11:28:02',
      type: 'audio',
    },
    {
      videoID: 414936.0,
      message: '\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u0437\u0432\u0443\u043a',
      date: '2024-03-28 17:05:57',
      type: 'audio',
    },
    {
      videoID: 399670.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043a\u043e\u043c\u043f \u0437\u0430\u0432\u0438\u0441 \u0438 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-05 15:10:25',
      type: 'audio',
    },
    {
      videoID: 376797.0,
      message: '\u0442\u0435\u0431\u044f \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-21 15:05:45',
      type: 'audio',
    },
    {
      videoID: 386377.0,
      message: '\u0434\u0430 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-02 15:25:01',
      type: 'audio',
    },
    {
      videoID: 359662.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043a\u0440\u0438\u0441\u0442\u0430\u043b\u043b \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-21 15:45:03',
      type: 'audio',
    },
    {
      videoID: 411389.0,
      message:
        '\u0440\u0435\u0431\u044f\u0442 \u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-22 18:05:42',
      type: 'audio',
    },
    {
      videoID: 416058.0,
      message: '\u0438 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-10 12:48:05',
      type: 'audio',
    },
    {
      videoID: 384869.0,
      message: '\u043d\u0435\u0442 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-03 09:38:38',
      type: 'audio',
    },
    {
      videoID: 340414.0,
      message: '\u0432\u0441\u0435\u0440\u0430\u0432\u043d\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-09 13:10:28',
      type: 'audio',
    },
    {
      videoID: 361469.0,
      message: '\u0430 \u0432\u0430\u0441 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-03 10:56:48',
      type: 'audio',
    },
    {
      videoID: 391358.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0432\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-28 15:33:32',
      type: 'audio',
    },
    {
      videoID: 351623.0,
      message:
        '\u0423 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-31 10:27:06',
      type: 'audio',
    },
    {
      videoID: 418749.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u0432\u0438\u0434\u0438\u043c\u043e \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-17 07:38:15',
      type: 'audio',
    },
    {
      videoID: 414583.0,
      message: '\u0440\u043e\u043c\u0430\u043d \u0432\u0430\u0441 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-02 08:30:54',
      type: 'audio',
    },
    {
      videoID: 348196.0,
      message: '\u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-06 15:13:11',
      type: 'audio',
    },
    {
      videoID: 420760.0,
      message: '\u0433\u043e\u043b\u043e\u0441 \u043f\u0440\u043e\u043f\u0430\u0434\u0430\u0435\u0442',
      date: '2024-03-26 17:01:57',
      type: 'audio',
    },
    {
      videoID: 418600.0,
      message: '\u043c\u0435\u043d\u044f \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-22 17:22:42',
      type: 'audio',
    },
    {
      videoID: 378293.0,
      message: '\u043b\u0430\u0441\u0441\u0441\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-30 09:10:23',
      type: 'audio',
    },
    {
      videoID: 422621.0,
      message: '\u043d\u0430\u0441 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-29 15:01:27',
      type: 'audio',
    },
    {
      videoID: 394775.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u0437\u0432\u0443\u043a \u043d\u0435 \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f',
      date: '2024-03-10 10:29:07',
      type: 'audio',
    },
    {
      videoID: 435941.0,
      message: '\u0432\u0430\u0441 \u0442\u043e\u0436\u0435 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-23 08:01:02',
      type: 'audio',
    },
    {
      videoID: 400803.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u0433\u043e\u043b\u043e\u0441 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-16 13:04:42',
      type: 'audio',
    },
    {
      videoID: 380601.0,
      message: '\u043d\u0435\u0447\u0435\u0433\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-06 15:38:33',
      type: 'audio',
    },
    {
      videoID: 373747.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0443\u0437\u044b\u043a\u0430 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-16 09:58:47',
      type: 'audio',
    },
    {
      videoID: 395752.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-16 12:04:16',
      type: 'audio',
    },
    {
      videoID: 361789.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-09 16:11:10',
      type: 'audio',
    },
    {
      videoID: 362334.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-07 15:59:07',
      type: 'audio',
    },
    {
      videoID: 412447.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d  \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-17 12:31:51',
      type: 'audio',
    },
    {
      videoID: 413096.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-31 13:25:06',
      type: 'audio',
    },
    {
      videoID: 359821.0,
      message: '\u043c\u043e\u043d\u0438\u043a \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-09 13:10:45',
      type: 'audio',
    },
    {
      videoID: 399900.0,
      message:
        '\u043d\u043e \u0443 \u043c\u0435\u043d\u044f \u0437\u0432\u0443\u043a \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-27 16:23:43',
      type: 'audio',
    },
    {
      videoID: 401297.0,
      message: '\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-03 10:49:37',
      type: 'audio',
    },
    {
      videoID: 414273.0,
      message:
        '\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-09 08:43:21',
      type: 'audio',
    },
    {
      videoID: 420428.0,
      message: '\u044d\u0445 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-28 18:57:30',
      type: 'audio',
    },
    {
      videoID: 358581.0,
      message: '\u044d\u0445\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-24 09:11:22',
      type: 'audio',
    },
    {
      videoID: 414627.0,
      message: '\u0434\u043e\u0431\u0440\u043e\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-24 07:38:54',
      type: 'audio',
    },
    {
      videoID: 414506.0,
      message:
        '\u0423 \u043c\u0435\u043d\u044f \u0437\u0432\u0443\u043a \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-04 17:58:12',
      type: 'audio',
    },
    {
      videoID: 337967.0,
      message: '\u0432\u0430\u0441 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-21 15:10:46',
      type: 'audio',
    },
    {
      videoID: 332107.0,
      message: '\u0432\u0430\u0441 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-24 11:35:54',
      type: 'audio',
    },
    {
      videoID: 378322.0,
      message: '\u0432\u0430\u0441 \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-23 12:08:14',
      type: 'audio',
    },
    {
      videoID: 360739.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u0437\u0432\u0443\u043a \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-09 15:08:03',
      type: 'audio',
    },
    {
      videoID: 360215.0,
      message: '\u043d\u0435\u0442 \u0437\u0432\u0443\u043a\u0430',
      date: '2024-03-24 10:16:20',
      type: 'audio',
    },
    {
      videoID: 411022.0,
      message: '\u043d\u0435\u0442 \u0437\u0432\u0443\u043a\u0430',
      date: '2024-03-06 17:01:00',
      type: 'audio',
    },
    {
      videoID: 360145.0,
      message: '\u0437\u0432\u0443\u043a \u043f\u0440\u043e\u043f\u0430\u043b',
      date: '2024-03-16 15:57:43',
      type: 'audio',
    },
    {
      videoID: 411022.0,
      message: '\u0437\u0432\u0443\u043a \u043f\u0440\u043e\u043f\u0430\u043b',
      date: '2024-03-06 17:01:07',
      type: 'audio',
    },
    {
      videoID: 421870.0,
      message:
        '\u0443 \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0437\u0432\u0443\u043a',
      date: '2024-03-10 14:43:26',
      type: 'audio',
    },
    {
      videoID: 373747.0,
      message: '\u0437\u0432\u0443\u043a  \u043f\u0440\u043e\u043f\u0430\u043b',
      date: '2024-03-16 09:23:50',
      type: 'audio',
    },
    {
      videoID: 399298.0,
      message: '\u043d\u0435\u0442 \u0437\u0432\u0443\u043a\u0430',
      date: '2024-03-03 10:24:54',
      type: 'audio',
    },
    {
      videoID: 419670.0,
      message: '\u043d\u0435\u0442 \u0437\u0432\u0443\u043a\u0430',
      date: '2024-03-15 18:10:01',
      type: 'audio',
    },
    {
      videoID: 414094.0,
      message: '\u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-04 17:11:54',
      type: 'audio',
    },
    {
      videoID: 420807.0,
      message: '\u0437\u0432\u0443\u043a \u043f\u0440\u043e\u043f\u0430\u043b',
      date: '2024-03-31 08:15:54',
      type: 'audio',
    },
    {
      videoID: 323051.0,
      message: '\u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-03 08:43:59',
      type: 'audio',
    },
    {
      videoID: 409035.0,
      message: '\u0437\u0432\u0443\u043a \u043f\u0440\u043e\u043f\u0430\u0434\u0430\u0435\u0442',
      date: '2024-03-21 17:09:24',
      type: 'audio',
    },
    {
      videoID: 417676.0,
      message: '\u0437\u0432\u0443\u043a \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-18 18:10:47',
      type: 'audio',
    },
    {
      videoID: 416361.0,
      message: '\u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e',
      date: '2024-03-16 09:02:40',
      type: 'audio',
    },
    {
      videoID: 358737.0,
      message: '\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043c\u0438\u043a\u0440\u043e',
      date: '2024-03-03 10:34:31',
      type: 'audio',
    },
    {
      videoID: 361886.0,
      message:
        '\u0443 \u0432\u0430\u0441 \u0441 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u043e\u043c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b',
      date: '2024-03-17 12:07:10',
      type: 'audio',
    },
    {
      videoID: 423515.0,
      message: '\u0437\u0432\u0443\u043a \u043f\u0440\u043e\u043f\u0430\u043b',
      date: '2024-03-03 10:41:54',
      type: 'audio',
    },
    {
      videoID: 348226.0,
      message: '\u043c\u0438\u043a\u0440\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-16 13:35:56',
      type: 'audio',
    },
    {
      videoID: 423921.0,
      message: '\u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442 \u043a\u0432\u0438\u0437',
      date: '2024-03-07 16:06:01',
      type: 'connection',
    },
    {
      videoID: 359082.0,
      message: '\u0432\u044b \u043f\u0440\u0438\u043a\u0438\u043d\u044c\u0442\u0435',
      date: '2024-03-03 12:12:43',
      type: 'connection',
    },
    {
      videoID: 401379.0,
      message: '\u0432\u044b \u043f\u043e\u0434\u043b\u0430\u0433\u0438\u0432\u0430\u0435\u0442\u0435',
      date: '2024-03-23 12:35:19',
      type: 'connection',
    },
    {
      videoID: 400506.0,
      message: '\u0434\u043e\u043b\u0433\u043e \u0433\u0440\u0443\u0437\u0438\u0442',
      date: '2024-03-09 11:10:38',
      type: 'connection',
    },
    {
      videoID: 395754.0,
      message: '\u0434\u043e\u043b\u0433\u043e \u0433\u0440\u0443\u0437\u0438\u0442',
      date: '2024-03-30 12:16:41',
      type: 'connection',
    },
    {
      videoID: 386219.0,
      message: '\u0442\u043e\u0436\u0435 \u043d\u0435 \u0440\u0430\u044e\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-05 15:34:07',
      type: 'connection',
    },
    {
      videoID: 331971.0,
      message: '\u0427\u0442\u043e \u0442\u043e \u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442',
      date: '2024-03-17 08:09:22',
      type: 'connection',
    },
    {
      videoID: 418822.0,
      message: '\u0447\u0451\u0442 \u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442',
      date: '2024-03-05 17:44:20',
      type: 'connection',
    },
    {
      videoID: 377291.0,
      message: '\u0432\u0441\u0435 \u0435\u0449\u0435 \u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442',
      date: '2024-03-21 15:40:17',
      type: 'connection',
    },
    {
      videoID: 409035.0,
      message: '\u0437\u0432\u0443\u043a \u043f\u0440\u043e\u043f\u0430\u0434\u0430\u0435\u0442',
      date: '2024-03-21 17:09:24',
      type: 'connection',
    },
    {
      videoID: 375547.0,
      message: '\u043d\u0435 \u043e\u0442\u0432\u0438\u0447\u0430\u0435\u0442',
      date: '2024-03-10 10:59:51',
      type: 'connection',
    },
    {
      videoID: 417603.0,
      message: '\u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430',
      date: '2024-03-18 07:10:16',
      type: 'connection',
    },
    {
      videoID: 378191.0,
      message: '\u043d\u0435 \u0440\u043e\u0431\u0438\u0442',
      date: '2024-03-03 08:23:05',
      type: 'connection',
    },
    {
      videoID: 384873.0,
      message: '\u043f\u0440\u0430\u0433\u0430\u0435\u0442',
      date: '2024-03-31 08:17:50',
      type: 'connection',
    },
    {
      videoID: 416057.0,
      message: '\u043d\u0443 \u0432\u0441\u0435 \u0432\u044b \u0437\u0430\u0432\u0438\u0441\u043b\u0438',
      date: '2024-03-03 12:15:38',
      type: 'connection',
    },
    {
      videoID: 386139.0,
      message: '\u043d\u0435  \u0440\u0430\u044e\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-10 12:19:41',
      type: 'connection',
    },
    {
      videoID: 375547.0,
      message: '\u043d\u0435 \u043e\u0442\u0432\u0438\u0441\u0430\u0435\u0442',
      date: '2024-03-10 10:59:28',
      type: 'connection',
    },
    {
      videoID: 399736.0,
      message: '\u0432\u044b \u0443 \u043c\u0435\u043d\u044f \u0437\u0430\u0432\u0438\u0441\u043b\u0438',
      date: '2024-03-24 15:14:49',
      type: 'connection',
    },
    {
      videoID: 362305.0,
      message: '\u0432\u044b\u0440\u0435\u0437\u0430\u0435\u0442',
      date: '2024-03-30 13:26:59',
      type: 'connection',
    },
    {
      videoID: 352134.0,
      message: '\u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
      date: '2024-03-03 08:32:27',
      type: 'connection',
    },
    {
      videoID: 400187.0,
      message: '\u0412\u044b \u0437\u0430\u0432\u0438\u0441\u043b\u0438',
      date: '2024-03-24 10:21:38',
      type: 'connection',
    },
    {
      videoID: 415971.0,
      message: '\u0432\u044b \u0437\u0430\u0432\u0438\u0441\u0430\u0435\u0442\u0435 \u0438\u043d\u043e\u0433\u0434\u0430',
      date: '2024-03-08 15:12:16',
      type: 'connection',
    },
    {
      videoID: 361724.0,
      message: '\u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f',
      date: '2024-03-24 10:42:46',
      type: 'connection',
    },
    {
      videoID: 401801.0,
      message: '\u0434\u0432\u0438\u0433\u0430\u0435\u0442',
      date: '2024-03-17 12:24:08',
      type: 'connection',
    },
    {
      videoID: 376201.0,
      message: '\u0432\u044b \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442\u0435',
      date: '2024-03-12 15:45:09',
      type: 'connection',
    },
    {
      videoID: 406999.0,
      message:
        '\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c',
      date: '2024-03-26 15:10:53',
      type: 'connection',
    },
    {
      videoID: 385589.0,
      message: '\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0442\u044c\u044e',
      date: '2024-03-03 08:53:23',
      type: 'connection',
    },
    {
      videoID: 380482.0,
      message: '\u0432\u044b \u0437\u0430\u0432\u0438\u0441\u0430\u0435\u0442\u0435',
      date: '2024-03-24 15:10:47',
      type: 'connection',
    },
    {
      videoID: 337878.0,
      message: '\u0432\u044b \u043b\u0430\u0433\u0430\u0435\u0442\u0435',
      date: '2024-03-10 10:15:43',
      type: 'connection',
    },
    {
      videoID: 321816.0,
      message: '\u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442',
      date: '2024-03-23 13:13:00',
      type: 'connection',
    },
    {
      videoID: 337878.0,
      message: '\u0432\u044b \u0437\u0430\u0432\u0438\u0441\u043b\u0438',
      date: '2024-03-10 10:15:54',
      type: 'connection',
    },
  ];
  complaintsAmount = this.complaints.length;

  constructor() {
    makeAutoObservable(this);
  }

  // async fetchComplaints() {
  //   try {
  //     const resp = await axios.get(`http://127.0.0.1:8080/mock.json`);

  //     runInAction(() => {
  //       this.complaintsAmount = resp.data.length;
  //       this.complaints = resp.data.map((complaint: IComplaint) => ({
  //         message: complaint.message,
  //         videoID: complaint.videoID,
  //         date: complaint.date,
  //         type: complaint.type,
  //       }));
  //     });
  //   } catch (err) {
  //     console.log('Error while fetching complaints:', err);
  //   }
  // }
}

export default new ComplaintsStore();
