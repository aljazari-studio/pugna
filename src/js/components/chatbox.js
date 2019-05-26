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
