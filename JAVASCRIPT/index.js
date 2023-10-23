let screen = document.getElementById('result');
let tiltle= document.getElementById("principal-tiltle")

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = 'Error';
  }
}

new TypeIt("#simpleUsage", {
  strings: "calculadora con Javascript",
  speed: 50,
  waitUntilVisible: true,
}).go();

