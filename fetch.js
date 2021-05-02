const AbortController = require("abort-controller");
const fetch = require("node-fetch");

module.exports = async (url, options, timeout, message) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;

    let timeoutId = setTimeout(function () {
      console.log(message);
      controller.abort();
    }, timeout);

    fetch(url, { ...options, signal }).then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
};
