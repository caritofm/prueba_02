import { comicMarvel } from "./comicMarvel.js";
import { enviarDatos } from "./operaciones.js";
import { agregarAlCarrito } from './carrito.js';
 export function getComicCards(){
    let comicRow = document.getElementById("comicRow");

    comicMarvel.map(function(comic){
        const comicCol = document.createElement("div");
        comicCol.classList.add('col-xl-4')
        comicCol.classList.add('col-lg-4')
        comicCol.classList.add('col-md-4')
        comicCol.classList.add('col-sm-10')
        comicCol.classList.add('col-xs-10')

        const card = document.createElement("div")

        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img");
        imgCard.src= comic.img;
        imgCard.classList.add("card-img-top");
        imgCard.classList.add('mt-2');
        imgCard.classList.add('mx-auto');
        imgCard.classList.add('w-75');
        imgCard.style.width = "280px"; 
        imgCard.style.height = "370px";

        const divBody = document.createElement("div")

        divBody.classList.add("card-title")

        const title = document.createElement("h5")

        title.classList.add("card-title")
        title.textContent = comic.name


        const groups = document.createElement("p")
        groups.classList.add("card-text")
        groups.textContent= comic.groups
        
        const price = document.createElement("p")
        price.classList.add("card-title")
        price.textContent= comic.price

        const btnComprar = document.createElement('button')
        btnComprar.classList.add('btn')
        btnComprar.classList.add('btn-danger')
        btnComprar.textContent = 'Agregar al carrito';

        btnComprar.addEventListener("click", () => {
            agregarAlCarrito(comic.name, comic.groups, comic.price, comic.img);
          });
          
          
        imgCard.addEventListener("click", () =>
            enviarDatos(comic.name, comic.groups, comic.price, comic.img)
        )

        imgCard.addEventListener("mouseover", () => {
            imgCard.style.filter = "brightness(50%)";
        });
        
        imgCard.addEventListener("mouseout", () => {
            imgCard.style.filter = "brightness(100%)";
        });

        
    

        divBody.appendChild(title)
        
        divBody.appendChild(price)
        divBody.appendChild(btnComprar)

        card.appendChild(imgCard)
        card.appendChild(divBody)
        

        comicCol.appendChild(card)

        comicRow.appendChild(comicCol)


    })
}

import { dccomics } from "./dccomics.js";


 export function getDcCards(){
    let dcRow = document.getElementById("dcRow");

    dccomics.map(function(dc){
        const dcCol = document.createElement("div");
        dcCol.classList.add('col-xl-4')
        dcCol.classList.add('col-lg-4')
        dcCol.classList.add('col-md-4')
        dcCol.classList.add('col-sm-10')
        dcCol.classList.add('col-xs-10')

        const card = document.createElement("div")

        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img");
        imgCard.src= dc.img;
        imgCard.classList.add("card-img-top");
        imgCard.classList.add('mt-2');
        imgCard.classList.add('mx-auto');
        imgCard.classList.add('w-75');
        imgCard.style.width = "280px"; 
        imgCard.style.height = "370px";


        




        const divBody = document.createElement("div")

        divBody.classList.add("card-title")

        const title = document.createElement("h5")

        title.classList.add("card-title")
        title.textContent = dc.name

        

        const groups = document.createElement("p")
        groups.classList.add("card-text")
        groups.textContent= dc.groups
        
        const price = document.createElement("p")
        price.classList.add("card-title")
        price.textContent= dc.price


        const btnComprar = document.createElement('button');
        btnComprar.classList.add('btn');
        btnComprar.classList.add('btn-danger');
        btnComprar.classList.add('mx-auto');
        btnComprar.textContent = 'Agregar al carrito';

        
          
          btnComprar.addEventListener("click", () => {
            agregarAlCarrito(dc.name, dc.groups, dc.price, dc.img);
          });
        imgCard.addEventListener("click", () =>{
            
            imgCard.style.filter = "brightness(50%)";
            enviarDatos(dc.name, dc.groups,dc.price, dc.img)


            

    })
    imgCard.addEventListener("mouseover", () => {
        imgCard.style.filter = "brightness(50%)";
    });
    
    imgCard.addEventListener("mouseout", () => {
        imgCard.style.filter = "brightness(100%)";
    });

        

        divBody.appendChild(title)
        
        divBody.appendChild(price)
        divBody.appendChild(btnComprar)

        card.appendChild(imgCard)
        card.appendChild(divBody)
        

        dcCol.appendChild(card)

        dcRow.appendChild(dcCol)


    })
}