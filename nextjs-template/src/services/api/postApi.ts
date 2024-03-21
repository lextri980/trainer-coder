import { apiService } from "..";

export const getPostApi = async () => await apiService.get("/posts");
export const getCommentApi = async () => await apiService.get("/comments");
