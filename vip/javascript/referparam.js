const getReferParam = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};

document.querySelectorAll("a").forEach((a) => {
  a.onclick = () => {
    // alert(a.href);
    if (a.href.includes("register.html") || a.href.includes("login.html")) {
      event.preventDefault();
      let ref = getReferParam() || "";
      window.location.href = `${a.href}?${ref}`;
    }
    //
  };
});
