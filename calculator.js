var screen = document.getElementById("screen");

function btnClick(value) {
    screen.value += value;
}
console.log(btnclick(value))

function clearScreen() {
    screen.value = "";
}

function findResult() {
    var result = eval(screen.value)
    screen.value = result;

}