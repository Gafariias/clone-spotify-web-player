import { Player, index } from "./player.js";

//Obtendo as tags html
const moment = document.querySelector('#tocar-moment-playlist');
const silky = document.querySelector('#tocar-silky-playlist');
const paris = document.querySelector('#tocar-paris-playlist');
const salsa = document.querySelector('#tocar-SALSA-playlist');
const tocarPlaylist = document.querySelector('#tocar-playlist')

//Criando o player
const player = new Player()

//Selecionar as musicas
//One moment
moment.addEventListener('click', () => {
    index.i = 0;
    player.carregarMusica();
    player.tocarMusica();  
})

//Paris
paris.addEventListener('click', () => {
    index.i = 1;
    player.carregarMusica();
    player.tocarMusica();  
})

//SALSA TRAP
salsa.addEventListener('click', () => {
    index.i = 2;
    player.carregarMusica();
    player.tocarMusica();  
})

//Silky
silky.addEventListener('click', () => {
    index.i = 3;
    player.carregarMusica();
    player.tocarMusica();  
})

//Playlist
tocarPlaylist.addEventListener('click', () => {
    index.i = 0;
    player.carregarMusica();
    player.tocarMusica();
})