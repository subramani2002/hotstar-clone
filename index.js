let movies = [
    {
        name:"falcon and the winter soldier",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas fugit? Eligendi, necessitatibus. Iste, qui.",
        image:"images/slider 2.png"
    },
    {
        name:"Loki",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas fugit? Eligendi, necessitatibus. Iste, qui.",
        image:"images/slider 1.png"
    },
    {
        name:"wanda vision",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas fugit? Eligendi, necessitatibus. Iste, qui.",
        image:"images/slider 3.png"
    },
    {
        name:"raya and the last dragon",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas fugit? Eligendi, necessitatibus. Iste, qui.",
        image:"images/slider 4.png"
    },
    {
        name:"luca",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas fugit? Eligendi, necessitatibus. Iste, qui.",
        image:"images/slider 5.png"
    }
];
let carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const createSlide = () =>{
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    //creating DOM elements
    let slide = document.createElement('div');
    let imgEl = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all the elements
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgEl);
    carousel.appendChild(slide);

    //setting up image
    imgEl.src = movies[slideIndex].image;

    //setting elements class name 
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);
    slideIndex++;

    if(sliders.length){
        let calculate = 100*(sliders.length - 2);
        sliders[0].style.marginLeft = `calc(-${calculate}% - ${30*(sliders.length - 2)}px)`;
    }
}

for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

// video card section

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover",()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave",()=>{
        let video = item.children[1];
        video.pause();
    });
});

//card sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i) =>{
    let containerDim = item.getBoundingClientRect();
    let conatinerWidth = containerDim.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += conatinerWidth - 200;
    });
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= conatinerWidth + 200;
    });
});