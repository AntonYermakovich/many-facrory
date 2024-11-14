// Tabs
const casesBtn = document.querySelectorAll(".cases__btn button");
const casesItems = document.querySelectorAll(".cases__item");
let activeCase = 0;
casesBtn.forEach((btn) => btn.addEventListener("click", changeCases));

function changeCases() {
  casesBtn.forEach((btn) => btn.classList.remove("btn_active"));
  casesItems[activeCase].classList.remove("cases__item_active");

  activeCase = this.dataset.id;
  this.classList.add("btn_active");
  casesItems[activeCase].classList.add("cases__item_active");
}

// Slider
const optionsSlider = {
  type: "loop",
  drag: "free",
  perPage: 5,
  pagination: false,
  arrows: false,
  padding: "50px",
  gap: 50,
  autoScroll: {
    speed: 1,
  },
  breakpoints: {
    1200: {
      perPage: 3,
    },

    768: {
      perPage: 1,
      padding: "80px",
    },
  },
};
new Splide("#image-carousel", optionsSlider).mount(window.splide.Extensions);
