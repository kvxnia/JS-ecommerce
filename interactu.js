



const tarjeta = document.querySelector('#tarjeta');
tarjeta.textContent = 'productos';
tarjeta.style.color = 'white';

const cardelem = [];

for (let i = 1; i <= 9; i++) {
    const card = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Imagen ${i}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">LG ULTRAGEAR</h5>
                    <p class="card-text">$200</p>
                    <a href="producto.html" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    `;
    
    cardelem.push(card);
}

document.querySelector("section.container .row").innerHTML = cardelem.join('');



// document.querySelector(".card-group").innerHTML = (array);
// Mariangel Solano
// 7:07 p.m.
// document.querySelector ("h1").innerText= "Productos";
// array= [];
// for (const i= 1 ; i <= 9 ; i++) {
//     const cards= 
//  `<div class="card">
// <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="">
// <p>Producto ${i}</p>
// </div>` ;
// array.push(cards);
// document.querySelector("section").innerHTML = (array);
// }