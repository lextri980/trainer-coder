import { apiService } from "..";

export const loginApi = async (body: any) =>
  await apiService.post("/auth/login", body);
export const registerApi = async () => await apiService.post("/auth/register");
