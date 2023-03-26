export const isNullOrUndefined = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  return false;
};

export const removeUndefinedProps = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (isNullOrUndefined(obj[key])) {
      delete obj[key];
    }
  });
};
