export interface INoteStore {
  loading: boolean;
  message: string;
  success: boolean;
  noteList: INote[];
  note: INote | null;
}

export interface INote {
  title: string;
  content: string;
  status: string;
}
