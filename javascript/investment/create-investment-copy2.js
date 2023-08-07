const write_percentage = (percentage, earning) => {
  document.querySelector(
    "#percentage",
  ).innerHTML = `Expected Return :${earning}`;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Investment amount can not be lesser than minimum investment for the plan selected";
};
const disable_show_err = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
};
let profit;

const handle_request = () => {
  switch (plan.value) {
    case "Basic Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 100) return show_err();
      disable_show_err();
      var percentage = "10% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 10,
      )}`;
      profit = Math.round((amount.value / 100) * 10);
      write_percentage(percentage, earning);

      break;

    case "Premium Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 5000) return show_err();
      disable_show_err();
      // if (plan.value == "daily_return") {
      var percentage = "15% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 15,
      )}`;
      profit = Math.round((amount.value / 100) * 15);
      write_percentage(percentage, earning);

      break;

    case "Diamond Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 7000) return show_err();
      disable_show_err();
      // if (return_time.value == "daily_return") {
      var percentage = "25% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 25,
      )}`;
      profit = Math.round((amount.value / 100) * 25);
      write_percentage(percentage, earning);

      break;

    default:
      handle_keychange();
      break;
  }
};

const handle_keychange = () => {
  if (!amount.value) return display_error(amount);
  hide_error(amount);
  if (!plan.value) return display_error(plan);
  hide_error(plan);
  
  handle_request();
};

