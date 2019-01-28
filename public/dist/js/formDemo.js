"use strict";

/**
 * Trigger input file
 * @param {node} element
 */
(function TriggerInpFile() {
  var inpFileTrigger = document.getElementsByClassName("btn-file");

  if (inpFileTrigger.length > 0) {
    var progress = document.querySelector(".file-container progress");
    var progressVal = 1;
    var id = setInterval(frame, 10);

    for (var i = 0; i < inpFileTrigger.length; i++) {
      inpFileTrigger[i].addEventListener("click", function () {
        this.nextElementSibling.click();
      });
    }
  }

  function frame() {
    if (progressVal >= 100) {
      clearInterval(id);
    } else {
      progressVal++;
      progress.value = progressVal + "";
    }
  }
})(); // Pugna Select


var selectsCustom = document.getElementsByClassName("pgn-select");

for (var sc = 0; sc < selectsCustom.length; sc++) {
  var selElmnt = selectsCustom[sc].getElementsByTagName("select")[0];
  var psd = document.createElement("ul");
  psd.setAttribute("class", "pgn-select-dropdown hide");
  var psdSelected = document.createElement("span");
  psdSelected.setAttribute("class", "pgn-select-selected");
  psdSelected.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  selectsCustom[sc].appendChild(psdSelected);

  for (var item = 0; item < selElmnt.length; item++) {
    var psdItem = document.createElement("li");
    psdItem.innerHTML = selElmnt.options[item].innerHTML;
    psdItem.addEventListener("click", function (e) {
      var pgnItems, pgnIndex, selIndex, pgnSelect, nextEl;
      pgnSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
      nextEl = this.parentNode.previousSibling;

      for (selIndex = 0; selIndex < pgnSelect.length; selIndex++) {
        if (pgnSelect.options[selIndex].innerHTML == this.innerHTML) {
          pgnSelect.selectedIndex = selIndex;
          nextEl.innerHTML = this.innerHTML;
          pgnItems = this.parentNode.children;

          for (pgnIndex = 0; pgnIndex < pgnItems.length; pgnIndex++) {
            pgnItems[pgnIndex].removeAttribute("class");
          }

          this.parentNode.parentNode.classList.toggle("clicked");
          this.parentNode.classList.toggle("hide");
          this.setAttribute("class", "selected");
          break;
        }
      }

      nextEl.click();
    });
    psd.appendChild(psdItem);
  }

  psd.children[selectsCustom[sc].getElementsByTagName("select")[0].selectedIndex].classList.add("selected");
  selectsCustom[sc].appendChild(psd);
  selectsCustom[sc].addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.classList.toggle("clicked");
    this.children[2].classList.toggle("hide");
  });
}

function closeAllSelect(elmnt) {
  var selectsCustom,
      psd,
      i,
      arrNo = [];
  selectsCustom = document.getElementsByClassName("pgn-select");
  psd = document.getElementsByClassName("pgn-select-dropdown");

  for (i = 0; i < selectsCustom.length; i++) {
    if (elmnt == selectsCustom[i]) {
      arrNo.push(i);
    } else {
      selectsCustom[i].classList.remove("clicked");
    }
  }

  for (i = 0; i < psd.length; i++) {
    if (arrNo.indexOf(i)) {
      psd[i].classList.add("hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
document.addEventListener("keyup", closeAllSelect);