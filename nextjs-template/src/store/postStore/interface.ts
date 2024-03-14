export interface IPostState {
  loading: boolean,
  posts: IPost[];
}

export interface IPost {
  userId: number;
  id: number;
  body: string;
  title: string;
}
