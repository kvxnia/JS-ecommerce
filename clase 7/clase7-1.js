// calculadora

let num1 = prompt("Ingrese un numero");
let num2 = prompt("Ingrese otro numero"); 

let opci = prompt("Opciones:\n1. Suma\n2. Resta\n3. División\n4. Multiplicación");
num1 = parseFloat(num1)
num2 = parseFloat(num2)
opci = parseFloat(opci)

if (opci == 4) {
    alert(`Resultado de la Multiplicación: ${num1 * num2}`);
} else if (opci == 3) {
    alert(`Resultado de la Division ${num1 / num2}`);
} else if (opci == 2) {
    alert(`Resultado de la Resta ${num1 - num2}`);
} else if (opci == 1){
    alert(`Resultado de la Suma ${num1 + num2}`);
} else {
    console.log("ERROR No ingreso un numero")
}