const replaceChar = (value, searchValue = '.', replaceValue = ',') => {
  return String(value?.toFixed(2)).replace(searchValue, replaceValue);
};

export default replaceChar;
