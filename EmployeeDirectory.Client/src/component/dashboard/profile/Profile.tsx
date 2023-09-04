import { useEffect, useState } from "react";
import IEmployee from "../../../interfaces/IEmployee";
import EmployeeService from "../../../services/EmployeeService";

import "./profile.scss";

interface IProp {
  id: number | null;
  onCloseProfile: () => void;
  toggleForm: () => void;
}

export const Profile = ({ id, onCloseProfile, toggleForm }: IProp) => {
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const employeeService = new EmployeeService();

  useEffect(() => {
    if (id) {
      employeeService
        .getEmployee(id)
        .then(({ data: fetchedEmployee }) => {
          setEmployee(fetchedEmployee);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  if (isLoading) return null;

  if (!employee) return null;

  return (
    <div className=" profile ">
      <div className="block">
        <h2 className="text-center mb-3">Profile</h2>
        <table className="table table-striped mx-auto">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{employee.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{employee.lastName}</td>
            </tr>
            <tr>
              <th>Preferred Name</th>
              <td>{employee.firstName + " " + employee.lastName} </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{employee.email} </td>
            </tr>
            <tr>
              <th>Job Title</th>
              <td>{employee.jobTitle.jobTitleName} </td>
            </tr>
            <tr>
              <th>Office</th>
              <td>{employee.office.officeName} </td>
            </tr>
            <tr>
              <th>Department</th>
              <td>{employee.department.departmentName} </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{employee.phone} </td>
            </tr>
            <tr>
              <th>Skype IDe</th>
              <td>{employee.skypeId} </td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-danger " onClick={onCloseProfile}>
          Close
        </button>

        <button
          type="button"
          className="btn btn-warning ms-4"
          onClick={toggleForm}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
