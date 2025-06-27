function calc(value) {
    const display = document.getElementById("d1");
    if (value === '=') {
        display.value = eval(display.value);
    } else {
        display.value += value;
    }
}