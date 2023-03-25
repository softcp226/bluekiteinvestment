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

const handle_delete_user = async (event, user_id) => {
  event.target.innerHTML = "Proccessing...";
  let token = getCookie("admin_token");
  let admin = getCookie("admin");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/admin/users/delete_user",
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, admin, user: user_id }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      event.target.innerHTML = "Try again";
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      alert(result.errMessage);
    } else {
      alert(result.message);
      event.target.innerHTML = "Success";
      window.location.href = "/vip/admin/dashboard.html";
    }
  } catch (err) {
    event.target.innerHTML = "Try again";
    console.log(err);
    alert(err.message);
  }
};

const createAndAppendElement = (element) => {
  const section = document.createElement("section");
  const E_M = document.createElement("h4");
  const final_balance = document.createElement("h4");
  const P_L = document.createElement("h4");
  const AI = document.createElement("h4");
  const RF = document.createElement("h4");
  const CCBTN = document.createElement("button");
  const DCBTN = document.createElement("button");
  const RIBTN = document.createElement("button");
  E_M.innerHTML = `${element.email} || ${element.phone_number}`;
  final_balance.innerHTML = `$${element.final_balance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  P_L.innerHTML = `$${element.profit_loss
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  AI.innerHTML = `$${element.active_investment
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  RF.innerHTML = `$${element.referral_bonus
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  CCBTN.innerHTML = "CREDIT USER";
  DCBTN.innerHTML = "DELETE USER";
  RIBTN.innerHTML = "RAISE INVESTMENT";

  CCBTN.className = "btn btn-primary";
  DCBTN.className = "btn btn-danger";
  RIBTN.className = "btn btn-primary";

  CCBTN.onclick = () =>
    (window.location.href = `/vip/admin/fund-user.html?${element._id}`);

  DCBTN.onclick = () => handle_delete_user(event, element._id);

  RIBTN.onclick = () =>
    (window.location.href = `/vip/admin/raise-investment.html?${element._id}`);

  section.append(E_M, final_balance, P_L, AI, RF, CCBTN, DCBTN,RIBTN);
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
      "https://softjovial-org-backend.glitch.me/api/admin/fetch_users",
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

// window.location