let img = document.querySelector('#img');
let title = document.querySelector('#title');
let text = document.querySelector('#text');
let link = document.querySelector('#link');
let github = document.querySelector('#github');

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

const carousel = [
    {
        img: './img/medi.png',
        title: 'Medi',
        text: `Medi bu tayyorlagan web saytimda men ko'proq CSS da "верстка" yaniy turli hil hajmdagi ekranlarga moslashuvchanlikga ko'proq urg'u berganman.
                Bu sayt PC: 1920px Laptop: 1440px, 1024px Table: 768px Mobile: 425px, 375px va 320px hajimdagi ekranlarga moslashtirib tuzilgan.`,
        github: 'https://github.com/DilshodXD/Medi',
        link: 'https://medi-xd.netlify.app/',
    },
    {
        img: '../img/kalk.png',
        title: 'Calculator',
        text: `Calculator bu saytni JavaScript tilida ko'proq amaliyot qislish uchun tayyorlaganman. unda xar hil matematik amallarni bajarish mumkun va saytning tepa qishmidagi tugmachalar orqali saytni "Dark mode" va "Light mode" tizimiga o'tkazish mumkun.`,
        github:'https://github.com/DilshodXD/Calculator',
        link: 'https://calculator-xd.netlify.app/',
    },
    {
        img: '../img/britlex.png',
        title: 'Britlex',
        text: `Britlex bu tayyorlagan web saytimda men ko'proq CSS da "верстка" yaniy turli hil hajmdagi ekranlarga moslashuvchanlikga ko'proq urg'u berganman.
        Bu sayt Mobile: 575px, 320px hajimdagi ekranlarga moslashtirib tuzilgan.`,
        github: 'https://github.com/DilshodXD/Britlex',
        link: 'https://britlex-xd.netlify.app/',
    },
    {
        img: '../img/brightlights.png',
        title: 'Bright Lights',
        text: `Bright Lights bu saytni Sass yaniy "CSS Framework" ni o'zlashtirish uchun tayyorlaganman.`,
        link: 'https://brightlights-xd.netlify.app/'
    },
];


let index = 0;
let indexLength = carousel.length -1;


next.addEventListener('click', () => {

    if (index == indexLength){
        index = -1
    }else if (index == -indexLength){
        index = -1
    }
    index++;

    console.log(index);
    if (index >= 0) {
        img.src = carousel[index].img;
        title.innerText = carousel[index].title;
        text.innerText = carousel[index].text;
        link.href = carousel[index].link;
        github.href = carousel[index].github;
    }else if( index < 0){
        img.src = carousel[index * (-1)].img;
        title.innerText = carousel[index * (-1)].title;
        text.innerText = carousel[index * (-1)].text;
        link.href = carousel[index * (-1)].link;
        github.href = carousel[index * (-1)].github;
    }
});

prev.addEventListener('click', () => {

    if (index == indexLength){
        index = 1
    }else if (index == -indexLength){
        index = 1
    }
    index--;

    console.log(index);
    if (index >= 0){
        img.src = carousel[index].img;
        title.innerText = carousel[index].title;
        text.innerText = carousel[index].text;
        link.href = carousel[index].link;
        github.href = carousel[index].github;
    }
    else if (index < 0){
        img.src = carousel[index *(-1)].img;
        title.innerText = carousel[index *(-1)].title;
        text.innerText = carousel[index *(-1)].text;
        link.href = carousel[index *(-1)].link;
        github.href = carousel[index *(-1)].github;
    }
});

