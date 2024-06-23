function showSlides(slideIndex, elements) {
    const { slides, infos, dots } = elements;

    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        infos[i].style.display = "none";
    }

    for (const dot of dots) {
        dot.className = dot.className.replace(" active", "");   
    }

    slides[slideIndex-1].style.display = "block";
    infos[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    return slideIndex;
}

function toggleDarkMode() {
    localStorage.getItem("darkmode") == "enabled" ? localStorage.setItem("darkmode", "disabled") : localStorage.setItem("darkmode", "enabled");
    showDarkMode();
}

function showDarkMode() {
    if(localStorage.getItem("darkmode") == "enabled") {
        document.getElementById("dark").media = '';
        document.getElementById("light").media = 'none';
        document.getElementsByClassName("theme-switch__checkbox")[0].checked = true;
    } else {
        document.getElementById("dark").media = 'none';
        document.getElementById("light").media = '';
        document.getElementsByClassName("theme-switch__checkbox")[0].checked = false;
    }
}


function renderPage(page) {
    document.querySelector(".middle").innerHTML = page.content;
    document.title = page.title;
    page.DOMSetup();
}

export {
    showSlides,
    renderPage,
    toggleDarkMode,
    showDarkMode
}