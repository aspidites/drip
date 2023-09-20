export const removeEmpty = (object) => Object.entries(object).reduce(
  (result, [key, value]) => value === null || value === undefined ? result : {
    ...result,
    [key]: value
  },
  {}
);
