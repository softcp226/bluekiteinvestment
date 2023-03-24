const getCookie = (cname) => {
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

handle_submit_userInfo = async (data) => {
  document.querySelector("#next").innerHTML = "Proccessing...";

  try {
    const response = await fetch(
      // "http://localhost:5000/api/user/user_info/save",
      "https://softjovial-org-backend.glitch.me/api/user/user_info/save",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          token: data.token,
          user: data.user,
          phone_number: data.phone_number,
          address_line: data.address_line,
          zip_code: data.zip_code,
          swift_code: data.swift_code,
          routing_number: data.routing_number,
          bank_name: data.bank_name,
          account_name: data.account_name,
          account_number: data.account_number,
        }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector("#next").innerHTML = "Try again";
      document.querySelector("#errMessage").innerHTML = result.errMessage;
    } else {
      document.querySelector("#next").innerHTML = "Success";
      window.location.href = "/dashboard.html";
    }
  } catch (error) {
    document.querySelector("#next").innerHTML = "Try again";
    document.querySelector("#errMessage").innerHTML = error.message;
  }
};

const show_input_error = (input) => {
  input.style.border = "2px solid red";
};

document.querySelector("#next").onclick = () => {
  const phone_number = document.querySelector("#phone");
  const address_line = document.querySelector("#address_line");
  const zip_code = document.querySelector("#zip_code");
  const swift_code = document.querySelector("#swift_code");
  const routing_number = document.querySelector("#routing_number");
  const bank_name = document.querySelector("#bank_name");
  const account_name = document.querySelector("#account_name");
  const account_number = document.querySelector("#account_number");

  //   if (!phone.value) return show_input_error(phone);
  //   if (!address_line.value) return show_input_error(address_line);
  if (!zip_code.value) return show_input_error(zip_code);
  //   if (!swift_code.value) return show_input_error(swift_code);
  if (!routing_number.value) return show_input_error(routing_number);
  if (!bank_name.value) return show_input_error(bank_name);
  if (!account_name.value) return show_input_error(account_name);
  if (!account_number.value) return show_input_error(account_number);

  handle_submit_userInfo({
    token: getCookie("token"),
    user: getCookie("user"),
    phone_number: phone_number.value || "",
    address_line: address_line.value || "",
    zip_code: zip_code.value,
    swift_code: swift_code.value || "",
    routing_number: routing_number.value,
    bank_name: bank_name.value,
    account_name: account_name.value,
    account_number: account_number.value,
  });
};

document.querySelectorAll("input").forEach((input) => {
  input.onkeyup = () => (input.style.border = "2px solid #000");
});
