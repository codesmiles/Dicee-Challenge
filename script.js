let arrOfImg = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    `images/dice4.png`,
    `images/dice5.png`,
    `images/dice6.png`
]

const refresh =document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");


refresh.addEventListener("click", () => {
    let random1 = Math.floor(Math.random() * arrOfImg.length);
    let random2 = Math.floor(Math.random() * arrOfImg.length);
    img1.src = arrOfImg[random1];
    img2.src = arrOfImg[random2];
});