/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  const shouldThrottle = false;
  return function (...args) {
    if (shouldThrottle) {
      return;
    }
    func.apply(this, args);
    shouldThrottle = true;
    setTimeout(() => {
      shouldThrottle = false;
    }, wait);
  };
}
