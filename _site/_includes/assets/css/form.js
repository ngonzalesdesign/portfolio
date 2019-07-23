const {validate} = require("formee");

const myForm = document.querySelector("#contact");
const myRules = {
  // RegExp rule
  email: /.+\@.+\..+/
};

myForm.onsubmit = function(ev) {
  ev.preventDefault();
  let errors = validate(myForm, myRules);
  if (myForm.isValid) return alert("Success!");
  for (let k in errors) {
    // TODO: Render errors manually
    //   with {insert favorite UI lib here}
    console.log(`My rule & element's name: ${k}`);
    console.log("> Error message:", errors[k] || "Required");
    console.log("> My form element(s):", myForm.elements[k]);
  }
};
