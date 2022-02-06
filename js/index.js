// Random variable generator
var randomNumber1 = Math.floor(Math.random(6)*6)+1;
var randomNumber2 = Math.floor(Math.random(6)*6)+1;

// Dice image chaneger

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

// Heading changer

if(randomNumber1 == randomNumber2){
  document.querySelector(".h1").innerHTML = "Draw! 🤝";
}else if(randomNumber1 > randomNumber2){
  document.querySelector(".h1").innerHTML = "Player 1 Wins! 💪🏾";
}else if(randomNumber1 < randomNumber2){
  document.querySelector(".h1").innerHTML = "Player 2 Wins! 💪🏾";
}
