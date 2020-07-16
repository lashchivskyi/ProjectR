export const required = (value) => {
  if (value) return undefined;
  return "Feald is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `max Length ${maxLength} symbols`;
  return undefined;
};
