import { axiosClient } from "./../service/axios";
import {
  FilterLatihan,
  LatihanDetailResponse,
  ListLatihanResponse,
} from "./interface";

export const latihanService = {
  list: async (params: FilterLatihan): Promise<ListLatihanResponse> => {
    return await axiosClient.get("/latihan/list", {params}).then((n) => n.data);
  },
  detail: async (id: string): Promise<LatihanDetailResponse> =>
    axiosClient.get(`/latihan/detail/${id}`).then((res) => res.data),
};
