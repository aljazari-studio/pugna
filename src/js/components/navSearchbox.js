// Navigation Searchbox
var searchboxNav = document.querySelector(".header-item-searchbox");
var searchbox = searchboxNav
  ? searchboxNav.firstElementChild.children[0]
  : null;
var searchboxTrigger = searchboxNav ? searchboxNav.children[1] : null;

if (searchboxTrigger) {
  searchboxTrigger.addEventListener("click", function() {
    searchboxNav.classList.toggle("active");

    if (!searchbox.classList.contains("show")) {
      mpc(searchbox).switchClass("hide", "show");
    } else {
      mpc(searchbox).switchClass("show", "hide");
    }
  });
}
