// Form Floating Label
var formLabelFloat = document.getElementsByClassName("label--floating");

for (var i = 0; i < formLabelFloat.length; i++) {
  let input = formLabelFloat[i].querySelector("input");
  let label = formLabelFloat[i].querySelector("label");
  let span = formLabelFloat[i].querySelector("span");

  label.addEventListener("click", function() {
    this.previousSibling.focus();
  });

  setTimeout(function() {
    if (input.value) {
      label.classList.add("float");
    }
  }, 100);

  input.addEventListener("focus", function() {
    label.classList.add("float");
  });

  input.addEventListener("blur", function() {
    if (this.value === "") {
      let that = this;
      mpc(this.nextElementSibling).toggleClass("float", "default");

      setTimeout(function() {
        that.nextElementSibling.classList.remove("default");
      }, 500);
    }
  });

  passwordToggle();

  function passwordToggle() {
    if (span) {
      span.addEventListener("click", function() {
        if (input.type == "password") {
          mpc(span).toggleChildClass("fa-eye", "fa-eye-slash");
          span.firstElementChild.style.color = colorScheme.primary;
          input.type = "text";
        } else {
          mpc(span).toggleChildClass("fa-eye-slash", "fa-eye");
          span.firstElementChild.style.color = hexToRgbA(colorScheme.dark, 0.6);
          input.type = "password";
        }
      });
    }
  }
}
