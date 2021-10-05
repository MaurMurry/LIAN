window.onload = () => {
  let preloader = document.querySelector(".preloader");
  let aboutFix = document.querySelectorAll(".digits-progress");

  aboutFix.forEach((item) => {
    item.style.display = "flex";
  });

  window.scroll(0, 0);
  preloader.style.display = "none";
};
