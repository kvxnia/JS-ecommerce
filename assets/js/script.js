console.log("hola")
var a = 2
var b = 3
var t = a + b
console.log(t)

const h5 = document.querySelector("h5")


document.querySelector('.titulo').textContent = "Nuevo titulo";
// document.querySelector('.card img').src = "/Curso de JS/ecommerce/assets/imagenes/dibu.jpg";






// --------------------------------------------------------------------------------------
// ayuda del responsive de las imagenes de las crads



// Selecciona la imagen que deseas cambiar
let nuevaImagen = document.querySelector('.card img');

// Cambia la fuente de la imagen
nuevaImagen.src = "/Curso de JS/ecommerce/assets/imagenes/dibu.jpg";

nuevaImagen.classList.add('img-fluid');



// Fin de ayuda resposinve
// --------------------------------------------------------------------------------------

// cambio de multiples imagenes o textos

document.querySelectorAll('.carousel-item img').forEach((img, index)=>
{
    img.src = `/Curso de JS/ecommerce/assets/imagenes/dibu.jpg`;
});

