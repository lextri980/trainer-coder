import { apiService } from "..";

export const getNoteListApi = async () => await apiService.get("/note/list");
