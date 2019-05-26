// Sidebar Tree
var liChildrenTrigger = document.getElementsByClassName("has-children");

for (var i = 0; i < liChildrenTrigger.length; i++) {
  liChildrenTrigger[i].addEventListener("click", function() {
    this.classList.toggle("active");
    mpc(this.children[0].children[2].querySelector("i")).toggleClass(
      "la-chevron-right",
      "la-chevron-down"
    );
  });
}
