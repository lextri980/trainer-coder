export interface IPostState {
  loading: boolean;
  posts: IPost[];
  comments: IComment[];
  message: string;
}

export interface IPost {
  userId: number;
  id: number;
  body: string;
  title: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
