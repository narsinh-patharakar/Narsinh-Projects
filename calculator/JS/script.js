let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".button");

let output = localStorage.getItem("calculator") || "";
display.value = output;

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("e", e.target.innerHTML);
    output = output + e.target.innerHTML;
    console.log("output", output);
    display.value = output;
  });
});

clear.addEventListener("click", () => {
  output = "";
  display.value = output;
});

del.addEventListener("click", () => {
  output = output.toString().slice(0, -1);
  display.value = output;
});

result.addEventListener("click", () => {
  if (output !== "") {
    output = eval(output.replace("%", "/100"));
    display.value = output;
  } else {
    output = "";
    display.value = output;
  }
});

window.onbeforeunload = function () {
  localStorage.setItem("calculator", output);
};
