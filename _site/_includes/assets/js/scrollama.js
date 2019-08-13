const scroller = scrollama();
const scroller2 = scrollama();
const nav = document.querySelector("header");
const strengths = document.querySelector(".strengths");

scroller
  .setup({
    step: ".step",
    offset: 1
  })
  .onStepEnter(function(response) {
    if (response.direction == "down") {
      response.element.classList.add("is-active");
      response.element.scrollIntoView({block: "start", behavior: "smooth"});
    }

    if (response.element.classList.contains("first")) {
      nav.classList = "fixed";
    }

    if (response.element.classList.contains("strength")) {
      strengths.classList.add("fixedBG");
    } else {
      strengths.classList.remove("fixedBG");
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
      if (response.element.classList.contains("first")) {
        nav.classList = "hidden";
      }
    }
  });

window.addEventListener("resize", scroller.resize);
