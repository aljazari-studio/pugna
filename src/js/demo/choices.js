// Choices.js
let choiceElement = document.getElementById("js-choice");

if (choiceElement) {
  let choice = new Choices(choiceElement, {
    removeItemButton: true,
    items: ["Tag 1", "Tag 2", "Tag 3"]
  });

  document.getElementById("js-choice-res").value = choice.getValue(true);

  choiceElement.addEventListener("change", function() {
    document.getElementById("js-choice-res").value = choice.getValue(true);
  });
}
