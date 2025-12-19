const STORAGE_KEY = 'state';

export const loadFromLocalStorage = <T>(): T | undefined => {
  try {
    const state = localStorage.getItem(STORAGE_KEY);
    if (!state) return undefined;

    return JSON.parse(state);
  } catch (e) {
    console.warn(e);

    return undefined;
  }
};

export const saveToLocalStorage = <T>(state: T): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn(e);
  }
};
