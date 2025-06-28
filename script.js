function append(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deletelast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculate() {
    let expression = document.getElementById("display").value;
    expression = expression.replace(/√(\d+(\.\d+)?)/g, (match, number) => {
        return Math.sqrt(Number(number));
    });
    expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
        return Number(number) / 100;
    });
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (e) {
        alert("Invalid Expression");
    }
}
