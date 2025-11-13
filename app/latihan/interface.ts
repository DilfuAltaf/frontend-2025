import { BaseResponse } from "../service/axios";

export interface Latihan {
  id: number;
  title: string;
  name: string;
  umur: number;
  alamat: string;
  updated_at: Date;
}

export interface ListLatihanResponse extends BaseResponse {
  data: Latihan[];
  page: number;
  meta: {
    total: number;
    page: number;
    limit: number;
    lastPage: number;
  };
}

export interface LatihanDetailResponse extends BaseResponse {
  data: Latihan;
}

export interface FilterLatihan {
  title: string;
  name: string;
  alamat: string;
  umur: string;
  keyword?: string;
  page: number;
  limit: number;
}
