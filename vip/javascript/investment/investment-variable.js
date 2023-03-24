let amount = document.querySelector("#amount");
let currency = document.querySelector("#fiat_currency");
let return_time = document.querySelector("#return_time");
// let percentage = document.querySelector("#percentage");
// let earning = document.querySelector("#earning");

hide_error = (element) => {
  element.style.border = "2px solid #fff";
};

const display_error = (element) => {
  element.style.border = "2px solid red";
};
