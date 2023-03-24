const log_user_out = () => {
  document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "is_active=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  window.location.href = "/login.html";
};

document.querySelectorAll("#logout").forEach((button) => {
  button.onclick = () => {
    event.preventDefault();
    log_user_out();
  };
});
