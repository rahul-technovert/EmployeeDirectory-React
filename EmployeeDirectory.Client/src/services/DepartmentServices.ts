import ApiEndpoints from "../common/apis/ApiEndpoints";
import { IDepartment } from "../interfaces/IEmployeeCard";
import HttpService from "./HttpServices";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export default class DepartmentService {
  private http;

  constructor() {
    this.http = new HttpService();
  }

  getDepartments() {
    return this.http.get<IDepartment[]>(
      `${baseURL}/${ApiEndpoints.DepartmentsEnddpoint}`
    );
  }
}
