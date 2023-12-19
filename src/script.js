document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const focus = document.getElementById("focus");

  textInput.addEventListener("focus", function () {
    focus.classList.remove("hidden");
  });
  textInput.addEventListener("blur", function () {
    focus.classList.add("hidden");
  });
});
