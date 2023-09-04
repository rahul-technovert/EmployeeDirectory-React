import { IDepartment, IJobTitle, IOffice } from "./IEmployee";

export default interface IEmployeeCard {
  id: number;
  firstName: string;
  lastName: string;
  department: IDepartment;
  jobTitle: IJobTitle;
  office: IOffice;
}
