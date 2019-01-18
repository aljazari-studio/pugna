/**
 * Manipulate class of element
 * with forward direction
 * @param {node} element
 * @param {string} from is a default/start selector
 * @param {string} to as target
 */
function ManipulateClass(element) {
  this.element = element;

  this.switchClass = function(from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  };

  this.toggleClass = function(from, to) {
    element.classList.toggle(from);
    element.classList.toggle(to);
  };

  this.toggleChildClass = function(from, to) {
    element.firstElementChild.classList.toggle(from);
    element.firstElementChild.classList.toggle(to);
  };

  this.showAlert = function() {
    alert("ea");
  };

  return this;
}

var mpc = function(element) {
  return new ManipulateClass(element);
};

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

// Chatbox
var chatbox = document.querySelector(".chatbox");
if (chatbox) {
  var chatboxTrigger = document.querySelector(".trigger-chatbox");

  var chatboxFile = document.querySelector(".chat-form input[type=file]");
  var chatboxFileTrigger = document.querySelector(".chat-form .btn-attach");

  if (chatbox.classList.contains("show")) {
    mpc(chatboxTrigger).toggleChildClass("la-times", "la-comments");
  }

  chatboxTrigger.addEventListener("click", function() {
    mpc(chatboxTrigger).toggleChildClass("la-comments", "la-times");

    if (!chatbox.classList.contains("show")) {
      mpc(chatbox).switchClass("hide", "show");
    } else if (chatbox.classList.contains("show")) {
      mpc(chatbox).switchClass("show", "hide");

      setTimeout(function() {
        chatbox.classList.remove("hide");
      }, 1000);
    }
  });

  chatboxFileTrigger.addEventListener("click", function() {
    chatboxFile.click();
  });
}

// Dropdown
var dropdownTrigger = document.getElementsByClassName("trigger-dropdown");

for (var i = 0; i < dropdownTrigger.length; i++) {
  var currentTrigger = dropdownTrigger[i];
  var dropdownItems = currentTrigger.nextElementSibling.querySelectorAll("li");

  var dropdownBoxBody = currentTrigger.nextElementSibling.querySelector(
    ".dropdown-body"
  );
  if (dropdownBoxBody) {
    dropdownBoxItems = dropdownBoxBody.querySelectorAll("a");
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

// Form
(function HoldLabelFloat() {
  var fromLabelFloat = document.getElementsByClassName("label--floating");

  for (var i = 0; i < fromLabelFloat.length; i++) {
    let input = fromLabelFloat[i].querySelector("input");
    let label = fromLabelFloat[i].querySelector("label");
    let span = fromLabelFloat[i].querySelector("span");

    label.addEventListener("click", function() {
      this.previousSibling.focus();
    });

    input.addEventListener("focus", function() {
      this.nextElementSibling.classList.add("float");

      if (span) {
        span.style.borderColor = "#B5D43C";
      }
    });

    input.addEventListener("blur", function() {
      if (this.value === "") {
        let that = this;
        mpc(this.nextElementSibling).toggleClass("float", "default");

        if (span) {
          span.style.borderColor = "rgba(67, 71, 56, 0.2)";
        }

        setTimeout(function() {
          that.nextElementSibling.classList.remove("default");
        }, 500);
      }
    });

    if (span) {
      span.addEventListener("click", function() {
        if (input.type == "password") {
          span.firstElementChild.style.color = "#B5D43C";
          input.type = "text";
        } else {
          span.firstElementChild.style.color = "rgba(67, 71, 56, 0.6)";
          input.type = "password";
        }
      });

      input.addEventListener("focusout", function() {
        span.style.borderColor = "rgba(67, 71, 56, 0.2)";
      });
    }
  }
})();
