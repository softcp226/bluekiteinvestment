// let Redirect;
// const params = new URLSearchParams(window.location.search);
// for (const param of params) {
//   Redirect = param[0];
// }

let width = 10;

document.addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelector(".loader");
  loader.style.width = `${width}%`;
  if (width >= 50) return alert("hey");
  let interval = setInterval(() => {
    width++;
    loader.style.width = `${width}%`;

    if (width >= 100) {
      width = 99;
      clearInterval(interval);
      window.location.replace(`/action/success.html`);
    }
  }, 30);
});
