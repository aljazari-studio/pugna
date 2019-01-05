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

var searchboxNav = document.querySelector(".header-item-searchbox");
var searchbox = searchboxNav.children[0];
var searchboxTrigger = searchboxNav.children[1];

searchboxTrigger.addEventListener("click", function() {
  searchboxNav.classList.toggle("active");

  if (!searchbox.classList.contains("show")) {
    mpc(searchbox).switchClass("hide", "show");
  } else {
    mpc(searchbox).switchClass("show", "hide");
  }
});

// Sidebar
var sidebar = document.querySelector(".sidebar");
var sidebarTrigger = document.querySelector(".sidebar-control");

sidebarTrigger.addEventListener("click", function() {
  if (sidebar.classList.contains("collapsed")) {
    mpc(sidebar).switchClass("collapsed", "expanded");

    setTimeout(function() {
      sidebar.classList.remove("expanded");
    }, 1000);
  } else {
    mpc(sidebar).switchClass("expanded", "collapsed");
  }
});

var liChildrenTrigger = document.getElementsByClassName("has-children");

for (var i = 0; i < liChildrenTrigger.length; i++) {
  liChildrenTrigger[i].addEventListener("click", function() {
    this.classList.toggle("active");
    mpc(this.children[0].children[2]).toggleClass(
      "fa-chevron-right",
      "fa-chevron-down"
    );
  });
}

// Chatbox
var chatbox = document.querySelector(".chatbox");
var chatboxTrigger = document.querySelector(".trigger-chatbox");

var chatboxFile = document.querySelector(".chat-form input[type=file]");
var chatboxFileTrigger = document.querySelector(".chat-form .btn-attach");

if (chatbox.classList.contains("show")) {
  mpc(chatboxTrigger).toggleChildClass("fa-times", "fa-comments");
}

chatboxTrigger.addEventListener("click", function() {
  mpc(chatboxTrigger).toggleChildClass("fa-comments", "fa-times");

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

// Dropdown
var dropdownTrigger = document.getElementsByClassName("trigger-dropdown");

for (var i = 0; i < dropdownTrigger.length; i++) {
  dropdownTrigger[i].addEventListener("click", function() {
    var siblingDisplay = getComputedStyle(this.nextElementSibling, null)
      .display;
    this.nextElementSibling.style.display =
      siblingDisplay == "block" ? "none" : "block";
  });
}

// Form
(function HoldLabelFloat() {
  var fromLabelFloat = document.getElementsByClassName("label--floating");

  for (var i = 0; i < fromLabelFloat.length; i++) {
    fromLabelFloat[i].children[1].addEventListener("click", function() {
      this.previousSibling.focus();
    });

    fromLabelFloat[i].children[0].addEventListener("focus", function() {
      this.nextElementSibling.classList.add("float");
    });

    fromLabelFloat[i].children[0].addEventListener("blur", function() {
      if (this.value === "") { 
        let that = this;
        mpc(this.nextElementSibling).toggleClass("float", "default");

        setTimeout(function() {
          that.nextElementSibling.classList.remove("default");
        }, 500);
      }
    });
  }
})();

/**
 * Trigger input file
 * @param {node} element
 */
(function TriggerInpFile() {
  var inpFileTrigger = document.getElementsByClassName("btn-file");

  for (var i = 0; i < inpFileTrigger.length; i++) {
    inpFileTrigger[i].addEventListener("click", function() {
      this.nextElementSibling.click();
    });
  }
})();

