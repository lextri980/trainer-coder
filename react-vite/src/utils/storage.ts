const getLocal = (key: string) => {
  return localStorage.getItem(key);
};

const setLocal = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const removeLocal = (key: string) => {
  localStorage.removeItem(key)
}

export {
  getLocal,
  setLocal,
  removeLocal
}