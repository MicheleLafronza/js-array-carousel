// creo costante del container
const container = document.querySelector(".interior-container");


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
        </div>`;
        
    // aggiungo la parte nei backtick al container
    container.innerHTML += divIt;
}

// creo la lista della classe items
const items = document.getElementsByClassName("item");
console.log(items);

// creo variabile "t" che conta come item attivo
let t = 0;

// aggiungo la classe active al primo elemento della lista items
items[t].classList.add("active");

// creo varibile dei tasti prev e next
const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

// evento click next
next.addEventListener("click",
    function() {

        

        // rimuovo la classe active dall'elemento precedente
        items[t].classList.remove("active");

        // aumento il valore di "t"
        t++;

        // resetto il valore di t se va oltre la lunghezza massima degli items
        if (t === items.length) {
            t = 0;
        }

        // assegno al nuovo "t" la classe active
        items[t].classList.add("active");

        console.log(t);
        
        
    }

)

// evento click prev
prev.addEventListener("click",
    function() {

        
        // rimuovo la classe active dall'elemento precedente
        items[t].classList.remove("active");

        // cambio il valore di t se esso è uguale a 0 così da riprendere dall'ultima immagine
        if (t === 0) {
            t = items.length;
        }

        // aumento il valore di "t"
        t--;

        // assegno al nuovo "t" la classe active
        items[t].classList.add("active");
        
        console.log(t);
        
        
    }

    

)

// completo

