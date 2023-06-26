export const saveStore = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getStore = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
