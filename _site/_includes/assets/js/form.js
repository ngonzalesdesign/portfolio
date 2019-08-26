const form = document.querySelector("#contact");
const success = document.querySelector(".success");
const reset = document.querySelector("#reset");

function animate() {
  form.classList.add("slide-out");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.getAttribute("action"), {
    method: "POST",
    headers: {
      Accept: "application/x-www-form-urlencoded;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: new URLSearchParams(formData).toString()
  }).then(res => {
    if (res) {
      animate();
      setTimeout(function() {
        form.classList.add("hidden");
        success.classList.remove("hidden");
      }, 500);
    }
  });
});

reset.addEventListener("click", function() {
  form.reset();
  success.classList = "success slide-out";
  setTimeout(function() {
    success.classList = "success hidden";
    form.classList = "slide-in contact";
  }, 500);
  setTimeout(function() {
    form.classList = "contact";
  }, 500);
});
