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

const submit_deposit_approval = async (form) => {
  document.querySelector("#submit").innerHTML = "processing...";
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/deposit/approve",
      // "http://localhost:5000/api/admin/deposit/approve",

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
  const amount = document.querySelector("#amount");

  if (!amount.value) return (amount.style.border = "2px solid red");
  amount.style.border = "2px solid #fff";
  const admin = getCookie("admin");
  // const admin = getCookie("admin");
  const token = getCookie("admin_token");
  const deposit_request = getParam();
  submit_deposit_approval({
    admin: admin,
    token: token,
    deposit_request,
    deposit_amount: amount.value,
  });
};

(async () => {
  let token = getCookie("admin_token");
  let admin = getCookie("admin");
  const deposit_request = getParam();

  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/deposit_request/single",
      // "http://localhost:5000/api/admin/deposit_request/single",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, admin, deposit_request }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error)
      return (document.querySelector(".errMessage").innerHTML =
        result.errMessage);
    document.querySelector("#amount").value = result.message.deposit_amount;
    // setText(result.message);
  } catch (err) {
    console.log(err);
    document.querySelector(".errMessage").innerHTML = err.message;
  }
})();

// window.location