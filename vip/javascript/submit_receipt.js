const getParam = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};

const get_user = (cname) => {
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
const submit_receipt = async (form) => {
  document.querySelector("#submit").innerHTML = "processing...";
  try {
    const response = await fetch(
      // "http://localhost:5000/api/user/deposit/complete",

      "https://softjovial-org-backend.glitch.me/api/user/deposit/complete",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
        // body: form,
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
    window.location.href = "/action/loading.html";
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "Try again";
    console.log(err);
  }
};

document.querySelector("#submit").onclick = () => {
  const transaction_hash = document.querySelector("#transaction_hash");
  if (!transaction_hash.value)
    return (transaction_hash.style.border = "2px solid red");
  transaction_hash.style.border = "2px solid #fff";
  const user = get_user("user");
  const token = get_user("token");
  const deposit_request_id = getParam();
  // const formdata = new FormData();
  // formdata.append("token", token);
  // formdata.append("user", user);
  // formdata.append("receipt", receipt.files[0]);
  // formdata.append("deposit_request_id", deposit_request_id);
  submit_receipt({
    user,
    token,
    transaction_hash: transaction_hash.value,
    deposit_request_id,
  });
};
