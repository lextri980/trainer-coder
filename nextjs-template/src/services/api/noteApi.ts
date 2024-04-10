import { apiService } from "..";

export const getNoteListApi = async () => await apiService.get("/note/list");

export const getNoteDetailApi = async (id: string) =>
  apiService.get(`/note/detail/${id}`);

export const createNoteApi = async (body: any) =>
  await apiService.post("/note/create", body);

export const updateNoteApi = async (body: any, id: string) =>
  await apiService.put(`/note/update/${id}`, body);
