export default interface IEmployee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  skypeId: string;
  phone: string;
  jobTitle: IJobTitle;
  office: IOffice;
  department: IDepartment;
}

export interface IDepartment {
  departmentId: number;
  departmentName: string;
}
export interface IJobTitle {
  jobTitleId: number;
  jobTitleName: string;
}
export interface IOffice {
  officeId: number;
  officeName: string;
}
