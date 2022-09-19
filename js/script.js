let navabar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navabar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navabar.classList.remove("active");
  searchForm.classList.remove("active");
};
let searchForm = document.querySelector(".search-from");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navabar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navabar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
