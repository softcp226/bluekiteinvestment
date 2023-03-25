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

const handle_delete_deposit_request = async (btn, deposit_id) => {
  btn.innerHTML = "Proccessing...";
  let token = getCookie("admin_token");
  let admin = getCookie("admin");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/deposit_request/delete",
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, admin, deposit_request: deposit_id }),
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
      window.location.href = "/vip/admin/user_deposits.html";
    }
  } catch (err) {
    btn.innerHTML = "Try again";
    console.log(err);
    alert(err.message);
  }
};

const createAndAppendElement = (element) => {
  const section = document.createElement("section");
  const depositor = document.createElement("h4");
  const currency = document.createElement("h4");
  const amount = document.createElement("h4");
  const proof_evidence = document.createElement("h4");
  const approve = document.createElement("button");
  const del = document.createElement("button");
  depositor.innerHTML = element.user
    ? `${element.user.email} || ${element.user.phone_number}`
    : "";
  currency.innerHTML = element.currency;
  amount.innerHTML = `$${element.deposit_amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  proof_evidence.innerHTML = element.transaction_hash;
  // proof_evidence.onclick = () => window.location.replace(element.proof);
  // proof_evidence.href = element.proof || "/admin/user_deposits.html";
  // proof_evidence.className = "btn btn-secondary";
  approve.innerHTML = "Appprove Deposit";
  approve.className = "btn btn-primary";
  del.innerHTML = "Delete deposit";
  del.className = "btn btn-danger";
  del.onclick = () => handle_delete_deposit_request(del, element._id);
  approve.onclick = () =>
    (window.location.href = `/vip/admin/approve_deposit.html?${element._id}`);
  // const E_M = document.createElement("h4");
  // const final_balance = document.createElement("h4");
  // const P_L = document.createElement("h4");
  // const AI = document.createElement("h4");
  // const RF = document.createElement("h4");
  // const CCBTN = document.createElement("button");
  // const DCBTN = document.createElement("button");
  // E_M.innerHTML = `${element.email} || ${element.phone_number}`;
  // final_balance.innerHTML = `$${element.final_balance
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  // P_L.innerHTML = `$${element.profit_loss
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  // AI.innerHTML = `$${element.active_investment
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  // RF.innerHTML = `$${element.referral_bonus
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  // CCBTN.innerHTML = "CREDIT USER";
  // DCBTN.innerHTML = "DELETE USER";
  // CCBTN.className = "btn btn-primary";
  // DCBTN.className = "btn btn-danger";
  // CCBTN.onclick = () =>
  //   (window.location.href = `/admin/fund-user.html?${element._id}`);

  // DCBTN.onclick = () => handle_delete_user(event, element._id);

  section.append(depositor, currency, amount, proof_evidence, approve, del);
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
      "https://softjovial-org-backend.glitch.me/api/admin/deposit_request",
      // "http://localhost:5000/api/admin/deposit_request",

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
