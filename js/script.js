const searchEl = document.querySelector(".search-box");
const searchMobile = document.querySelector(".search-mobile");
const bodyEl = document.body;

searchEl.addEventListener("click", function () {
  bodyEl.classList.toggle("search-open");
});

searchMobile.addEventListener("click", function () {
  bodyEl.classList.toggle("search-open");
});
