const unPick = (source, arr) => {
  if (Array.isArray(arr)) {
    let obj = {};
    for (let i in source) {
      if (!arr.includes(i)) {
        obj[i] = source[i];
      }
    }
    return obj;
  }
};

module.exports = unPick;
