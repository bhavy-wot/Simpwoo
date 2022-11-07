const hm_icon = document.querySelector(".fa-bars");
const nav_links = document.querySelector(".navbarInner");

console.log(nav_links);

hm_icon.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});