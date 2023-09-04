import IField from "./IField";

export default interface IForm {
  id?: number;
  firstName: IField<string>;
  lastName: IField<string>;
  email: IField<string>;
  skypeId: IField<string>;
  phoneNumber: IField<string>;
  office: IField<string>;
  department: IField<string>;
  jobTitle: IField<string>;
}
