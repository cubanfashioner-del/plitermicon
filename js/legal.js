(() => {
  const year = document.querySelector("#current-year");
  const themeButton = document.querySelector("#theme-toggle");
  const themeLabel = document.querySelector("#theme-toggle-label");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  year.textContent = String(new Date().getFullYear());

  const setTheme = (theme, savePreference = false) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute("aria-label", `Cambiar a modo ${isDark ? "claro" : "oscuro"}`);
    themeLabel.textContent = isDark ? "Claro" : "Oscuro";
    themeColor.content = isDark ? "#0b0f0e" : "#f8f9fa";

    if (savePreference) {
      try {
        localStorage.setItem("cft-theme", theme);
      } catch (error) {
        console.warn("No se pudo guardar la preferencia de tema.", error);
      }
    }
  };

  setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme, true);
  });
})();
