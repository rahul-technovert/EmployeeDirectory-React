import IEmployeeCard from "../interfaces/IEmployeeCard";
import ISaveEmployee from "../interfaces/ISaveEmployee";
import ICategoryCount from "../interfaces/ICategoryCount";
import HttpService from "./HttpServices";
import ApiEndpoints from "../common/apis/ApiEndpoints";
import IEmployee from "../interfaces/IEmployee";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export default class EmployeeService {
  private http;

  constructor() {
    this.http = new HttpService();
  }

  getCounts() {
    return this.http.get<ICategoryCount[]>(
      `${baseURL}/${ApiEndpoints.CategoryCountsEndpoint}`
    );
  }

  getCards() {
    return this.http.get<IEmployeeCard[]>(
      `${baseURL}/${ApiEndpoints.EmployeeCardsEndpoint}`
    );
  }

  getEmployee(id: number) {
    return this.http.get<IEmployee>(
      `${baseURL}/${ApiEndpoints.EmployeeEndPoint}/${id}`
    );
  }

  createEmployee(employee: ISaveEmployee) {
    return this.http.post<IEmployee>(
      `${baseURL}/${ApiEndpoints.EmployeeEndPoint}`,
      employee
    );
  }

  updateEmployee(employee: ISaveEmployee) {
    return this.http.put<IEmployee>(
      `${baseURL}/${ApiEndpoints.EmployeeEndPoint}/${employee.id}`,
      employee
    );
  }

  removeEmployee(id: number) {
    return this.http.delete(
      `${baseURL}/${ApiEndpoints.EmployeeEndPoint}/${id}`
    );
  }
}
