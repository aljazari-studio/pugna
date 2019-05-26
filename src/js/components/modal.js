// Modal
var body = document.querySelector("body");
var pugnaOverlay = document.createElement("div");

pugnaOverlay.setAttribute("class", "pgn-overlay");
body.appendChild(pugnaOverlay);

var modalTrigger = document.querySelectorAll("[data-modal]");
var modalDismiss = document.querySelectorAll(".modal-dismiss");

for (let mt = 0; mt < modalTrigger.length; mt++) {
  modalTrigger[mt].addEventListener("click", function() {
    let modal = document.querySelector(this.dataset.modal);

    pugnaOverlay.classList.add("show");
    modal.classList.add("show");

    for (let md = 0; md < modalDismiss.length; md++) {
      modalDismiss[md].addEventListener("click", function() {
        dismissModal(modal, pugnaOverlay);
      });
    }

    pugnaOverlay.addEventListener("click", function() {
      dismissModal(modal, pugnaOverlay);
    });
  });
}

function dismissModal(modal, overlay) {
  overlay.classList.remove("show");
  modal.classList.remove("show");
}
