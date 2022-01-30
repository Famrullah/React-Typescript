import axios, { AxiosInstance } from "axios";

class Api {
  private static axiosInstance: AxiosInstance;

  static init() {
    this.axiosInstance = axios.create({
      baseURL: `https://api.sampleapis.com`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    Api.axiosInstance.interceptors.request.use((request: any) => {
      const isLoggedIn = localStorage.getItem("token");
      if (isLoggedIn) {
        request.headers.common.Authorization = `Bearer ${isLoggedIn}`;
      }
      return request;
    });
  }

  static async get<ResponseType, Config>(url: string, config?: Config) {
    return await Api.axiosInstance.get<ResponseType>(url, config);
  }

  static async post<ResponseType, DataType>(url: string, data?: DataType) {
    return await Api.axiosInstance.post<ResponseType, DataType>(url, data);
  }

  static async patch<ResponseType, DataType>(url: string, data?: DataType) {
    return await Api.axiosInstance.patch<ResponseType, DataType>(url, data);
  }
}

export default Api;
