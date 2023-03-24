// const checkCookie = (cname) => {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     // }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   // return "";
//   window.location.href = "/login.html";
// };

// let deposit_amount = document.querySelector("#amount");
// let payment_method = document.querySelector("#payment-method");
// // let currency = document.querySelector("#currency");
// let wallet_address = document.querySelector("#wallet-address");
// let submit = document.querySelector("#submit");
// let nb = document.querySelector("#nb");
// let copied_to_clipboard = false;

// const show_ap_text = (payment_method) => {
//   console.log(payment_method);
//   switch (payment_method) {
//     case "Bitcoin":
//       document.querySelector(
//         "#deposit-tag",
//       ).innerHTML = `send ${currency.value}${deposit_amount.value} worth of Bitcoin to this wallet address:<b> btc</b>`;

//       wallet_address.innerHTML = "btc";
//       nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Bitcoin to this wallet address:<b> btc</b>  and get a screenshot/evidence of payment and then click i have made payment`;

//       nb.style.color = "green";
//       alert(
//         `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
//       );

//       break;

//     case "Ethereum":
//       document.querySelector(
//         "#deposit-tag",
//       ).innerHTML = `send ${currency.value}${deposit_amount.value} worth of Ethereum to this wallet address:<b> ethereum</b>`;

//       wallet_address.innerHTML = "eth";
//       nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Ethereum to this wallet address:<b> eth </b> and click i have made payment`;

//       nb.style.color = "green";
//       alert(
//         `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
//       );

//       break;

//     case "USDT":
//       document.querySelector(
//         "#deposit-tag",
//       ).innerHTML = `send ${currency.value}${deposit_amount.value} worth of USDT to this wallet address:<b> usdt</b>`;

//       wallet_address.innerHTML = "Usdt";
//       nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Bitcoin to this wallet address:<b> usdt </b> and click i have made payment`;

//       nb.style.color = "green";
//       alert(
//         `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
//       );
//       break;

//   //   case "Paypal":
//   //     document.querySelector(
//   //       "#deposit-tag",
//   //     ).innerHTML = `send ${currency.value}${deposit_amount.value} to this Paypal Email: <b> Paypa</b>`;

//   //     wallet_address.innerHTML = "paypal";
//   //     nb.innerHTML = `NB: send ${currency.value}${deposit_amount.value} to this Paypal Email:<b>paypal </b> and click i have made payment with screenshot/evidence of payment`;

//   //     nb.style.color = "green";
//   //     alert(
//   //       `Please copy the Email and make payment to it, when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
//   //     );
//   //     break;

//   //   case "Perfect Money":
//   //     document.querySelector(
//   //       "#deposit-tag",
//   //     ).innerHTML = `send ${currency.value}${deposit_amount.value} to this Perfect Money ID : <b> Perfect money</b>`;

//   //     wallet_address.innerHTML = "perfect";
//   //     nb.innerHTML = `NB: send ${currency.value}${deposit_amount.value}  to this Perfect Money ID :<b>perfect </b> and click i have made payment with screenshot/evidence of payment`;

//   //     nb.style.color = "green";
//   //     alert(
//   //       `Please copy payment ID and make payment the get a screenshot/evidence of payment before you click i have made payment`,
//   //     );
//   //     break;

//   //   default:
//   //     document.querySelector(
//   //       "#deposit-tag",
//   //     ).innerHTML = `Please copy and make payment to the wallet address, ID or Email that would be shown when you select a payment method before clicking i have made payment`;

//   //     wallet_address.innerHTML = "perfect";
//   //     nb.innerHTML = `Please copy and make payment to the wallet address, ID or Email that would be shown when you select a payment method before clicking i have made payment`;

//   //     nb.style.color = "green";
//   //     alert(
//   //       `Please copy and make payment to the wallet address, ID or Email that would be shown when you select a payment method before clicking i have made payment`,
//   //     );
//   //     break;
//   // }
//   // if (payment_method.value == "Ethereum") {
//   //   document.querySelector(
//   //     "#deposit-tag"

//   //   ).innerHTML = `send ${currency.value}${deposit_amount.value} worth of ethereum to this wallet address:<b> 0x903A4bEad66883Be827c33c46FdA20E84bc68dcc</b>`;
//   //   wallet_address.innerHTML = "0x903A4bEad66883Be827c33c46FdA20E84bc68dcc";
//   //   nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Ethereum to this wallet address:<b> 0x903A4bEad66883Be827c33c46FdA20E84bc68dcc</b> and click i have made payment`;

//   //   nb.style.color = "green";
//   //   // alert(
//   //   //   `please copy wallet and make payment before you click i have made payment`
//   //   // );
//   // } else {
//   //   document.querySelector(
//   //     "#deposit-tag"
//   //   ).innerHTML = `send ${currency.value}${deposit_amount.value} worth of Bitcon to this wallet address:<b> 12Q91w1RggiKr2aSCWzUhuxNzopHe1S3K4</b>`;

//   //   wallet_address.innerHTML = "12Q91w1RggiKr2aSCWzUhuxNzopHe1S3K4";
//   //   nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Bitcon to this wallet address:<b>12Q91w1RggiKr2aSCWzUhuxNzopHe1S3K4</b> and click i have made payment`;

//   //   nb.style.color = "green";
//   //   // alert(
//   //   //   `please copy wallet and make payment before you click i have made payment`
//   //   // );
//   // }
// };

// const show_input_error = (input) => {
//   input.style.border = "2px solid red";
// };
// const hide_input_error = (input) => {
//   input.style.border = "2px solid #fff";
// };

// deposit_amount.onkeyup = () => {
//   hide_input_error(deposit_amount);
//   if (!deposit_amount.value) return;
//   if (!currency.value) return;
//   if (!payment_method.value) return;
//   show_ap_text(payment_method.value);

//   // wallet_address.innerHTML = "investkey";
// };
// currency.onchange = () => {
//   hide_input_error(currency);
//   if (!currency.value) return;
//   if (!deposit_amount.value) return;
//   if (!payment_method.value) return;
//   wallet_address.innerHTML = "currency.key";
//   show_ap_text(payment_method.value);
// };

// payment_method.onchange = () => {
//   hide_input_error(payment_method);
//   if (!payment_method.value) return;
//   if (!deposit_amount.value) return;
//   if (!currency.value) return;
//   wallet_address.innerHTML = "p_method key";
//   show_ap_text(payment_method.value);
// };

// document.querySelector("#copy-to-clipboard").onclick = () => copyToClipboard();

// function copyToClipboard() {
//   var copyText = wallet_address.innerHTML;
//   navigator.clipboard.writeText(copyText).then(() => {
//     // Alert the user that the action took place.
//     // Nobody likes hidden stuff being done under the hood!
//     if (copyText.length < 1) return;
//     alert("Copied wallet to clipboard");
//     copied_to_clipboard = true;
//   });
// }

// const handle_submit_deposit_01 = async (form) => {
//   try {
//     document.querySelector("#submit").innerHTML = "proccessing...";
//     const response = await fetch(
//       "https://softjovial-backend.glitch.me/api/user/create_deposit",
//       {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(form),
//       },
//     );
//     const result = await response.json();
//     console.log(result);
//     if (result.error) {
//       document.querySelector(".errMessage").innerHTML = result.errMessage;
//       document.querySelector("#submit").innerHTML = "try again";
//       return;
//     }
//     document.querySelector("#submit").innerHTML = "success";
//     window.location.href = `submit-receipt.html?${result.message}`;
//   } catch (err) {
//     document.querySelector(".errMessage").innerHTML = err.message;
//     document.querySelector("#submit").innerHTML = "try again";
//   }
// };

// document.querySelector("#submit").onclick = () => {
//   if (!deposit_amount.value) return show_input_error(deposit_amount);
//   if (parseInt(deposit_amount.value) < 100) {
//     document.querySelector(".errMessage").innerHTML =
//       "deposit amount must not be lesser than minimum deposit of $100 USD";
//     show_input_error(deposit_amount);
//     return;
//   }
//   if (!payment_method.value) return show_input_error(payment_method);

//   if (!currency.value) return show_input_error(currency);
//   nb.style.color = "#525f7f";
//   handle_submit_deposit_01({
//     token: checkCookie("token"),
//     user: checkCookie("user"),
//     deposit_amount: deposit_amount.value,
//     payment_method: payment_method.value,
//     currency: currency.value,
//   });
//   // if (copied_to_clipboard != true)
//   //   return alert(
//   //     "Please click on copy wallet button to copy wallet and make payment before clicking i have made payment"
//   //   );
// };

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

let deposit_amount = document.querySelector("#amount");
let payment_method = document.querySelector("#payment-method");
let currency = document.querySelector("#currency");
let wallet_address = document.querySelector("#wallet-address");
let submit = document.querySelector("#submit");
// let nb = document.querySelector("#nb");
let copied_to_clipboard = false;

//

const show_input_error = (input) => {
  input.style.border = "2px solid red";
};
const hide_input_error = (input) => {
  input.style.border = "2px solid #fff";
};

// deposit_amount.onkeyup = () => {
//   hide_input_error(deposit_amount);
//   if (!deposit_amount.value) return;
//   if (!currency.value) return;
//   if (!payment_method.value) return;
//   show_ap_text(payment_method.value);

//   // wallet_address.innerHTML = "investkey";
// };
// currency.onchange = () => {
//   hide_input_error(currency);
//   if (!currency.value) return;
//   if (!deposit_amount.value) return;
//   if (!payment_method.value) return;
//   wallet_address.innerHTML = "currency.key";
//   show_ap_text(payment_method.value);
// };

// payment_method.onchange = () => {
//   hide_input_error(payment_method);
//   if (!payment_method.value) return;
//   if (!deposit_amount.value) return;
//   if (!currency.value) return;
//   wallet_address.innerHTML = "p_method key";
//   show_ap_text(payment_method.value);
// };

// document.querySelector("#copy-to-clipboard").onclick = () => copyToClipboard();

// function copyToClipboard() {
//   var copyText = wallet_address.innerHTML;
//   navigator.clipboard.writeText(copyText).then(() => {
//     // Alert the user that the action took place.
//     // Nobody likes hidden stuff being done under the hood!
//     if (copyText.length < 1) return;
//     alert("Copied wallet to clipboard");
//     copied_to_clipboard = true;
//   });
// }

document.querySelectorAll("select").forEach((select) => {
  select.onchange = () => (select.style.border = "2px solid #eee");
});

document.querySelectorAll("input").forEach((input) => {
  input.onchange = () => {
    input.style.border = "2px solid #eee";
  };
});

const handle_submit_deposit = async (form) => {
  try {
    document.querySelector("#submit").innerHTML = "proccessing...";
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/create_deposit",
      // "http://localhost:5000/api/user/create_deposit",

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
    window.location.href = `payment.html?${result.message}`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

document.querySelector("#submit").onclick = () => {
  if (!deposit_amount.value) return show_input_error(deposit_amount);
  if (parseInt(deposit_amount.value) < 1) {
    document.querySelector(".errMessage").innerHTML =
      "deposit amount must not be lesser than minimum deposit of $1 ";
    show_input_error(deposit_amount);
    return;
  }
  if (!payment_method.value) return show_input_error(payment_method);

  if (!currency.value) return show_input_error(currency);
  // nb.style.color = "#525f7f";
  handle_submit_deposit({
    token: checkCookie("token"),
    user: checkCookie("user"),
    deposit_amount: deposit_amount.value,
    payment_method: payment_method.value,
    currency: currency.value,
  });
};
