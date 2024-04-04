import { apiService } from "..";

export const getNoteListApi = async () => await apiService.get("/note/list");

export const createNoteApi = async (body: any) =>
  await apiService.post("note/create", body);

export const getNoteDetailApi = async (id: string) =>
  apiService.get(`/note/detail/${id}`);
