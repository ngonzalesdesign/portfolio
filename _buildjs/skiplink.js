document.getElementById("skip-link").addEventListener("click", function(e) {
  e.preventDefault();
  var target = document.getElementById("skip-target");
  target.setAttribute("tabindex", "-1");
  target.focus();
});
