
amount.onkeyup = () => handle_keychange();
currency.onchange = () => handle_keychange();
return_time.onchange = () => handle_keychange();

const handle_submit_request = async (form) => {
  const token = getCookie("token");
  const user = getCookie("user");
  document.querySelector("#submit").innerHTML = "proccesing...";
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/create_investment",
      // "http://localhost:5000/api/user/create_investment",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          token,
          user,
          investment_amount: form.amount,
          currency: form.currency,
          return_time: form.return_time,
          profit: form.profit,
        }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

// const handle_button_request = () => {
//   switch (plan.value) {
//     case "Basic Plan":
//       if (!amount.value) return;
//       if (!return_time.value) return;
//       if (parseInt(amount.value) < 100) return show_err();
//       disable_show_err();
//       if (return_time.value == "daily_return") {
//         var percentage = "daily Percentage: 5%";
//         var earning = `My Profit: $${Math.round((amount.value / 100) * 5)}`;
//         profit = Math.round((amount.value / 100) * 5);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       } else {
//         var percentage = "Weekly Percentage: 105%";
//         var earning = `My Profit: $${Math.round((amount.value / 100) * 5 * 7)}`;
//         profit = Math.round((amount.value / 100) * 5 * 7);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       }

//     case "Premium Plan":
//       if (!amount.value) return;
//       if (!return_time.value) return;
//       if (parseInt(amount.value) < 1000) return show_err();
//       disable_show_err();
//       if (return_time.value == "daily_return") {
//         var percentage = "daily Percentage: 20%";
//         var earning = `My Profit: $${Math.round((amount.value / 100) * 20)}`;
//         profit = Math.round((amount.value / 100) * 20);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       } else {
//         var percentage = "Weekly Percentage: 175%";
//         var earning = `My Profit: $${Math.round(
//           (amount.value / 100) * 20 * 7,
//         )}`;
//         profit = Math.round((amount.value / 100) * 20 * 7);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       }

//     case "Standard Plan":
//       if (!amount.value) return;
//       if (!return_time.value) return;
//       if (parseInt(amount.value) < 3000) return show_err();
//       disable_show_err();
//       if (return_time.value == "daily_return") {
//         var percentage = "daily Percentage: 30%";
//         var earning = `My Profit: $${Math.round((amount.value / 100) * 30)}`;
//         profit = Math.round((amount.value / 100) * 30);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       } else {
//         var percentage = "Weekly Percentage: 210%";
//         var earning = `My Profit: $${Math.round(
//           (amount.value / 100) * 30 * 7,
//         )}`;
//         profit = Math.round((amount.value / 100) * 30 * 7);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       }

//     case "Enterprise Plan":
//       if (!amount.value) return;
//       if (!return_time.value) return;
//       if (parseInt(amount.value) < 6000) return show_err();

//       disable_show_err();
//       if (return_time.value == "daily_return") {
//         var percentage = "daily Percentage: 35%";
//         var earning = `My Profit: $${Math.round((amount.value / 100) * 35)}`;
//         profit = Math.round((amount.value / 100) * 35);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       } else {
//         var percentage = "Weekly Percentage: 245%";
//         var earning = `My Profit: $${Math.round(
//           (amount.value / 100) * 35 * 7,
//         )}`;
//         profit = Math.round((amount.value / 100) * 35 * 7);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       }

//     case "Ultimate Plan":
//       if (!amount.value) return;
//       if (!return_time.value) return;
//       if (parseInt(amount.value) < 9000) return show_err();

//       disable_show_err();
//       if (return_time.value == "daily_return") {
//         var percentage = "daily Percentage: 40%";
//         var earning = `My Profit: $${Math.round((amount.value / 100) * 40)}`;
//         profit = Math.round((amount.value / 100) * 40);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       } else {
//         var percentage = "Weekly Percentage: 280%";
//         var earning = `My Profit: $${Math.round(
//           (amount.value / 100) * 40 * 7,
//         )}`;
//         profit = Math.round((amount.value / 100) * 40 * 7);
//         write_percentage(percentage, earning);
//         handle_submit_request({
//           profit,
//           plan: plan.value,
//           amount: amount.value,
//         });
//         break;
//       }

//     default:
//       handle_keychange();
//       break;
//   }
// };


document.querySelector("#submit").onclick = () => {
if (!amount.value) return display_error(amount);
hide_error(amount);
if (!currency.value) return display_error(currency);
hide_error(currency);
if (!return_time.value) return display_error(return_time);
hide_error(return_time);
 
  handle_request();
  // let investment_amount = document.querySelector("#amount");
  // let plan = document.querySelector("#plan");

  // if (!investment_amount.value)
  //   return (investment_amount.style.border = "2px solid red");
  // if (!plan.value) return (plan.style.border = "2px solid red");
  // handle_button_request();
};

