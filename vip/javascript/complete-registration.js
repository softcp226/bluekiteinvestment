function setCookie(user, token) {
    // alert("called")
    console.log(user);
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    // document.cookie=`email=${email} ; ${expires}`
    document.cookie = `user=${user} ; ${expires}`;
    document.cookie = `token=${token} ; ${expires}`;
    // let navigate;
    // const params = new URLSearchParams(window.location.search);
    // for (const param of params) {
    //   navigate = param[0];
    // }
    // if (navigate) return window.location.replace(navigate);
   window.location.replace("/dashboard.html")
  }

// function setCookie_01(user, token) {
//   // alert("called")
//   console.log(user);
//   const d = new Date();
//   d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   // document.cookie=`email=${email} ; ${expires}`
//   document.cookie = `user=${user} ; ${expires}`;
//   document.cookie = `token_01=${token} ; ${expires}`;
//   let navigate;
//   const params = new URLSearchParams(window.location.search);
//   for (const param of params) {
//     navigate = param[0];
//   }
//   if (navigate) return window.location.replace(navigate);
// }

const loginUser = async (email, password) => {
  try {
    document.querySelector("#login").innerHTML = "proccessing...";
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/user/login",
      // "http://localhost:5000/api/user/login",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#login").innerHTML = "try again";
      return;
    }
    document.querySelector("#login").innerHTML = "success";
    setCookie( result.message.user, result.token);
    window.location.replace("/dashboard.html");
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#login").innerHTML = "try again";
  }
};

const complete_registration = async (userInfo) => {
  try {
    document.querySelector("#register").innerHTML = "proccessing...";
    const response = await fetch(
      "https://softjovial-org-backend.glitch.me/api/new_user/complete_registration",
      // "http://localhost:5000/api/new_user/complete_registration",

      {
        method: "POST",
        //   headers: { "content-type": "application/json" },
        body: userInfo,
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errmessage2").innerHTML = result.errMessage;
      document.querySelector("#register").innerHTML = "try again";
      return;
    }
    document.querySelector("#register").innerHTML = "success";
    return setCookie(result.message.user, result.token);
  } catch (err) {
    
      document.querySelector(".errmessage2").innerHTML = err.message;
    document.querySelector("#register").innerHTML = "try again";
  err.message == "Unexpected token < in JSON at position 0"
    ? (document.querySelector(".errmessage2").innerHTML =
        "Please make sure what you are trying to submit is an image and try again")
    : (document.querySelector(".errmessage2").innerHTML = err.message);

  
  }
};
//response gotten

// loginUser("email@gmail.com","password")

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//           c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//           return c.substring(name.length, c.length);
//       }
//   }
//   return "";
// }

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#login").onclick = () => {
    event.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    if (!email.value)
      return (document.querySelector(".errMessage").innerHTML =
        "Email is required");
    if (!password.value)
      return (document.querySelector(".errMessage").innerHTML =
        "Password is required");
    if (password.value.length < 8)
      return (document.querySelector(".errMessage").innerHTML =
        "Password must be greater than 8 characters");

    document.querySelector(".errMessage").innerHTML = "";

    loginUser(email.value, password.value);
  };




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

let user = getCookie("user");
let token_01 = getCookie("token_01");


  document.querySelector("#register").onclick = () => {
    let errorColor = "2px solid red";
    event.preventDefault();
    const first_name = document.querySelector("#first_name");
    const last_name = document.querySelector("#last_name");
    let passport = document.querySelector("#passport");
    let password = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    if (!first_name.value) return (first_name.style.border = errorColor);
    if (!last_name.value) return (last_name.style.border = errorColor);
    if (!passport.files[0]) return (passport.style.border = errorColor);
    if (!password.value) return (password.style.border = errorColor);
    if (!password2.value) return (password2.style.border = errorColor);
    if (password.value != password2.value)
      return (document.querySelector("#pwd_error").innerHTML =
        "password must match");
    if (password.value.length < 8)
      return (document.querySelector("#pwd_error").innerHTML =
        "Password must be greater than 8 characters");
    

    const formdata = new FormData();
    formdata.append("user", user);
    formdata.append("token_01", token_01);
    formdata.append("first_name", first_name.value);
    formdata.append("last_name", last_name.value);
    formdata.append("passport", passport.files[0]);
    formdata.append("password", password.value);
    complete_registration(formdata);
  };

  document.querySelectorAll("input").forEach((input) => {
    document.querySelector(".errmessage2").innerHTML = "";
    input.onchange = () => (input.style.border = "0.1px solid #fff");
  });
  //   document.querySelector("select").onchange = () =>
  //     (document.querySelector("select").style.border = "0.1px solid #fff");
  // });

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("login");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  // signInButton.addEventListener("click", () => {
  //   container.classList.remove("right-panel-active");
  // });

  // document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector(".ghost").onclick = () =>
    container.classList.remove("right-panel-active");
});
