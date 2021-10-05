let headerSearch = document.querySelector(".header__search");
let searchEngine = document.querySelector(".header__search-engine");
searchEngine.style.display = "none";

headerSearch.addEventListener("click", function () {
  if (searchEngine.style.display == "none") {
    searchEngine.style.display = "flex";
  } else {
    searchEngine.style.display = "none";
  }
});
