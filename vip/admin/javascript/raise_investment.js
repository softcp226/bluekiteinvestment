const getParam = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  // return "";
  window.location.replace("/vip/admin");
}

const handle_raise_investment = async (form) => {
  document.querySelector("#submit").innerHTML = "processing...";
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/user/investment_min/raise",
      //   "http://localhost:5000/api/admin/user/investment_min/raise",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "Try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = "/vip/admin/dashboard.html";
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "Try again";
    console.log(err);
  }
};

document.querySelector("#submit").onclick = () => {
  const investment_min = document.querySelector("#investment_min");

  if (!investment_min.value)
    return (investment_min.style.border = "2px solid red");
  //   if (!profit_loss.value) return (profit_loss.style.border = "2px solid red");
  //   if (!active_investment.value)
  //     return (active_investment.style.border = "2px solid red");
  //   if (!referral_bonus.value)
  //     return (referral_bonus.style.border = "2px solid red");

  const admin = getCookie("admin");
  const token = getCookie("admin_token");

  handle_raise_investment({
    admin: admin,
    token: token,
    user: getParam(),
    min_investment: investment_min.value,
    // profit_loss: profit_loss.value,
    // active_investment: active_investment.value,
    // referral_bonus: referral_bonus.value,
  });
};
document.querySelectorAll("input").forEach((input) => {
  input.onkeyup = () => {
    input.style.border = "2px solid #fff";
  };
});
