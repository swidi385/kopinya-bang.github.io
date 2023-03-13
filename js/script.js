// toggle claass active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menutup hamburger menu
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove("active");
});
