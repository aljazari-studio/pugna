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
      inpFileTrigger[i].addEventListener("click", function() {
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
})();
