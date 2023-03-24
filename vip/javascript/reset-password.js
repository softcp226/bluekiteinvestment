const getParam = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};

(() => {
  const reset_token = getParam();
  if (!reset_token) return (window.location.href = "/login.html");
})();

const change_password = async (user_form) => {
  document.querySelector("#submit").innerHTML = "proccessing...";
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/password/reset",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user_form),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "Try again";
      return;
    } else {
      document.querySelector("#submit").innerHTML = "Success";
      window.location.href = "/login.html";
    }
  } catch (err) {
    // console.log(err);
    document.querySelector("#submit").innerHTML = "Try again";
    document.querySelector(".errMessage").innerHTML = err.message;
  }
};

document.querySelector("#submit").onclick = () => {
  event.preventDefault();
  let password_01 = document.querySelector("#password_01");
  let password_02 = document.querySelector("#password_02");
  password_01.style.border = "2px solid #fff";
  password_02.style.border = "2px solid #fff";
  if (!password_01.value) return (password_01.style.border = "2px solid red");
  if (!password_02.value) return (password_02.style.border = "2px solid red");
  if (password_01.value.length < 8) {
    password_01.style.border = "2px solid red";
    document.querySelector(".errMessage").innerHTML =
      "password must be atleast 8 characters long";
    return;
  }

  if (password_01.value != password_02.value) {
    password_01.style.border = "2px solid red";
    password_02.style.border = "2px solid red";
    document.querySelector(".errMessage").innerHTML = "password mmust match";
    return;
  }
  //   let new_pwd = document.querySelector("#new_pwd");
  //   let confirm_new_pwd = document.querySelector("#confirm_new_pwd");
  //   let new_pin = document.querySelector("#new_pin");
  //   let confirm_new_pin = document.querySelector("#confirm_new_pin");

  //   if (!new_pwd.value) return (new_pwd.style.border = "1.5px solid red");
  //   if (!confirm_new_pwd.value)
  //     return (confirm_new_pwd.style.border = "1.5px solid red");
  //   if (new_pwd.value != confirm_new_pwd.value)
  //     return (document.querySelector(".pwd_error").innerHTML =
  //       "password must match");
  //   if (new_pwd.value.length < 8)
  //     return (document.querySelector(".pwd_error").innerHTML =
  //       "password must be atleast 8 characters long");

  //   if (!new_pin.value) return (new_pin.style.border = "1.5px solid red");
  //   if (!confirm_new_pin.value)
  //     return (confirm_new_pin.style.border = "1.5px solid red");
  //   if (new_pin.value != confirm_new_pin.value)
  //     return (document.querySelector(".pin_error").innerHTML = "pin must match");
  //   if (new_pin.value.length < 4)
  //     return (document.querySelector(".pin_error").innerHTML =
  //       "pin must be atleast 4 characters long");
  //   if (!+new_pin.value)
  //     return (document.querySelector(".pin_error").innerHTML =
  //       "pin must be a number");
  change_password({
    reset_token: getParam(),
    password: password_01.value,
  });
  //   if (!message.value) return (message.style.border = "1.5px solid red");
  //   submit_message({ token, user, message: message.value });
  // };
  // document.querySelector("#message").onkeyup = () => {
  //   document.querySelector("#message").style.border = "1.5px solid #fff";
};

document.querySelectorAll("input").forEach(
  (input) =>
    (input.onchange = () => {
      input.style.border = "2px solid #fff";
      document.querySelector(".errMessage").innerHTML = "";
      document.querySelector(".errMessage").innerHTML = "";
    })
);
