import { makeAutoObservable } from 'mobx';

class RateStore {
  currentRateId: string = '321815.0'; // начальный ID
  rate = {
    '307752.0': { n_spam: 1, hard: 0, pos: 0, neg: 0 },
    '321813.0': { n_spam: 1, hard: 3, pos: 3, neg: 1 },
    '321814.0': { n_spam: 1, hard: 2, pos: 0, neg: 0 },
    '321815.0': { n_spam: 1, hard: 3, pos: 3, neg: 1 },
    '321816.0': { n_spam: 1, hard: 2, pos: 0, neg: 1 },
  };

  constructor() {
    makeAutoObservable(this);
  }

  get rateInfo() {
    return Object.entries(this.rate).map(([id, rateInfo]) => ({
      id, // ID оценки
      n_spam: rateInfo.n_spam,
      hard: rateInfo.hard,
      pos: rateInfo.pos,
      neg: rateInfo.neg,
    }));
  }

  setRateId(id: string) {
    this.currentRateId = id;
  }

  get currentRate() {
    return this.rateInfo.find(rate => rate.id === this.currentRateId);
  }
}

export default new RateStore();
