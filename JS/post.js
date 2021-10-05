let showAll = document.querySelector(".post__button_showall");
let post = document.querySelectorAll(".post");
let postMainImg = document.querySelectorAll(".full");
let arrayImgClass = [".a", ".b", ".c", ".d"];
let works = document.querySelector(".works");
let counter = 0;

openLinks(-1, true);
nextPost(0);
showAll.addEventListener("click", showAllPosts);

function showAllPosts() {
  let buttonsShare = document.querySelectorAll(".share");

  post.forEach((item, index) => {
    document.querySelectorAll(".post__text p")[index].style.paddingBottom =
      "20px";
    document.querySelectorAll(".post__img")[index].style.height = "420px";

    buttonsShare[index].style.display = "flex";
    item.style.display = "flex";
    item.style.paddingBottom = "40px";
    postMainImg[index].style.backgroundImage =
      "url('IMG/Portfolio/post" + (index + 1) + "F.png')";

    arrayImgClass.forEach((item) => {
      document.querySelectorAll(item)[index].style.display = "none";
    });
  });

  buttonsShare[4].style.display = "none";
  works.style.marginTop = "-100px";

  window.scrollTo({
    top: 550,
    behavior: "smooth",
  });

  setTimeout(() => {
    buttonSwitch(false);
  }, 300);
}

function hideAllPosts() {
  let buttonsShare = document.querySelectorAll(".share");

  document.querySelector(".a").style.backgroundBlendMode = "darken";

  post.forEach((item, index) => {
    if (window.screen.availWidth > 1045) {
      document.querySelectorAll(".post__text p")[index].style.paddingBottom =
        "100px";
    }

    buttonsShare[index].style.display = "none";
    document.querySelectorAll(".post__img")[index].style.height = "480px";

    arrayImgClass.forEach((item) => {
      document.querySelectorAll(item)[index].style.display = "block";
    });

    if (index != 0) {
      item.style.display = "none";
      item.style.paddingBottom = "0px";
    }
  });

  buttonsShare[4].style.display = "flex";
  postMainImg[0].style.backgroundImage = "url('IMG/Portfolio/post1F.png')";
  works.style.marginTop = "0px";
  buttonSwitch(true);
}

function nextPost(count) {
  if (counter + count < 0 || counter + count > 3) {
    return;
  } else {
    counter += count;
  }

  arrayImgClass.forEach((item) => {
    document.querySelector(item).style.backgroundBlendMode = "normal";
  });

  document.querySelectorAll(arrayImgClass[counter])[
    counter
  ].style.backgroundBlendMode = "darken";

  postMainImg[counter].style.backgroundImage =
    "url('IMG/Portfolio/post" + (counter + 1) + "F.png')";

  post.forEach((item) => {
    item.style.display = "none";
  });

  post[counter].style.display = "flex";
}

function buttonSwitch(flag) {
  let next = document.querySelector(".post__button_next");
  let prev = document.querySelector(".post__button_prev");

  if (flag === false) {
    next.style.display = "none";
    prev.style.display = "none";
    showAll.innerHTML = '<i class="fas fa-bars"></i> HIDE ALL';
    showAll.removeEventListener("click", showAllPosts);
    showAll.addEventListener("click", hideAllPosts);
  }
  if (flag === true) {
    next.style.display = "block";
    prev.style.display = "block";
    showAll.innerHTML = '<i class="fas fa-bars"></i> SHOW ALL';
    counter = 0;
    showAll.removeEventListener("click", hideAllPosts);
    showAll.addEventListener("click", showAllPosts);
  }
}

function chosenPost(num) {
  counter = num;
  nextPost(0);
}

function openLinks(id, flag = false) {
  let links = document.querySelectorAll(".share__link");

  if (flag === true) {
    links.forEach((item) => {
      item.style.display = "none";
    });
    return;
  }

  if (links[id].style.display == "none") {
    links[id].style.display = "flex";
  } else {
    links[id].style.display = "none";
  }
}
