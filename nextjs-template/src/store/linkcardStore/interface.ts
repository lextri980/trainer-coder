export interface ILinkcardStore {
  loading: boolean;
  message: string;
  success: boolean;
  linkcardList: ILinkcard[];
  linkcard: ILinkcard | null;
}

export interface ILinkcard {
  _id?: string;
  title: string;
  url: string;
  status: string;
}
