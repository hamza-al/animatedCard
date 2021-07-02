
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const cart = document.querySelector(".cart");
const plus = document.querySelector(".add");
const minus = document.querySelector('.minus');
const count = document.querySelector(".count");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(125px)";
    sneaker.style.transform = "translateZ(100px) ";
    description.style.transform = "translateZ(50px)";
    cart.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    cart.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

plus.addEventListener('click', (e) => {
    let number = count.innerHTML;
    number++;
    count.innerHTML = number;
});


minus.addEventListener('click', (e) => {
    let number = count.innerHTML;
    if (number > 0) {
        number--;
        count.innerHTML = number;
    }
    else {

    }
});