(() => {
  const year = document.querySelector("#current-year");

  year.textContent = String(new Date().getFullYear());
})();
