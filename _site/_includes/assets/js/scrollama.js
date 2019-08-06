const scroller = scrollama();
const scroller2 = scrollama();

scroller
  .setup({
    step: ".step",
    offset: 1
  })
  .onStepEnter(function(response) {
    const nav = document.querySelector("header");
    if (response.direction == "down") {
      response.element.classList.add("is-active");
      response.element.scrollIntoView({block: "start", behavior: "smooth"});
    }

    if (response.element.classList.contains("skills")) {
      nav.classList = "fixed";
    }
    if (response.element.classList.contains("atf")) {
      nav.classList = "hidden";
    }
  })
  .onStepExit(function(response) {
    if (response.direction == "down") {
      response.element.classList.remove("is-active");
    }
  });

scroller2
  .setup({
    step: ".step",
    offset: 0.1
  })
  .onStepEnter(function(response) {
    if (response.direction == "up") {
      response.element.classList.add("is-active");
      response.element.scrollIntoView({block: "start", behavior: "smooth"});
    }
  })
  .onStepExit(function(response) {
    if (response.direction == "up") {
      response.element.classList.remove("is-active");
    }
  });

window.addEventListener("resize", scroller.resize);
