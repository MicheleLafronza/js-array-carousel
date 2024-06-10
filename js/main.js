// creo costante del container
const container = document.querySelector(".container");


// creo array con le stringhe delle immagini
const imgPath = [
    "img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",
];


// setto il ciclo che andrà ad inserire automaticamente l'html dentro il container, il div e il tag img
for (i = 0; i < imgPath.length; i++) {
    let imgIt = imgPath[i];


    // creo la parte html da mettere dento il container
    let divIt = `
        <div class="item">
            <img src="${imgIt}" alt="">
            <a href="#" class="prev">
                    <i class="fa-solid fa-angle-up"></i>
            </a>
            <a href="#" class="next">
                    <i class="fa-solid fa-angle-down"></i>
            </a>
        </div>`;
        
    // aggiungo la parte nei backtick al container
    container.innerHTML += divIt;
}

// creo varibile dei tasti prev e next
let next = document.querySelector(".next");


let prev = document.querySelector(".prev");


// creo la lista della classe items
const items = document.getElementsByClassName("item");
console.log(items);

// creo variabile "t" che conta come item attivo
let t = 0;


// aggiungo la classe active al primo elemento della lista items
items[t].classList.add("active");


// evento click next
next.addEventListener("click",
    function() {

        // rimuovo la classe active dall'elemento precedente
        items[t].classList.remove("active");

        // aumento il valore di "t"
        t++;

        // assegno al nuovo "t" la classe active
        items[t].classList.add("active");
        
        console.log(t);
    }

)