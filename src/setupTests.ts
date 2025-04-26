// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { ThemeProvider } from './components/Theme/ThemeContext';

if (typeof global.queueMicrotask === 'undefined') {
  global.queueMicrotask = function (cb) {
    return Promise.resolve()
      .then(cb)
      .catch((err) =>
        setTimeout(() => {
          throw err;
        })
      );
  };
} 