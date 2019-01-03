var switchClass = function(element, from, to) {
  element.classList.remove(from);
  element.classList.add(to);
};

var toggleClass = function(element, from, to) {
  element.classList.toggle(from);
  element.classList.toggle(to);
};

var toggleChildClass = function(element, from, to) {
  element.firstElementChild.classList.toggle(from);
  element.firstElementChild.classList.toggle(to);
};

// Searchbox
var searchboxNav = document.querySelector(".header-item-searchbox");
var searchbox = searchboxNav.children[0];
var searchboxTrigger = searchboxNav.children[1];

searchboxTrigger.addEventListener("click", function() {
  searchboxNav.classList.toggle("active");

  if (!searchbox.classList.contains("show")) {
    switchClass(searchbox, "hide", "show");
  } else {
    switchClass(searchbox, "show", "hide");
  }
});

// Sidebar
var sidebar = document.querySelector(".sidebar");
var sidebarTrigger = document.querySelector(".sidebar-control");

sidebarTrigger.addEventListener("click", function() {
  if (sidebar.classList.contains("collapsed")) {
    switchClass(sidebar, "collapsed", "expanded");

    setTimeout(function() {
      sidebar.classList.remove("expanded");
    }, 1000);
  } else {
    switchClass(sidebar, "expanded", "collapsed");
  }
});

var liChildrenTrigger = document.getElementsByClassName("has-children");

for (var i = 0; i < liChildrenTrigger.length; i++) {
  liChildrenTrigger[i].addEventListener("click", function() {
    this.classList.toggle("active");
    toggleClass(
      this.children[0].children[2],
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
  toggleChildClass(chatboxTrigger, "fa-times", "fa-comments");
}

chatboxTrigger.addEventListener("click", function() {
  toggleChildClass(this, "fa-comments", "fa-times");

  if (!chatbox.classList.contains("show")) {
    switchClass(chatbox, "hide", "show");
  } else if (chatbox.classList.contains("show")) {
    switchClass(chatbox, "show", "hide");

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
