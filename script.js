const inputFacile = document.querySelector(".input-facile");
const inputDifficile = document.querySelector(".input-difficile");
const inputMoyen = document.querySelector(".input-moyen");
const inputNumber = document.querySelector(".input-number");

const textFacile = document.querySelector(".text-facile");
const textMoyen = document.querySelector(".text-moyen");
const textDifficile = document.querySelector(".text-difficile");
const textDesole = document.querySelector(".text-desole");

const labelFacile = document.querySelector("#label-facile");
const labelMoyen = document.querySelector("#label-moyen");
const labelDifficile = document.querySelector("#label-difficile");

const btnReessayez = document.querySelector(".button-reessayez");
const btnJeu = document.querySelector(".btn-jeu");
const btnAgain = document.querySelector(".btn-again");
const btnSubmit = document.querySelector(".btn-submit");
const btnDeconnect = document.querySelector(".btn-deconnect");

const icon = document.querySelector(".icon");
const essai = document.querySelector(".essai");
const reussi = document.querySelector(".reussi");
const perdu = document.querySelector(".perdu");
const scoreText = document.querySelector(".score");
const paraNiveau = document.querySelector(".para-niveau");
const prenomIntro = document.querySelector(".prenom-intro");
const prenom = document.querySelector(".prenom");
const section = document.querySelector(".section");
const form = document.querySelector(".form");

let randomNumber;
let nbreEssais;
let nbrePoints;
let level;
let name;

btnReessayez.style.display = "none";
icon.style.display = "none";
btnAgain.style.display = "none";
section.style.display = "none";

if (localStorage.getItem("name")) {
  section.style.display = "block";
  form.classList.remove("d-flex");
  form.classList.add("d-none");
  prenom.innerHTML = localStorage.getItem("name");
}

btnDeconnect.addEventListener("click", (event) => {
  localStorage.removeItem("name");
  window.location.reload();
});

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  section.style.display = "block";
  form.classList.remove("d-flex");
  form.classList.add("d-none");
  prenom.innerHTML = `${prenomIntro.value}`;
  localStorage.setItem("name", prenomIntro.value);
});

inputFacile.addEventListener("click", (event) => {
  textFacile.innerHTML =
    "<p>ENTREZ UN NOMBRE ENTRE 0 et 10 </p> <p>POUR CHAQUE NOMBRE VALIDE VOUS GAGNEZ 1 POINT  </p><p>VOUS AVEZ 3 ESSAIS POUR DEVINER </p>";
  textMoyen.innerHTML = "";
  textDifficile.innerHTML = "";

  labelFacile.style.color = "rgb(110, 129, 41)";
  labelDifficile.style.color = "rgb(200, 255, 18)";
  labelMoyen.style.color = "rgb(200, 255, 18)";

  paraNiveau.innerHTML = "";
  perdu.innerHTML = "";
  textDesole.innerHTML = "";
  essai.innerHTML = "";
  icon.style.display = "none";
  btnAgain.style.display = "none";
  reussi.innerHTML = "";

  randomNumber = Math.ceil(Math.random() * 10);
  nbreEssais = 3;
  level = "Easy";
  nbrePoints = 1;

  btnReessayez.style.display = "none";

  inputNumber.setAttribute("min", 1);
  inputNumber.setAttribute("max", 10);
});

inputMoyen.addEventListener("click", (event) => {
  textMoyen.innerHTML =
    "<p>ENTREZ UN NOMBRE ENTRE 10 et 100 </p> <p>POUR CHAQUE NOMBRE VALIDE VOUS GAGNEZ 3 POINTS  </p><p>VOUS AVEZ 5 ESSAIS POUR DEVINER </p>";
  textFacile.innerHTML = "";
  textDifficile.innerHTML = "";

  labelFacile.style.color = "rgb(200, 255, 18";
  labelDifficile.style.color = "rgb(200, 255, 18)";
  labelMoyen.style.color = "rgb(110, 129, 41)";

  paraNiveau.innerHTML = "";
  perdu.innerHTML = "";
  textDesole.innerHTML = "";
  essai.innerHTML = "";
  icon.style.display = "none";
  btnAgain.style.display = "none";
  reussi.innerHTML = "";

  randomNumber = Math.ceil(Math.random() * (100 - 10) + 10);
  nbreEssais = 5;
  level = "Medium";
  nbrePoints = 3;

  btnReessayez.style.display = "none";

  inputNumber.setAttribute("min", 10);
  inputNumber.setAttribute("max", 100);
});

inputDifficile.addEventListener("click", (event) => {
  textDifficile.innerHTML =
    "<p>ENTREZ UN NOMBRE ENTRE 100 et 1000 </p> <p>POUR CHAQUE NOMBRE VALIDE VOUS GAGNEZ 5 POINTS  </p><p>VOUS AVEZ 10 ESSAIS POUR DEVINER </p>";
  textFacile.innerHTML = "";
  textMoyen.innerHTML = "";

  labelDifficile.style.color = "rgb(110, 129, 41)";
  labelFacile.style.color = "rgb(200, 255, 18)";
  labelMoyen.style.color = "rgb(200, 255, 18)";

  paraNiveau.innerHTML = "";
  perdu.innerHTML = "";
  textDesole.innerHTML = "";
  essai.innerHTML = "";
  icon.style.display = "none";
  btnAgain.style.display = "none";
  reussi.innerHTML = "";

  randomNumber = Math.ceil(Math.random() * (1000 - 100) + 100);
  nbreEssais = 10;
  level = "Hard";
  nbrePoints = 5;

  btnReessayez.style.display = "none";

  inputNumber.setAttribute("min", 100);
  inputNumber.setAttribute("max", 1000);
});

btnJeu.addEventListener("click", (event) => {
  if (inputNumber.value == randomNumber) {
    reussi.innerHTML = `<p>Vous avez réussi !!</p> <p> Vous gagnez ${nbrePoints} point(s)</p>`;
    textFacile.innerHTML = "";
    textMoyen.innerHTML = "";
    textDifficile.innerHTML = "";
    textDesole.innerHTML = "";
    icon.innerHTML = "";
    essai.innerHTML = "";
    btnReessayez.style.display = "none";
    btnAgain.style.display = "block";
    const audioSuccess = new Audio("success.mp3");
    audioSuccess.play();
    btnAgain.addEventListener("click", (event) => {
      window.location.reload();
    });
    if (inputFacile.checked) {
      scoreText.innerText = parseInt(scoreText.innerText) + 1;
    } else if (inputMoyen.checked) {
      scoreText.innerText = parseInt(scoreText.innerText) + 3;
    } else if (inputDifficile.checked) {
      scoreText.innerText = parseInt(scoreText.innerText) + 5;
    }
  } else {
    nbreEssais--;
    if (nbreEssais > 0) {
      textDesole.innerHTML = "Désolé ce n'est pas le bon nombre!";
      essai.innerHTML = `Il vous reste ${nbreEssais} essai(s)`;
      textFacile.innerHTML = "";
      textMoyen.innerHTML = "";
      textDifficile.innerHTML = "";
      btnReessayez.style.display = "none";
      icon.style.display = "block";
    } else {
      textDesole.innerHTML = "";
      essai.innerHTML = "";
      perdu.innerHTML = "Ohhh Vous avez perdu";
      btnReessayez.style.display = "block";
      icon.style.display = "block";
      const audio = new Audio("game_over.mp3");
      audio.play();
      btnReessayez.addEventListener("click", (event) => {
        window.location.reload();
      });
    }
  }
});
