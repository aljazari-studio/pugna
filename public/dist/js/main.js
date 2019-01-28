"use strict";

// ----- Helpers

/**
 * Manipulate class of element
 * with forward direction
 * @param {node} element
 * @param {string} from is a default/start selector
 * @param {string} to as target
 */
function ManipulateClass(element) {
  this.element = element;

  this.switchClass = function (from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  };

  this.toggleClass = function (from, to) {
    element.classList.toggle(from);
    element.classList.toggle(to);
  };

  this.toggleChildClass = function (from, to) {
    element.firstElementChild.classList.toggle(from);
    element.firstElementChild.classList.toggle(to);
  };

  return this;
}

var mpc = function mpc(element) {
  return new ManipulateClass(element);
}; // Get Global Color Scheme


var colorScheme = {
  primary: getColorScheme("primary"),
  secondary: getColorScheme("secondary"),
  light: getColorScheme("light"),
  dark: getColorScheme("dark")
};

function getColorScheme(color) {
  return window.getComputedStyle(document.documentElement).getPropertyValue("--pg-" + color);
} // Hex to RGBA


function hexToRgbA(hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  hex = hex.trim();
  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");

    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = "0x" + c.join("");
    return "rgba(" + [c >> 16 & 255, c >> 8 & 255, c & 255].join(",") + "," + opacity + ")";
  }

  throw new Error("Bad Hex");
} // ----- Pugna Components
// Navigation Searchbox


var searchboxNav = document.querySelector(".header-item-searchbox");
var searchbox = searchboxNav ? searchboxNav.firstElementChild.children[0] : null;
var searchboxTrigger = searchboxNav ? searchboxNav.children[1] : null;

if (searchboxTrigger) {
  searchboxTrigger.addEventListener("click", function () {
    searchboxNav.classList.toggle("active");

    if (!searchbox.classList.contains("show")) {
      mpc(searchbox).switchClass("hide", "show");
    } else {
      mpc(searchbox).switchClass("show", "hide");
    }
  });
} // Sidebar


var sidebar = document.querySelector(".sidebar");
var sidebarTrigger = document.querySelectorAll(".sidebar-control");

for (var st = 0; st < sidebarTrigger.length; st++) {
  sidebarTrigger[st].addEventListener("click", function () {
    if (window.innerWidth > 575.98) {
      if (sidebar.classList.contains("collapsed")) {
        mpc(sidebar).switchClass("collapsed", "expanded");
        setTimeout(function () {
          sidebar.classList.remove("expanded");
        }, 1000);
      } else {
        mpc(sidebar).switchClass("expanded", "collapsed");
      }
    } else {
      if (sidebar.classList.contains("expanded")) {
        mpc(sidebar).switchClass("expanded", "collapsed");
        setTimeout(function () {
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
  listMenu.addEventListener("mouseenter", function () {
    this.classList.add("hovered");
  });
  listMenu.addEventListener("mouseleave", function () {
    this.classList.remove("hovered");
  });
} // Sidebar Tree


var liChildrenTrigger = document.getElementsByClassName("has-children");

for (var i = 0; i < liChildrenTrigger.length; i++) {
  liChildrenTrigger[i].addEventListener("click", function () {
    this.classList.toggle("active");
    mpc(this.children[0].children[2].querySelector("i")).toggleClass("la-chevron-right", "la-chevron-down");
  });
} // Chatbox


var chatbox = document.querySelector(".chatbox");

if (chatbox) {
  var chatboxTrigger = document.querySelector(".trigger-chatbox");
  var chatboxFile = document.querySelector(".chat-form input[type=file]");
  var chatboxFileTrigger = document.querySelector(".chat-form .btn-attach");

  if (chatbox.classList.contains("show")) {
    mpc(chatboxTrigger).toggleChildClass("la-times", "la-comments");
  }

  chatboxTrigger.addEventListener("click", function () {
    mpc(chatboxTrigger).toggleChildClass("la-comments", "la-times");

    if (!chatbox.classList.contains("show")) {
      mpc(chatbox).switchClass("hide", "show");
    } else if (chatbox.classList.contains("show")) {
      mpc(chatbox).switchClass("show", "hide");
      setTimeout(function () {
        chatbox.classList.remove("hide");
      }, 1000);
    }
  });
  chatboxFileTrigger.addEventListener("click", function () {
    chatboxFile.click();
  });
} // Dropdown


var dropdownTrigger = document.getElementsByClassName("trigger-dropdown");

for (var i = 0; i < dropdownTrigger.length; i++) {
  var currentTrigger = dropdownTrigger[i];
  var dropdownItems = currentTrigger.nextElementSibling.querySelectorAll("li");
  var dropdownBoxBody = currentTrigger.nextElementSibling.querySelector(".dropdown-body");

  if (dropdownBoxBody) {
    var dropdownBoxItems = dropdownBoxBody.querySelectorAll("a");
  }

  currentTrigger.addEventListener("click", function () {
    this.firstElementChild.classList.toggle("active");
    var siblingDisplay = getComputedStyle(this.nextElementSibling, null).display;
    this.nextElementSibling.style.display = siblingDisplay == "block" ? "none" : "block";
  });

  for (var di = 0; di < dropdownItems.length; di++) {
    dropdownItems[di].addEventListener("click", function () {
      var dropdownBox = this.closest(".dropdown-box");
      var trigger = dropdownBox.parentElement.querySelector(".trigger-dropdown");
      trigger.firstElementChild.classList.remove("active");
      dropdownBox.style.display = "none";
    });
  }

  for (var dbi = 0; dbi < dropdownBoxItems.length; dbi++) {
    dropdownBoxItems[dbi].addEventListener("click", function () {
      var dropdownBox = this.closest(".dropdown-box");
      var trigger = dropdownBox.parentElement.querySelector(".trigger-dropdown");
      trigger.firstElementChild.classList.remove("active");
      dropdownBox.style.display = "none";
    });
  }
} // Form Floating Label


var formLabelFloat = document.getElementsByClassName("label--floating");

var _loop = function _loop() {
  var input = formLabelFloat[i].querySelector("input");
  var label = formLabelFloat[i].querySelector("label");
  var span = formLabelFloat[i].querySelector("span");
  label.addEventListener("click", function () {
    this.previousSibling.focus();
  });
  setTimeout(function () {
    if (input.value) {
      label.classList.add("float");
    }
  }, 100);
  input.addEventListener("focus", function () {
    label.classList.add("float");
  });
  input.addEventListener("blur", function () {
    if (this.value === "") {
      var that = this;
      mpc(this.nextElementSibling).toggleClass("float", "default");
      setTimeout(function () {
        that.nextElementSibling.classList.remove("default");
      }, 500);
    }
  });
  passwordToggle();

  function passwordToggle() {
    if (span) {
      span.addEventListener("click", function () {
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
};

for (var i = 0; i < formLabelFloat.length; i++) {
  _loop();
} // Dismissible Alert


var alertsDismissible = document.getElementsByClassName("alert alert--dismissible");

for (var ad = 0; ad < alertsDismissible.length; ad++) {
  alertsDismissible[ad].querySelector(".alert-dismiss").addEventListener("click", function () {
    this.parentNode.remove();
  });
} // Tabs


var tabs = document.getElementsByClassName("tab");
var tabNavItem, tabContent;
tabNavItem = document.getElementsByClassName("tab__nav-item");
tabContent = document.getElementsByClassName("tab__content");
var tabContentLv1 = [],
    tabContentLv2 = [],
    tabNavItemLv2 = [];

for (var ftc = 0; ftc < tabContent.length; ftc++) {
  if (tabContent[ftc].parentElement.parentElement.parentElement.className !== "tab__content") {
    tabContentLv1.push(tabContent[ftc]);
  } else {
    tabContentLv2.push(tabContent[ftc]);
    tabNavItemLv2.push(document.querySelector("[data-tab='#" + tabContent[ftc].id + "']"));
  }
}

for (var tbB = 0; tbB < tabContentLv1.length; tbB++) {
  if (tabNavItem[tbB].classList.contains("active")) {
    tabContentLv1[tbB].style.display = "flex";
  } else {
    tabContentLv1[tbB].style.display = "none";
  }
}

for (var tbBChild = 0; tbBChild < tabContentLv2.length; tbBChild++) {
  if (tabNavItemLv2[tbBChild].classList.contains("active")) {
    tabContentLv2[tbBChild].style.display = "flex";
  } else {
    tabContentLv2[tbBChild].style.display = "none";
  }
}

for (var tbH = 0; tbH < tabNavItem.length; tbH++) {
  tabNavItem[tbH].addEventListener("click", function () {
    var tabNav = this.parentElement;
    var parentTab = tabNav.parentElement.parentElement;
    var tabBody = parentTab.children[1];

    for (var tbHr = 0; tbHr < tabNav.children.length; tbHr++) {
      tabNav.children[tbHr].classList.remove("active");
    }

    for (var _tbB = 0; _tbB < tabBody.children.length; _tbB++) {
      tabBody.children[_tbB].style.display = "none";
    }

    this.classList.add("active");
    document.querySelector(this.dataset.tab).style.display = "flex";
  });
}