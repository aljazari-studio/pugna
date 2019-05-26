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

  return this;
}

var mpc = function(element) {
  return new ManipulateClass(element);
};

// Get Global Color Scheme
var colorScheme = {
  primary: getColorScheme("primary"),
  secondary: getColorScheme("secondary"),
  light: getColorScheme("light"),
  dark: getColorScheme("dark")
};

function getColorScheme(color) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--pg-" + color);
}

// Hex to RGBA
function hexToRgbA(hex, opacity = 1) {
  hex = hex.trim();

  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      opacity +
      ")"
    );
  }
  throw new Error("Bad Hex");
}
