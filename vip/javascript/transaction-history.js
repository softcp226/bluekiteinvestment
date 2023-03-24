// const getCookie = (cname) => {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   // return "";
//   window.location.href = "/login.html";
// };

const createAndAppendElement = (element) => {
  console.log(element);
  const section = document.createElement("section");
  section.className = "table-list-credit";

  //   const tr_dH4 = document.createElement("h4");
  // const ltH4 = document.createElement("h4");
  //   let refH4 = document.createElement("h4");
  //   let srH4 = document.createElement("h4");
  //   let dnH4 = document.createElement("h4");
  //   let dtH4 = document.createElement("h4");
  //   let ctH4 = document.createElement("h4");
  //   let SSH4 = document.createElement("h4");
  let TDH4 = document.createElement("h4");
  let REFH4 = document.createElement("h4");
  let DBH4 = document.createElement("h4");
  let CDH4 = document.createElement("h4");
  let SSH4 = document.createElement("h4");

  TDH4.innerHTML = element.transaction_date;
  REFH4.innerHTML = element.refrence_number;
  DBH4.innerHTML = element.debit || "";
  CDH4.innerHTML = element.credit || "";
  SSH4.innerHTML = element.status;

  element.status == "failed"
    ? (SSH4.className = "status-fail")
    : element.status == "pending"
    ? (SSH4.className = "status-pending")
    : (SSH4.className = "status-success");
  section.append(TDH4, REFH4, DBH4, CDH4, SSH4);
  document.querySelector(".history-table").append(section);
};

const shape_result = (userInfo) => {
  userInfo.map((info) => createAndAppendElement(info));
  // const section = createElement("section");
  // section.className = "table-list-credit";
  // let h41 = createElement("h4");
};

(async () => {
  let token = getCookie("token");
  let user = getCookie("user");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/transactions/fetch",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, user }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error)
      return (document.querySelector(".errMessage").innerHTML =
        result.errMessage);
    shape_result(result.message);
    document.querySelector(
      "#balance"
    ).innerHTML = `**Available Balance= $${result.user_balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}**`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
  }
})();
