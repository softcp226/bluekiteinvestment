amount.onkeyup = () => handle_keychange();
plan.onchange = () => handle_keychange();

const handle_submit_request = async (form) => {
  const token = getCookie("token");
  const user = getCookie("user");
  document.querySelector("#submit").innerHTML = "proccesing...";
  try {
    const response = await fetch(
      // "http://localhost:5000/api/user/create_investment",
      "https://bluekiteinvestment-backend.glitch.me/api/user/create_investment",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          token,
          user,
          investment_plan: form.plan,
          investment_amount: form.amount,
          completion_time: form.completion_time,
          // return_time: return_time.value,
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

const handle_button_request = () => {
  switch (plan.value) {
    case "Basic Plan":
      if (!amount.value) return;
      if (!plan.value) return;
      if (parseInt(amount.value) < 100) return show_err();
      disable_show_err();
      // if (return_time.value == "daily_return") {
      var percentage = "10% return after 24 hours";
      var earning = `Expected Earning: $${Math.round(
        (amount.value / 100) * 10,
      )}`;
      profit = Math.round((amount.value / 100) * 10);
      write_percentage(percentage, earning);
      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "24 hours",
      });
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
      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "24 hours",
      });
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
      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "24 hours",
      });
      break;

    default:
      handle_keychange();
      break;
  }
};


document.querySelector("#submit").onclick = () => {
  let investment_amount = document.querySelector("#amount");
  let plan = document.querySelector("#plan");

  if (!investment_amount.value)
    return (investment_amount.style.border = "2px solid red");
  if (!plan.value) return (plan.style.border = "2px solid red");
  handle_button_request();
};


