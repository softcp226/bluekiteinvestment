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

  let TDH4 = document.createElement("h4");
  let REFH4 = document.createElement("h4");
  let AMTH4 = document.createElement("h4");
  let RTH4 = document.createElement("h4");
  let EPH4 = document.createElement("h4");
  EPH4.id = "percentage_view";
  // let IVP = document.createElement("h4");
  // let PT_LS = document.createElement("h4");

  let AN = document.createElement("h4");

  TDH4.innerHTML = element.transaction_date;
  REFH4.innerHTML = element.refrence_number;
  AMTH4.innerHTML = `$${element.amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0`;
  RTH4.innerHTML =element.return_time;
  // IVP.innerHTML = element.investment_plan;
  // PT_LS.innerHTML = `$${element.pending_profit
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0`;

  // PT_LS.style.color = element.show_loss ? "red" : "green";
  EPH4.innerHTML = `$${element.pending_profit.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0`;;
    EPH4.style.color="green"
  AN.innerHTML = "Cancel";
  AN.className = "status-fail";
  AN.onclick = () => handle_cancel_investment(AN, element._id);
  //   IVP.innerHTML = element.investment_plan;
  //   PT_LS.innerHTML = "+$3.30";
  //()=>{
  //       if(element.loss > 0){

  //       }else{

  //       }
  //   }

  //   DBH4.innerHTML = element.debit || "";
  //   CDH4.innerHTML = element.credit || "";
  //   SSH4.innerHTML = element.status;

  //   element.status == "failed"
  //     ? (SSH4.className = "status-fail")
  //     : element.status == "pending"
  //     ? (SSH4.className = "status-pending")
  //     : (SSH4.className = "status-success");
  section.append(TDH4, REFH4, AMTH4, RTH4, EPH4, AN);
  document.querySelector(".history-table").append(section);

  // set_percentage();
};

const shape_result = (investments) => {
  investments.map((investment) => createAndAppendElement(investment));
};

(async () => {
  let token = getCookie("token");
  let user = getCookie("user");
  try {
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/investments/fetch",
      // "http://localhost:5000/api/user/investments/fetch",

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
