import { FormEvent, useEffect, useState } from "react";
import { useCategory } from "../../../contexts/CategoryContext";
import { useEmployeeCard } from "../../../contexts/EmployeeCardContext";
import { IOffice, IDepartment, IJobTitle } from "../../../interfaces/IEmployee";
import IForm from "../../../interfaces/IForm";
import Utils from "../../../common/utils/Utils";

import DepartmentService from "../../../services/DepartmentServices";
import OfficeService from "../../../services/OfficeServices";
import JobTitleService from "../../../services/JobTitleServices";
import EmployeeService from "../../../services/EmployeeService";

import "./form.scss";

interface IProp {
  id: number | null;
  toggleForm: () => void;
}

export default function Form({ id, toggleForm }: IProp) {
  const utils = new Utils();
  const [form, setForm] = useState<IForm>(utils.generateDefaultCreateEmpForm());

  const { setCategories } = useCategory();
  const { employeeCards, setEmployeeCards } = useEmployeeCard();
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [offices, setOffices] = useState<IOffice[]>([]);
  const [jobTitle, setJobTitles] = useState<IJobTitle[]>([]);

  const departmentServices = new DepartmentService();
  const officeServices = new OfficeService();
  const jobTitleServices = new JobTitleService();
  const employeeServices = new EmployeeService();

  //if parseInt is false then id will be null

  useEffect(() => {
    departmentServices
      .getDepartments()
      .then(({ data }) => setDepartments(data));
    officeServices.getOffices().then(({ data }) => setOffices(data));
    jobTitleServices.getJobTitles().then(({ data }) => setJobTitles(data));

    if (id) {
      employeeServices
        .getEmployee(id)
        .then(({ data: fetchedEmployee }) => {
          const utils = new Utils();
          const mappedForm = utils.mapEmployeeToForm(fetchedEmployee);
          setForm(mappedForm);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validatedForm = utils.validateForm(form);
    if (isFormValid(validatedForm)) {
      const mappedEmployee = utils.mapFormToSaveEmployee(validatedForm);
      if (!id) {
        employeeServices
          .createEmployee(mappedEmployee)
          .then(({ data: employee }) => {
            const mappedCard = utils.mapEmployeeToCard(employee);
            setEmployeeCards([mappedCard, ...employeeCards]);
            employeeServices
              .getCounts()
              .then(({ data }) => setCategories(data));
          });

        toggleForm();
        return;
      }

      employeeServices
        .updateEmployee(mappedEmployee)
        .then(({ data }) => console.log(data));

      toggleForm();
      return;
    }
    setForm(validatedForm);
  };

  const isFormValid = (form: IForm) => {
    let isErrorFree = true;
    Object.values(form).forEach((field) => {
      console.log(field);
      if (field.error !== "") {
        isErrorFree = false;
      }
    });
    return isErrorFree;
  };

  return (
    <div className={"form-block "}>
      <div className="form">
        <h2 className="text-center mb-5">
          {id === null ? "New Employee" : "Edit Employee"}{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 label-input-block">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={form.firstName.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName: { ...form.firstName, value: e.target.value },
                  })
                }
              />
              {form.firstName.error && (
                <div className="text-danger">{form.firstName.error}</div>
              )}
            </div>
          </div>
          <div className="mb-3 label-input-block">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={form.lastName.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName: { ...form.lastName, value: e.target.value },
                  })
                }
              />
              {form.lastName.error && (
                <div className="text-danger">{form.lastName.error}</div>
              )}
            </div>
          </div>
          <div className="mb-3 label-input-block">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={form.email.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: { ...form.email, value: e.target.value },
                  })
                }
              />
              {form.email.error && (
                <div className="text-danger">{form.email.error}</div>
              )}
            </div>
          </div>
          <div className="mb-3 label-input-block">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <div>
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                value={form.phoneNumber.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phoneNumber: { ...form.phoneNumber, value: e.target.value },
                  })
                }
              />
              {form.phoneNumber.error && (
                <div className="text-danger">{form.phoneNumber.error}</div>
              )}
            </div>
          </div>

          <div className="mb-3 label-input-block">
            <label htmlFor="skypeId" className="form-label">
              Skype ID
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="skypeId"
                value={form.skypeId.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    skypeId: { ...form.skypeId, value: e.target.value },
                  })
                }
              />
              {form.skypeId.error && (
                <div className="text-danger">{form.skypeId.error}</div>
              )}
            </div>
          </div>
          <div className="mb-3 label-input-block">
            <label htmlFor="office" className="form-label">
              Office
            </label>
            <div>
              <select
                id="office"
                className="form-select"
                aria-label="Default select example"
                value={form.office.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    office: { ...form.office, value: e.target.value },
                  })
                }
              >
                <option value="">Office</option>
                {offices.map((office) => (
                  <option key={office.officeId} value={office.officeId}>
                    {office.officeName}
                  </option>
                ))}
              </select>
              {form.office.error && (
                <div className="text-danger">{form.office.error}</div>
              )}
            </div>
          </div>
          <div className="mb-3 label-input-block">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <div>
              <select
                id="department"
                className="form-select"
                aria-label="Default select example"
                value={form.department.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    department: { ...form.department, value: e.target.value },
                  })
                }
              >
                <option value="">Department</option>
                {departments.map((dept) => (
                  <option key={dept.departmentId} value={dept.departmentId}>
                    {dept.departmentName}
                  </option>
                ))}
              </select>
              {form.department.error && (
                <div className="text-danger">{form.department.error}</div>
              )}
            </div>
          </div>
          <div className="mb-3 label-input-block">
            <label htmlFor="jobTitle" className="form-label">
              Job Title
            </label>
            <div>
              <select
                id="jobTitle"
                className="form-select"
                aria-label="Default select example"
                value={form.jobTitle.value}
                onChange={(e) =>
                  setForm({
                    ...form,
                    jobTitle: { ...form.jobTitle, value: e.target.value },
                  })
                }
              >
                <option value="">Job Title</option>
                {jobTitle.map((title) => (
                  <option key={title.jobTitleId} value={title.jobTitleId}>
                    {title.jobTitleName}
                  </option>
                ))}
              </select>
              {form.jobTitle.error && (
                <div className="text-danger">{form.jobTitle.error}</div>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <button
            onClick={toggleForm}
            type="button"
            className="btn btn-secondary ms-4"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
