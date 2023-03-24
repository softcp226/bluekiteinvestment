const getParam = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};

document.querySelectorAll("a").forEach((button) => {
  button.onclick = () => {
    event.preventDefault();
    if (getParam())return window.location.href = `${button.href}?${getParam() || ""}`;
    window.location.href = `${button.href}`;
  };
});
