import { apiService } from "..";

export const getPostApi = async () => {
  await apiService.get("/posts");
};
