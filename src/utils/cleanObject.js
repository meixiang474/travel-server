const _isVoid = (val) => {
  return val == null || val === "";
};

const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (_isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

module.exports = cleanObject;