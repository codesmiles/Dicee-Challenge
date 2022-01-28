let arrOfImg = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  `images/dice4.png`,
  `images/dice5.png`,
  `images/dice6.png`,
];
const refresh = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const remark = document.querySelector(".remark");
const players = document.querySelectorAll(".player");


players.forEach((player,index) => {player.innerHTML=prompt(`Enter your name Player ${index + 1}`)});
// console.log(players)


refresh.addEventListener("click", () => {
  let random1 = Math.floor(Math.random() * arrOfImg.length);
  let random2 = Math.floor(Math.random() * arrOfImg.length);
  img1.src = arrOfImg[random1];
  img2.src = arrOfImg[random2];

  random1 === random2
    ? (remark.textContent = "Draw")
    : random1 > random2
    ? (remark.textContent = "Player 1 Wins")
    : (remark.textContent = "Player 2 Wins");
    
});
