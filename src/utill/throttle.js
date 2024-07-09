export const throttle = (cb, delay) => {
  let timer;

  return (...args) => {
    if (timer) return;
    cb(...args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
};
