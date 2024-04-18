import { INote } from "@/store/noteStore/interface";
import { apiService } from "..";

export const getNoteListApi = async () => await apiService.get("/note/list");

export const getNoteDetailApi = async (id: string) =>
  apiService.get(`/note/detail/${id}`);

export const createNoteApi = async (body: INote) =>
  await apiService.post("/note/create", body);

export const updateNoteApi = async (body: INote, id: string) =>
  await apiService.put(`/note/update/${id}`, body);
