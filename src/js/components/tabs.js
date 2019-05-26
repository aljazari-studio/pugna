// Tabs
var tabs = document.getElementsByClassName("tab");
var tabNavItem, tabContent;

tabNavItem = document.getElementsByClassName("tab__nav-item");
tabContent = document.getElementsByClassName("tab__content");

var tabContentLv1 = [],
  tabContentLv2 = [],
  tabNavItemLv2 = [];

for (let ftc = 0; ftc < tabContent.length; ftc++) {
  if (
    tabContent[ftc].parentElement.parentElement.parentElement.className !==
    "tab__content"
  ) {
    tabContentLv1.push(tabContent[ftc]);
  } else {
    tabContentLv2.push(tabContent[ftc]);
    tabNavItemLv2.push(
      document.querySelector("[data-tab='#" + tabContent[ftc].id + "']")
    );
  }
}

for (let tbB = 0; tbB < tabContentLv1.length; tbB++) {
  if (tabNavItem[tbB].classList.contains("active")) {
    tabContentLv1[tbB].style.display = "flex";
  } else {
    tabContentLv1[tbB].style.display = "none";
  }
}

for (let tbBChild = 0; tbBChild < tabContentLv2.length; tbBChild++) {
  if (tabNavItemLv2[tbBChild].classList.contains("active")) {
    tabContentLv2[tbBChild].style.display = "flex";
  } else {
    tabContentLv2[tbBChild].style.display = "none";
  }
}

for (let tbH = 0; tbH < tabNavItem.length; tbH++) {
  tabNavItem[tbH].addEventListener("click", function() {
    let tabNav = this.parentElement;
    let parentTab = tabNav.parentElement.parentElement;
    let tabBody = parentTab.children[1];

    for (let tbHr = 0; tbHr < tabNav.children.length; tbHr++) {
      tabNav.children[tbHr].classList.remove("active");
    }

    for (let tbB = 0; tbB < tabBody.children.length; tbB++) {
      tabBody.children[tbB].style.display = "none";
    }

    this.classList.add("active");

    document.querySelector(this.dataset.tab).style.display = "flex";
  });
}
