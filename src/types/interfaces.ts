//Dashboard

export interface ISpam {
  message: string;
  type: string;
  date: string;
  videoID: number;
}

type ComplaintType = 'audio' | 'connection';

export interface IComplaint {
  message: string;
  videoID: number;
  date: string;
  type: string;
}
