const checkCookie = (cname) => {
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
  window.location.href = "/login.html";
};

const handle_withdrawal = async (form) => {
  try {
    document.querySelector("#submit").innerHTML = "proccessing...";
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/withdraw",
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
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html?${result.message}`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

document.querySelector("#submit").onclick = () => {
  let withdrawal_amount = document.querySelector("#amount");
  let withdrawal_method = document.querySelector("#withdrawal-method");
  let wallet = document.querySelector("#wallet");

  if (!withdrawal_amount.value)
    return (withdrawal_amount.style.border = "2px solid red");
  if (!withdrawal_method.value)
    return (withdrawal_method.style.border = "2px solid red");
  if (!wallet.value) return (wallet.style.border = "2px solid red");
  handle_withdrawal({
    token: checkCookie("token"),
    user: checkCookie("user"),
    withdrawal_amount: withdrawal_amount.value,
    withdrawal_method: withdrawal_method.value,
    wallet: wallet.value,
  });
};

document.querySelectorAll("input").forEach((input) => {
  input.onkeyup = () => {
    input.style.border = "2px solid #fff";
    document.querySelector(".errMessage").innerHTML = "";
  };
});

document.querySelectorAll("select").forEach((select) => {
  select.onchange = () => {
    select.style.border = "2px solid #fff";
  };
});
