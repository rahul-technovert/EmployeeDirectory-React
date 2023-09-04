import ApiEndpoints from "../common/apis/ApiEndpoints";
import { IOffice } from "../interfaces/IEmployeeCard";
import HttpService from "./HttpServices";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export default class OfficeService {
  private http;

  constructor() {
    this.http = new HttpService();
  }

  getOffices() {
    return this.http.get<IOffice[]>(
      `${baseURL}/${ApiEndpoints.OfficesEndpoint}`
    );
  }
}
