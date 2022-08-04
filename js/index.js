 // Load your images on page-load
 function preloader() {
    const imagesList = [
       "./img/facebook.png",
       "./img/insta.png",
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);



// references
let buttons = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');

// resources
let stock = {
    c1: {
            heading: 'Hydroelectric power',
            bodyText: 'Hydropower is better for the environment than other major sources of electrical power, which use fossil fuels. Hydropower plants do not emit the waste heat and gases—common with fossil-fuel driven facilities—which are major contributors to air pollution, global warming and acid rain.',
            imageSrc: './img/img-3.jpg',
            imageAlt: 'hydro'
        },
    c2: {
        heading: 'Wind energy',
        bodyText: 'Wind power is the energy obtained from the wind. It is one of the oldest energy sources exploited by humans and today is the most established and efficient renewable energy source. The academic term for wind power—eolic energy—is derived from the name of the Greek mythological figure, Aeolus, the keeper of the winds.',
        imageSrc: './img/img-1.jpg',
        imageAlt: 'wind'
    },
    c3: {
        heading: 'Solar energy',
        bodyText: 'Solar power is a great alternative to traditional power sources because of its lower environmental footprint, return on investment, lower maintenance, the secured long-term cost of the energy, and more. In fact, according to a CBC News Poll, 79% of Albertans already think the province should transition toward renewable energy, including solar power. ',
        imageSrc: './img/img-2.jpg',
        imageAlt: 'solar'
    }
}

dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;


// Function 
function displayContent(ev) {

    
    let currentBtn = ev.target;

    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')){
              buttons[i].removeAttribute('id');
              
        }
    }

    currentBtn.setAttribute('id','active-button');
    

    if (currentBtn.textContent === 'Hydro') {
        dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;
    } else if (currentBtn.textContent === 'Wind') {
        dc.innerHTML = `<img src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c2.heading}</h2>
                <p>${stock.c2.bodyText}</p>
                </div>
                `;
    } else {
        dc.innerHTML = `<img src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c3.heading}</h2>
                <p>${stock.c3.bodyText}</p>
                </div>
                `;
    }
}


// Activate function

for (let button of buttons) {
    button.addEventListener('click', displayContent);
}
