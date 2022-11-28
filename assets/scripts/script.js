// DARK MODE
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        document.body.classList.add("dark-main");
        header[0].classList.add('dark-secondary');
        header[1].classList.add('dark-secondary');
        footer[0].classList.add('dark-secondary');
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add("dark-main");
        header[0].classList.add('dark-secondary');
        header[1].classList.add('dark-secondary');
        footer[0].classList.add('dark-secondary');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.body.classList.remove("dark-main");
        header[0].classList.remove('dark-secondary');
        header[1].classList.remove('dark-secondary');
        footer[0].classList.remove('dark-secondary');
        localStorage.setItem('theme', 'light');
    }    

});

// PICK RANDOM QUOTE
const pickQuote = () => {
    const article = document.getElementById('quote');

    const quote = [
        {
            'word': 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
            'person': 'Nelson Mandela'
        },
        {
            'word': 'If life were predictable it would cease to be life, and be without flavor.',
            'person': 'Eleanor Roosevelt'
        },
        {
            'word': 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
            'person': 'James Cameron'
        }
    ];

    pickRandomQuote = Math.floor(Math.random() * 3);

    article.appendChild(createQuote(quote[pickRandomQuote]));
}

const createQuote = (quote) => {
    const element = document.createElement('div');
    element.className = 'random-quote';
    
    const word = document.createElement('q');
    word.textContent = quote.word;

    const person = document.createElement('p');
    person.textContent = `- ${quote.person}`;
    person.style.textAlign = 'right';

    element.appendChild(word);
    element.appendChild(person);

    return element;
}

pickQuote();

// CAROUSEL
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});