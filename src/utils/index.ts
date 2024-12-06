export const getAllKeys = (obj: object): string[] => {
  return Object.keys(obj);
};

export const setCookie = (name: string, value: string, days = 7): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};