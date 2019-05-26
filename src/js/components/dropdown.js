// Dropdown
var dropdownTrigger = document.getElementsByClassName("trigger-dropdown");

for (var i = 0; i < dropdownTrigger.length; i++) {
  var currentTrigger = dropdownTrigger[i];
  var dropdownItems = currentTrigger.nextElementSibling.querySelectorAll("li");

  var dropdownBoxBody = currentTrigger.nextElementSibling.querySelector(
    ".dropdown-body"
  );
  if (dropdownBoxBody) {
    var dropdownBoxItems = dropdownBoxBody.querySelectorAll("a");
  }

  currentTrigger.addEventListener("click", function() {
    this.firstElementChild.classList.toggle("active");

    let siblingDisplay = getComputedStyle(this.nextElementSibling, null)
      .display;
    this.nextElementSibling.style.display =
      siblingDisplay == "block" ? "none" : "block";
  });

  for (let di = 0; di < dropdownItems.length; di++) {
    dropdownItems[di].addEventListener("click", function() {
      let dropdownBox = this.closest(".dropdown-box");
      let trigger = dropdownBox.parentElement.querySelector(
        ".trigger-dropdown"
      );
      trigger.firstElementChild.classList.remove("active");

      dropdownBox.style.display = "none";
    });
  }

  for (let dbi = 0; dbi < dropdownBoxItems.length; dbi++) {
    dropdownBoxItems[dbi].addEventListener("click", function() {
      let dropdownBox = this.closest(".dropdown-box");
      let trigger = dropdownBox.parentElement.querySelector(
        ".trigger-dropdown"
      );
      trigger.firstElementChild.classList.remove("active");

      dropdownBox.style.display = "none";
    });
  }
}
