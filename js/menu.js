(() => {
  const refs = {
    openMenuBtn: document.querySelector(".is-open"),
    closeMenuBtn: document.querySelector(".header-mob-close"),
    menu: document.querySelector(".header-mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
