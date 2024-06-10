// creo costante del container
const container = document.querySelector(".container");
// console.log(container);

// creo array con le stringhe delle immagini
const imgPath = [
    "img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",
];
// console.log(imgPath);

// setto il ciclo che andrà ad inserire automaticamente nel html dentro il container, il div e il tag img
for (i = 0; i < imgPath.length; i++) {
    let imgIt = imgPath[i];
    // console.log(imgIt);

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
    // appendo la parte nei backtick nel container
    container.innerHTML += divIt
}