import ILength from "../../interfaces/ILength";
import IRegExp from "../../interfaces/IRegExp";

export const InputLength: ILength = {
  min: 2,
  max: 255,
};

export const RegExp: IRegExp = {
  name: /^[a-zA-Z]*$/,
  email: /^\S*@gmail.com$/,
  phoneNumber: /^[6-9]{3}[0-9]{7}$/,
};
