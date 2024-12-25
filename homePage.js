const main = document.createElement("div");
main.className = "main";

const homePageImg = document.createElement("img");
homePageImg.src = "homePage.png";

const welcomeText = document.createElement("div");
welcomeText.innerHTML = "Welcome to Simon Says!";
welcomeText.id = "welcomeText";

const playButtonForKids = document.createElement("a");
playButtonForKids.innerHTML = "Play For kids!";
playButtonForKids.id = "playButtonForKids";
playButtonForKids.href = "./simon.html";

const playButtonStandart = document.createElement("a");
playButtonStandart.innerHTML = "Play Standart";
playButtonStandart.id = "playButtonStandart";
playButtonStandart.href = "./index.html";

main.appendChild(playButtonStandart);
main.appendChild(playButtonForKids);
main.appendChild(welcomeText);
main.appendChild(homePageImg);
document.getElementById("landingPage").appendChild(main);
