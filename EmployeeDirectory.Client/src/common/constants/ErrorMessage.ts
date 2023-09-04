const errorMessages = {
  required: "The field is required.",
  invalid: "The input provided is not valid.",
  minLength: (minValue: number) => `Minimum required length is ${minValue}`,
  maxLength: (maxValue: number) => `Maximum possible length is ${maxValue}`,
};

export default errorMessages;
