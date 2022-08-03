import { Player, index } from "./player.js";

//Obtendo as tags html
const horarioHTML = document.getElementById('horario');
const moment = document.querySelector('#moment');
const silky = document.querySelector('#silky');
const paris = document.querySelector('#paris');
const salsa = document.querySelector('#SALSA');

//Criando o player
const player = new Player();

//Mudando  mensagem de boas vindas conforme o horario
//Obtendo o horario atual
var d = new Date();
var hora = d.getHours();

//Aplicando a alteração ao elemento HTML
if (hora > 8 && hora < 12) {
    horarioHTML.innerHTML = "Bom dia";
} else if (hora >= 12 && hora < 18) {
    horario.innerHTML = 'Boa tarde';
}
else {
    horario.innerHTML = 'Boa noite';
}

//Selecionar as musicas
//One moment
moment.addEventListener('mouseover', () => {
    document.getElementById('tocar-moment').style.display = "block"
})
moment.addEventListener('mouseout', () => {
    document.getElementById('tocar-moment').style.display = "none"
})
moment.addEventListener('click', () => {
    index.i = 0
    player.carregarMusica()
    player.tocarMusica();  
})

//Paris
paris.addEventListener('mouseover', () => {
    document.getElementById('tocar-paris').style.display = "block"
})
paris.addEventListener('mouseout', () => {
    document.getElementById('tocar-paris').style.display = "none"
})
paris.addEventListener('click', () => {
    index.i = 1
    player.carregarMusica()
    player.tocarMusica();  
})

//SALSA TRAP
salsa.addEventListener('mouseover', () => {
    document.getElementById('tocar-SALSA').style.display = "block"
})
salsa.addEventListener('mouseout', () => {
    document.getElementById('tocar-SALSA').style.display = "none"
})
salsa.addEventListener('click', () => {
    index.i = 2
    player.carregarMusica()
    player.tocarMusica();   
})

//Silky
silky.addEventListener('mouseover', () => {
    document.getElementById('tocar-silky').style.display = "block"
})
silky.addEventListener('mouseout', () => {
    document.getElementById('tocar-silky').style.display = "none"
})
silky.addEventListener('click', () => {
    index.i = 3
    player.carregarMusica()
    player.tocarMusica();  
})