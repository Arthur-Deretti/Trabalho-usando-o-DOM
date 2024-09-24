const title = document.getElementById("titulo");

const helloBtn = document.getElementById("botao-ola");
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changePhrasesBtn = document.getElementById("btn-mudar-frases");
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Título foi mudado utilizando JS!";
});
changePhrasesBtn.addEventListener("click", function () {
  const frases = document.getElementsByClassName("mensagem2");
  frases[0].textContent = "Pra cima deles mengo!!!";
  frases[1].textContent = "Gabigol é ídolo";
  frases[2].textContent = "A liberta esse ano vem!!!!!";
});