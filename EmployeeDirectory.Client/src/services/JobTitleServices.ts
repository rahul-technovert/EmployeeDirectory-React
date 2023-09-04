import ApiEndpoints from "../common/apis/ApiEndpoints";
import { IJobTitle } from "../interfaces/IEmployeeCard";
import HttpService from "./HttpServices";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export default class JobTitleService {
  private http;

  constructor() {
    this.http = new HttpService();
  }

  getJobTitles() {
    return this.http.get<IJobTitle[]>(
      `${baseURL}/${ApiEndpoints.JobTitlesEndpoint}`
    );
  }
}
