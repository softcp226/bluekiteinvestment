const fetch_recover_password = async (email) => {
  //   let token = getCookie("token");
  //   let user = getCookie("user");
  document.querySelector("#submit").innerHTML = "Proccessing...";
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/password/forgotten",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "Try Again";
      return;
    }
    document.querySelector("#submit").innerHTML = "Success";
    window.location.href = "/success.html";
    // setText(result.message);
  } catch (err) {
    document.querySelector("#submit").innerHTML = "Try Again";
    document.querySelector(".errMessage").innerHTML = err.message;
  }
};

document.querySelector("#submit").onclick = () => {
  event.preventDefault();
  let email = document.querySelector("#email");
  if (!email.value) return (email.style.border = "2px solid red");
  fetch_recover_password(email.value);
};
document.querySelector("input").onkeyup = () => {
  document.querySelector("input").style.border = "2px solid #fff";
};
