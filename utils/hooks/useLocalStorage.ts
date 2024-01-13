import { useState } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key);
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed defaultValue
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {}
  });

  const setValue = (value: T) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {}
  };

  return [state, setValue];
};
