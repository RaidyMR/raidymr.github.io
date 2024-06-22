let slideIndex = 1;
let certificatesIndex = 1;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const infos = document.getElementsByClassName("card-info");
    const dots = document.getElementsByClassName("demo");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        infos[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    infos[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function moveCertificateSlide(n) {
    certificateSlides(certificatesIndex += n);
}

function certificateSlides(n) {
    const cards = document.querySelectorAll(".card");
    
    if (n > cards.length) {certificatesIndex = 1}
    if (n < 1) {certificatesIndex = cards.length}
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }

    cards[certificatesIndex-1].style.display = "block";
}


function renderPage(page) {
    document.querySelector(".middle").innerHTML = page.content;
    document.title = page.title;
    page.DOMSetup();
}

export {
    renderPage,
    moveSlide,
    showSlides,
    moveCertificateSlide,
    certificateSlides
}