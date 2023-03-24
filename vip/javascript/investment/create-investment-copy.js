const write_percentage = (percentage, earning) => {
  document.querySelector("#percentage").innerHTML = percentage;
  document.querySelector("#earning").innerHTML = earning;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Trading amount can not be less than $25";
};
const disable_show_err = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
};

function generate_percentage() {
  return Math.random() * (12 - 8.5) + 8.5;
}

let profit;

// handle_keychange;

const handle_request = () => {
  if (!amount.value) return;
  if (!currency.value) return;
  if (!return_time.value) return;
  switch (return_time.value) {
    case "daily_return":
      if (parseInt(amount.value) < 25) return show_err();
      disable_show_err();
      profit = Math.round(amount.value / 100 * generate_percentage());
      handle_submit_request({
        profit,
        return_time: return_time.value,
        currency: currency.value,
        amount: amount.value,
      });
      break;

    case "4_days_return":
      if (parseInt(amount.value) < 25) return show_err();
      disable_show_err();
      profit = Math.round(amount.value / 100 * (generate_percentage()*4));
      handle_submit_request({
        profit,
        return_time: return_time.value,
        currency: currency.value,
        amount: amount.value,
      });
      break;

    case "weekly_return":
      if (parseInt(amount.value) < 25) return show_err();
      disable_show_err();
      profit = Math.round(amount.value / 100 * (generate_percentage() *7));
      handle_submit_request({
        profit,
        return_time: return_time.value,
        currency: currency.value,
        amount: amount.value,
      });
      break;

    default:
      break;
  }
  // switch (return_time.value) {
  //   case "Basic return_time":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 100) return show_err();
  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 5%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 5
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 5);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 105%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 5 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 5 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Premium return_time":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 1000) return show_err();
  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 20%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 20
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 20);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 175%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 20 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 20 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Standard return_time":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 3000) return show_err();
  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 30%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 30
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 30);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 210%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 30 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 30 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Enterprise return_time":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 6000) return show_err();

  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 35%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 35
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 35);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 245%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 35 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 35 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   case "Ultimate return_time":
  //     if (!amount.value) return;
  //     if (!return_time.value) return;
  //     if (parseInt(amount.value) < 9000) return show_err();

  //     disable_show_err();
  //     if (return_time.value == "daily_return") {
  //       var percentage = "daily Percentage: 40%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 40
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 40);
  //       write_percentage(percentage, earning);
  //       break;
  //     } else {
  //       var percentage = "Weekly Percentage: 280%";
  //       var earning = `My Profit: $${Math.round(
  //         (amount.value / 100) * 40 * 7
  //       )}`;
  //       profit = Math.round((amount.value / 100) * 40 * 7);
  //       write_percentage(percentage, earning);
  //       break;
  //     }

  //   default:
  //     handle_keychange();
  //     break;
  // }
};

const handle_keychange = () => {
  if (!amount.value) return display_error(amount);
  hide_error(amount);
  if (!currency.value) return display_error(currency);
  hide_error(currency);
  if (!return_time.value) return display_error(return_time);
  hide_error(return_time);
};
