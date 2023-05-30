// Array of objects
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

// seleziono il contenitore dove andranno a finire le immagini del jumbo
const jumboElement = document.querySelector('div.jumbo');

// creo un ciclo for per pescare l'immagine che mi serve dall'array
for(let i = 0; i<images.length;i++){
    
    const singleImage = images[i];

// inserisco le immagini nell'DOM
    jumboElement.innerHTML += 
    `<div class="img-container">
    <img src="./${singleImage.image}" alt="">
    </div>`
}

// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// uso una variabile per navigare nell'array e cambiare immagine
let activeSlide = 2;

// aggiungo la classe all'immagine che si deve vedere e sarà la prima a mostrarsi all'apertura della pagina
document.querySelectorAll('div.img-container')[activeSlide].classList.add('showing');

// recupero il bottone in alto e inserisco l'eventlistner per far scorrere le immagini
const topButton = document.querySelector('button.top-button');

topButton.addEventListener('click', function(){
    
    // questo if fa in modo che quando si scorre fino all'ultimo elemento dell'array si riparta dall'inizio
    if(activeSlide == 0){
        activeSlide = images.length - 1;
    }else{
        activeSlide = activeSlide-1;
    }

    // rimuove classe dall'immagine corrente
    document.querySelector('div.img-container.showing').classList.remove('showing');

    // aggiuge classe alla nuova immagine
    document.querySelectorAll('div.img-container')[activeSlide].classList.add('showing');

})





// recupero il bottone in basso e inserisco l'eventlistner per far scorrere le immagini in modo opposto al precedente
const bottomButton = document.querySelector('button.bottom-button');

bottomButton.addEventListener('click', function(){
    // questo if si comporta in modo analogo al precedente ma in maniera opposta
    if(activeSlide == images.length - 1){
        activeSlide = 0;
    }else{
        activeSlide = activeSlide + 1;
    }

    // rimuove classe dall'immagine corrente
    document.querySelector('div.img-container.showing').classList.remove('showing');

    // aggiuge classe alla nuova immagine
    document.querySelectorAll('div.img-container')[activeSlide].classList.add('showing');

})
