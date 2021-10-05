function filter(arrayPosition, activeButtonMenu = 0) {
  let img = document.querySelectorAll(".content__flexbox-for-content img");
  let flexboxForContent = document.querySelector(
    ".content__flexbox-for-content"
  );

  activedButtonForMenu(activeButtonMenu);

  if (arrayPosition == true) {
    if (window.screen.availWidth >= 1178) {
      flexboxForContent.style.height = "1294px";
    } else {
      flexboxForContent.style.height = "1700px";
    }

    img.forEach((item, index) => {
      img[index].style.display = "block";
    });
    return;
  } else {
    flexboxForContent.style.height = "740px";

    img.forEach((item) => {
      item.style.display = "none";
    });
    arrayPosition.forEach((item) => {
      img[item].style.display = "block";
    });
  }
}

function activedButtonForMenu(num) {
  let buttonMenu = document.querySelectorAll(".content__menu-ul li");

  buttonMenu.forEach((item) => {
    item.classList.remove("content__menu-item_active");
  });
  buttonMenu[num].classList.add("content__menu-item_active");
}
