

const myForm = document.querySelector("#contact");

myForm.onsubmit = function(ev) {
  ev.preventDefault();
  return alert("Success!");
}
