let num1 = prompt("Ingrese un numero");
num1 = parseFloat(num1)

const random = Math.floor(Math.random()*3);
alert(`${random}`)
if (num1 == random){
    alert("Ganaste");
} else{
    alert("Perdiste");
}