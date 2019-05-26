// Dismissible Alert
var alertsDismissible = document.getElementsByClassName(
  "alert alert--dismissible"
);

for (var ad = 0; ad < alertsDismissible.length; ad++) {
  alertsDismissible[ad]
    .querySelector(".alert-dismiss")
    .addEventListener("click", function() {
      this.parentNode.remove();
    });
}
