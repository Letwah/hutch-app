export const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
