setTimeout(() => {
  showModal(0.5, "block");
}, 5000);

function showModal(op, dis) {
  modalSelection([1], 0);
  document.querySelector(".bg_layer").style.opacity = op;
  document.querySelector(".modal").style.display = dis;
}

function swapLanguage(event) {
  let modalHeaderMenu = document.querySelectorAll(".modal-header nav li");
  let modalHeaderTitle = document.querySelector(".modal-header > p");

  if (event.innerHTML == "EN") {
    document.querySelector(".modal-ru").style.display = "none";
    document.querySelector(".modal-en").style.display = "block";
    event.innerHTML = "RU";

    modalHeaderTitle.innerHTML = "Basic Information";
    modalHeaderMenu[0].innerHTML = "Home";
    modalHeaderMenu[1].innerHTML = "Information";
    modalHeaderMenu[2].innerHTML = "Copyrigth";
    return;
  }
  if (event.innerHTML == "RU") {
    document.querySelector(".modal-en").style.display = "none";
    document.querySelector(".modal-ru").style.display = "block";
    event.innerHTML = "EN";

    modalHeaderTitle.innerHTML = "Основная информация";
    modalHeaderMenu[0].innerHTML = "Главная";
    modalHeaderMenu[1].innerHTML = "Информация";
    modalHeaderMenu[2].innerHTML = "Автор. право";
    return;
  }
}

function modalSelection(arrayB, num) {
  let modalRu = document.querySelector(".modal-ru").childNodes;
  let modalEn = document.querySelector(".modal-en").childNodes;
  let activeButtonInModal = document.querySelectorAll(".modal-header nav li");

  [1, 3, 5, 10, 12].forEach((item, index) => {
    modalRu[item].style.display = "none";
    modalEn[item].style.display = "none";

    if (index >= 2) {
      activeButtonInModal[index - 2].classList.remove("modal-header_active");
    }
  });

  arrayB.forEach((item) => {
    modalRu[item].style.display = "block";
    modalEn[item].style.display = "block";

    if (item == 12) {
      modalRu[item].style.display = "flex";
      modalEn[item].style.display = "flex";
    }
  });

  activeButtonInModal[num].classList.add("modal-header_active");
}
