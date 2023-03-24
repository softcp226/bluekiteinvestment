var color = "red";
let prev_percentage;
let new_percentage;

// const setColor = () => {
//   // const percentage_view = document.querySelector("#percentage_view").innerHTML;
//   // color = "red";
//   // prev_percentage = parseInt(percentage_view);
//   // new_percentage = parseInt(percentage_view);
//   // if(new_percentage ==prev_percentage){
//   // }else{
//   // }
//   // color = "red";

//   if (color == "red") {
//     color = "green";
//   } else {
//     color = "red";
//   }

//   document.querySelector("#percentage_view").style.color = color;
// };
// function generate_percentage() {
//   return Math.random() * (12 - 1) + 1;
// }

let handle_cancel_investment = async (button, investment) => {
  try {
    button.innerHTML = "proccessing...";
    const response = await fetch(
      // "http://localhost:5000/api/user/investment/cancel",

      "https://softjovial-org-backend.glitch.me/api/user/investment/cancel",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          token: getCookie("token"),
          user: getCookie("user"),
          investment: investment,
        }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      alert(result.errMessage);
      button.innerHTML = "try again";
      return;
    }
    button.innerHTML = "success";
    window.location.href = "/my-investment.html";
  } catch (err) {
    alert(err.message);
    button.innerHTML = "try again";
  }
};

// const set_percentage = () => {
//   setInterval(() => {
//     document.querySelector("#percentage_view").innerHTML =
//       generate_percentage();
//     setColor();
//   }, 1000);
// };

const createAndAppendElement = (element) => {
  console.log(element);
  const section = document.createElement("section");
  section.className = "table-list-credit";

  let FNH4 = document.createElement("h4");
  let LNH4 = document.createElement("h4");
  let FDH4 = document.createElement("h4");
//   let RTH4 = document.createElement("h4");
//   let EPH4 = document.createElement("h4");
//   EPH4.id = "percentage_view";
  // let IVP = document.createElement("h4");
  // let PT_LS = document.createElement("h4");

//   let AN = document.createElement("h4");

//   TDH4.innerHTML = element.transaction_date;
//   REFH4.innerHTML = element.refrence_number;
FNH4.innerHTML = element.first_name;
LNH4.innerHTML=element.last_name
  FDH4.innerHTML = `$${element.first_deposit
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0` || "0";
 
 
  section.append(FNH4,LNH4,FDH4);
  document.querySelector(".history-table").append(section);

  // set_percentage();
};

const shape_result = (referrals) => {
  referrals.map((referral) => createAndAppendElement(referral));
};

(async () => {
  let token = getCookie("token");
  let user = getCookie("user");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/referral/fetch",
      // "http://localhost:5000/api/user/referral/fetch",

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
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
  }
})();
