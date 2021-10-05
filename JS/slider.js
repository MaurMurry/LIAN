let _positionSlider = 1;

(function startSlider() {
  sliderOne(1);
})();

setInterval(function () {
  sliderCounter(1);
}, 11000);

function sliderOne(slPosition) {
  let slider = document.querySelector(".slider-wrrapper");
  let sliderWrapperTitleUp = document.querySelector(
    ".slider-wrapper__title-up"
  );
  let sliderWrapperTitleDown = document.querySelector(
    ".slider-wrapper__title-down"
  );
  let dots = document.querySelectorAll(".dots__item");

  let imgSlider = ["433009291", "353200073", "353200033"];
  let textTitleSlider = [
    "DESIGN & BRANDING",
    "LIAN CREATIVE AGENCY",
    "CUSTOMER SERVICE",
  ];
  let textForSlider = [
    "WE DELIVER QUALITY RESULTS",
    "MINIMAL FREELANCE PORTFOLIO",
    "AN INDIVIDUAL APPROACH TO EACH CLIENT",
  ];

  slider.style.backgroundImage =
    "url('IMG/forSlider/shutterstock_" + imgSlider[slPosition] + ".png')";
  sliderWrapperTitleUp.innerHTML = textTitleSlider[slPosition];
  sliderWrapperTitleDown.innerHTML = textForSlider[slPosition];

  dots.forEach((item, index) => {
    item.className = "dots__item";
    dots[slPosition].className = "dots__item dots__item_active";
  });
}

function sliderCounter(counter) {
  _positionSlider += counter;
  if (_positionSlider >= 0 && _positionSlider <= 2) {
    sliderOne(_positionSlider);
  } else {
    if (_positionSlider <= -1) {
      _positionSlider = 2;
      sliderOne(_positionSlider);
    } else {
      _positionSlider = 0;
      sliderOne(_positionSlider);
    }
  }
}

function dotsPress(num) {
  _positionSlider = num;
  sliderOne(num);
}
