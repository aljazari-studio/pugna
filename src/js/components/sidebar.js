// Sidebar
var sidebar = document.querySelector(".sidebar");
var sidebarTrigger = document.querySelectorAll(".sidebar-control");

for (let st = 0; st < sidebarTrigger.length; st++) {
  sidebarTrigger[st].addEventListener("click", function() {
    if (window.innerWidth > 575.98) {
      if (sidebar.classList.contains("collapsed")) {
        mpc(sidebar).switchClass("collapsed", "expanded");

        setTimeout(function() {
          sidebar.classList.remove("expanded");
        }, 1000);
      } else {
        mpc(sidebar).switchClass("expanded", "collapsed");
      }
    } else {
      if (sidebar.classList.contains("expanded")) {
        mpc(sidebar).switchClass("expanded", "collapsed");

        setTimeout(function() {
          sidebar.classList.remove("collapsed");
        }, 1000);
      } else {
        mpc(sidebar).switchClass("collapsed", "expanded");
      }
    }
  });
}

var listMenu = sidebar ? sidebar.querySelector(".list-menu") : null;

if (listMenu) {
  listMenu.addEventListener("mouseenter", function() {
    this.classList.add("hovered");
  });
  listMenu.addEventListener("mouseleave", function() {
    this.classList.remove("hovered");
  });
}
