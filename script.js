//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("level");
  let level = 0;
  let current = element;

  while (current) {
    if (current.nodeType === 1) {
      level++;
    }
    current = current.parentElement;
  }

  alert(`The level of the element is: ${level}`);
});
