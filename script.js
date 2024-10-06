document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
const chooseusContainer = [
    { 
        Image: "assets/payment img.svg",
        title: "Payment methods",
        description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
    },
    { 
        Image: "assets/search img.svg",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son",
    },
    { 
        Image: "assets/247 img.svg",
        title: "24/7 Support",
        description: "Is there something you don't<br>understand? Feel free to call us. <br> Phone number in the footer",
    },
    { 
        Image: "assets/cat img.svg",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here",
    },

];

const renderProduct = chooseusContainer => {
    const container = document.getElementById('chooseusContainer');
    chooseusContainer.forEach(chooseusContainer => {
        container.innerHTML += `
            <div>
                <img src=" ${chooseusContainer.Image}" alt="">
                <h3>${chooseusContainer.title}</h3>
                <p>${chooseusContainer.description}</p>
            </div>
        `;
    });
}

renderProduct(chooseusContainer);


const specialofferContainer = [
    { 
        Image: "assets/Special Offers img1.png", 
        img: "assets/rating.svg",
        img2: "assets/favorite.svg",
        heading1: "Wilderness Club at Big <br> Ceddar",
        heading2: "28 October — 1 November",
        para: "$2016<span>/6 night</span>",
    },
    { 
        Image: "assets/Special Offers img2.png", 
        img: "assets/rating.svg",
        img2: "assets/favorite.svg",
        heading1: "Wilderness Club at Big <br> Ceddar",
        heading2: "28 October — 1 November",
        para: "$2016<span>/6 night</span>",
    },
    { 
        Image: "assets/Special Offers img3.png", 
        img: "assets/rating.svg",
        img2: "assets/favorite.svg",
        heading1: "Wilderness Club at Big <br> Ceddar",
        heading2: "28 October — 1 November",
        para: "$2016<span>/6 night</span>",
    },

];

const renderContainer = specialofferContainer => {
    const container = document.getElementById('specialofferContainer');
        specialofferContainer.forEach(specialofferContainer => {
        container.innerHTML += `
            <div class="card">
                <img src="${specialofferContainer.Image}" alt="" id="bed">
                <div class="img">
                    <img src="${specialofferContainer.img}" alt="">
                    <img src="${specialofferContainer.img2}" alt="" id="fav">
                </div>
                <h2>${specialofferContainer.heading1}</h2>
                <h3>${specialofferContainer.heading2}</h3>
                <p>${specialofferContainer.para}</p>
            </div>
        `;
    });
}

renderContainer(specialofferContainer);
const reviewsContainer = [
    { 
        Image: "assets/review1.png", 
        heading: "I quickly found the right tour for me, <br> but I had a few questions about the <br> hotel, I wrote to tech support and they <br> answered all my questions within an <br> hour. The vacation itself was perfect. <br> Thank you very much. I will come back <br> again and again.",
        para: "Jannike Borg, <span>Publisher</span>",
    },
    { 
        Image: "assets/review2.png", 
        heading: "I quickly found the right tour for me, <br> but I had a few questions about the <br> hotel, I wrote to tech support and they <br> answered all my questions within an <br> hour. The vacation itself was perfect. <br> Thank you very much. I will come back <br> again and again.",
        para: "LeBron Durant,<span>Flight attendant</span>",
    },
    { 
        Image: "assets/review3.png", 
        heading: "I quickly found the right tour for me, <br> but I had a few questions about the <br> hotel, I wrote to tech support and they <br> answered all my questions within an <br> hour. The vacation itself was perfect. <br> Thank you very much. I will come back <br> again and again.",
        para: "Kaarel Piho,<span>Chiropodist</span>",
    },
    
];

const renderReviewer = reviewsContainer => {
    const container = document.getElementById('reviewsContainer');
    reviewsContainer.forEach(reviewsContainer => {
        container.innerHTML += `
            <div class="reviewer">
                <img src="${reviewsContainer.Image}" alt="">
                <h2>${reviewsContainer.heading}</h2>
                <p>${reviewsContainer.para}</p>
            </div>
        `;
    });
}

renderReviewer(reviewsContainer);