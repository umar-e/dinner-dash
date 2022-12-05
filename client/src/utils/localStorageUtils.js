export const setLocalStorageItem = (name, value) =>{
  localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorageItem = (name) => {
  return JSON.parse(localStorage.getItem(name));
}

export const removeLocalStorageItem = (name) => {
  localStorage.removeItem(name)
}
