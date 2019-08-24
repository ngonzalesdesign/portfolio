const scroller = scrollama();
const scroller2 = scrollama();
const nav = document.querySelector("header");
const strengths = document.querySelector(".strengths");

function scrollToTop(response, direction) {
  if (response.direction == direction) {
  response.element.classList.add("is-active");
  response.element.scrollIntoView({block: "start", behavior: "smooth"});
  }
};

function animatePage(response){
  var cls = response.element.classList;
  switch( true ){
    case cls.contains('one'):
      strengths.classList = `strengths + step-one`;
      nav.classList = "fixed";
      break;
    case cls.contains('two'):
      strengths.classList = `strengths + step-two`
      break;
    case cls.contains('three'):
      strengths.classList = `strengths + step-three`
      break;      
  }
}

scroller
  .setup({
    step: ".step",
    offset: 1
  })
  .onStepEnter(function(response) {
    scrollToTop(response, "down");
    animatePage(response);

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
    scrollToTop(response, "up");
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
