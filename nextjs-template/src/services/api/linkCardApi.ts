import { ILinkcard } from "@/store/linkcardStore/interface";
import { apiService } from "..";

export const getLinkcardListApi = async () =>
  await apiService.get("/linkcard/list");

export const createLinkcardApi = async (body: ILinkcard) =>
  await apiService.post("/linkcard/create", body);
