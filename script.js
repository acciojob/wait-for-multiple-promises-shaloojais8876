//your JS code here. If required.
const promises = [];
const table = document.querySelector('table');

function createPromise() {
  return new Promise(resolve => {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
}

for (let i = 0; i < 3; i++) {
  promises.push(createPromise());
}

Promise.all(promises)
  .then(results => {
    const totalTime = results.reduce((acc, time) => acc + time, 0);

    table.innerHTML = `
      <tr>
        <td>Promise 1</td>
        <td>${results[0]}</td>
      </tr>
      <tr>
        <td>Promise 2</td>
        <td>${results[1]}</td>
      </tr>
      <tr>
        <td>Promise 3</td>
        <td>${results[2]}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
      </tr>
    `;
  });

