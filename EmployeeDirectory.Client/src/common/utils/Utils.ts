import IEmployee from "../../interfaces/IEmployee";
import IForm from "../../interfaces/IForm";
import ILength from "../../interfaces/ILength";
import ISaveEmployee from "../../interfaces/ISaveEmployee";
import IEmployeeCard from "../../interfaces/IEmployeeCard";
import { InputLength, RegExp } from "../constants/Constants";
import errorMessages from "../constants/ErrorMessage";

export default class Utils {
  generateAlphabets() {
    const alphabets: string[] = [];

    for (let i = 65; i <= 90; i++) {
      alphabets.push(String.fromCharCode(i));
    }

    return alphabets;
  }

  generateDefaultCreateEmpForm(): IForm {
    return {
      firstName: {
        value: "",
        regexp: RegExp.name,
        error: "",
      },
      lastName: {
        value: "",
        regexp: RegExp.name,
        error: "",
      },
      email: {
        value: "",
        regexp: RegExp.email,
        error: "",
      },
      phoneNumber: {
        value: "",
        regexp: RegExp.phoneNumber,
        error: "",
      },
      skypeId: {
        value: "",
        error: "",
        regexp: null,
      },
      department: {
        value: "",
        error: "",
        regexp: null,
      },
      office: {
        value: "",
        error: "",
        regexp: null,
      },
      jobTitle: {
        value: "",
        error: "",
        regexp: null,
      },
    };
  }

  mapEmployeeToForm(employee: IEmployee): IForm {
    const defaultForm = this.generateDefaultCreateEmpForm();

    defaultForm.id = employee.id;
    defaultForm.firstName.value = employee.firstName;
    defaultForm.lastName.value = employee.lastName;
    defaultForm.email.value = employee.email;
    defaultForm.phoneNumber.value = employee.phone;
    defaultForm.skypeId.value = employee.skypeId;
    defaultForm.office.value = employee.office.officeId.toString();
    defaultForm.department.value = employee.department.departmentId.toString();
    defaultForm.jobTitle.value = employee.jobTitle.jobTitleId.toString();

    return defaultForm;
  }

  mapEmployeeToCard(employee: IEmployee): IEmployeeCard {
    return {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      department: {
        departmentId: employee.department.departmentId,
        departmentName: employee.department.departmentName,
      },
      office: {
        officeId: employee.office.officeId,
        officeName: employee.office.officeName,
      },
      jobTitle: {
        jobTitleId: employee.jobTitle.jobTitleId,
        jobTitleName: employee.jobTitle.jobTitleName,
      },
    } as IEmployeeCard;
  }

  mapFormToSaveEmployee(form: IForm): ISaveEmployee {
    return {
      id: form.id,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phoneNumber.value,
      email: form.email.value,
      skypeId: form.skypeId.value,
      departmentId: parseInt(form.department.value),
      officeId: parseInt(form.office.value),
      jobTitleId: parseInt(form.jobTitle.value),
    };
  }

  validateForm(form: IForm) {
    const newForm = { ...form };

    newForm.firstName.error = this.validateField(
      newForm.firstName.value,
      newForm.firstName.regexp,
      InputLength
    );
    newForm.lastName.error = this.validateField(
      newForm.lastName.value,
      newForm.lastName.regexp,
      InputLength
    );
    newForm.phoneNumber.error = this.validateField(
      newForm.phoneNumber.value,
      newForm.phoneNumber.regexp
    );
    newForm.skypeId.error = this.validateField(
      newForm.skypeId.value,
      newForm.skypeId.regexp
    );
    newForm.email.error = this.validateField(
      newForm.email.value,
      newForm.email.regexp
    );
    newForm.office.error = this.validateField(newForm.office.value, null);
    newForm.department.error = this.validateField(
      newForm.department.value,
      null
    );
    newForm.jobTitle.error = this.validateField(newForm.jobTitle.value, null);

    return newForm;
  }

  validateField(value: string, regExp: RegExp | null, length?: ILength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length === 0) return errorMessages.required;
    if (regExp && !regExp.test(value)) return errorMessages.invalid;
    if (length) {
      const { min, max } = length;
      if (value.length < min) return errorMessages.minLength(min);
      if (value.length > max) return errorMessages.maxLength(max);
    }

    return "";
  }
}
