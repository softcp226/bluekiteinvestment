// const setCookie = (token, admin) => {
//   const d = new Date();
//   d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = `token=${token} ; ${expires}`;
//   document.cookie = `admin=${admin} ; ${expires}`;
//   window.location.replace("/admin/dashboard.html");
// };

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

//

const handle_cancel_investment = async (btn, investment) => {
  btn.innerHTML = "Proccessing...";
  let token = getCookie("admin_token");
  let admin = getCookie("admin");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/investment/cancel",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, admin, investment }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      btn.innerHTML = "Try again";
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      alert(result.errMessage);
    } else {
      alert(result.message);
      btn.innerHTML = "Success";
      window.location.href = "/vip/admin/investment.html";
    }
  } catch (err) {
    btn.innerHTML = "Try again";
    console.log(err);
    alert(err.message);
  }
};

const createAndAppendElement = (element) => {
  const section = document.createElement("section");

  //   proof_evidence.innerHTML = "View Proof/evidence";
  //   // proof_evidence.onclick = () => window.location.replace(element.proof);
  //   proof_evidence.href = element.proof || "/admin/user_deposits.html";
  //   proof_evidence.className = "btn btn-secondary";
  //   approve.innerHTML = "Appprove Deposit";
  //   approve.className = "btn btn-primary";
  //   del.innerHTML = "Delete deposit";
  //   del.className = "btn btn-danger";
  //   del.onclick = () => handle_delete_deposit_request(del, element._id);
  //   approve.onclick = () =>
  //     (window.location.href = `/admin/approve_deposit.html?${element._id}`);
  const date = document.createElement("h4");
  const investor = document.createElement("h4");
  const return_time = document.createElement("h4");
  let amount = document.createElement("h4");
  const profit = document.createElement("h4");
  const loss = document.createElement("h4");
  const update_btn = document.createElement("button");
  let cancel_btn = document.createElement("button");
  date.innerHTML = element.transaction_date;
  investor.innerHTML = element.user
    ? `${element.user.email} || ${element.user.phone_number}`
    : "not found";
  return_time.innerHTML = element.return_time;
  amount.innerHTML = `$${element.amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0`;
  profit.innerHTML = `$${element.profit
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0`;
  loss.innerHTML = `$${element.loss
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0`;
  update_btn.innerHTML = "UPDATE INV";

  update_btn.className = "btn btn-primary m-2";
  update_btn.onclick = () =>
    (window.location.href = `/vip/admin/update_investment.html?${element._id}`);
  cancel_btn.innerHTML = "CANCEL";
  cancel_btn.className = "btn btn-danger m-2";
  cancel_btn.onclick = () => handle_cancel_investment(cancel_btn, element._id);
  section.append(
    date,
    investor,
    return_time,
    amount,
    profit,
    loss,
    update_btn,
    cancel_btn
  );
  document.querySelector(".history-table").append(section);
};
const setText = (userInfo) => {
  userInfo.map((info) => createAndAppendElement(info));
};

(async () => {
  let token = getCookie("admin_token");
  let admin = getCookie("admin");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/investment/fetch",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, admin }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error)
      return (document.querySelector(".errMessage").innerHTML =
        result.errMessage);

    setText(result.message);
  } catch (err) {
    console.log(err);
    document.querySelector(".errMessage").innerHTML = err.message;
  }
})();
