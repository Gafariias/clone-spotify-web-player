const audio = document.querySelector('#audio')        
const playBtn = document.querySelector('#play');       
const nextBtn = document.querySelector('#next');       
const prevBtn = document.querySelector('#prev');       
const containerProgresso = document.querySelector('#container-progresso')
const progressoBarra = document.querySelector('#progressoBarra')
const playertitulo = document.querySelector('.playertitulo');
const playerArtista = document.querySelector('.playerArtista');
const playerCover = document.querySelector('.playerCover');
const momento = document.querySelector('#songMoment');
const duracao = document.querySelector('#songDuration');
const volumeContainer = document.querySelector('#volumeBar');
const volumeBar = document.querySelector('#volume')

class Musica {
    constructor(titulo, artista,  path) {
        this.titulo = titulo;
        this.artista = artista;
        this.path = path;
    }
}

export const index = {
    i: 0
}

//Arrays de dados
const musicas = ["A moment", "Paris Gipsy Swing", "SALSA TRAP", "Silky"];
const artistas = ["Another day", "Dieter van der Western", "Caslo", "Alex Figueira"];
const caminhos = ["A moment", "Paris Gipsy Swing", "SALSA TRAP", "Silky"];

export class Player {

    //Funções
    carregarMusica() {
        
        var musica = new Musica(musicas[index.i], artistas[index.i], caminhos[index.i]);
        document.querySelector('aside').style.display = "flex"
        document.querySelector('#navPlaylists').style.height = "28vh"
        document.querySelector('#mainContent').style.paddingBottom = "120px"

        playertitulo.innerHTML = musica.titulo
        playerArtista.innerHTML = musica.artista;
        playerCover.src = `./Images/covers/${musica.path}.jfif`
        audio.src = `./Music/${musica.path}.mp3`
    }

    tocarMusica() {
        playBtn.classList.add('isPlay');
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        document.querySelector('.play').style.marginLeft = "0px";

        audio.play();
    }

    pausarMusica() {
        playBtn.classList.remove('isPlay');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        document.querySelector('.play').style.marginLeft = "3px";

        audio.pause();
    }

    updateProgress() {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const progressoPorcent = (currentTime / duration) * 100;
        progressoBarra.style.width = `${progressoPorcent}%`

        //TimeStamp do momento atual da musica
        let minutoAtual = Math.floor(audio.currentTime / 60);
        let segundoAtual = Math.floor(audio.currentTime % 60);
        if (segundoAtual < 10) {
            momento.innerHTML = `${minutoAtual}:0${segundoAtual}`
        } else {
            momento.innerHTML = `${minutoAtual}:${segundoAtual}`
        }

        //TimeStamps do tempo total da musica
        let minutoTotal = Math.floor(audio.duration / 60);
        let segundoTotal = Math.floor(audio.duration % 60);
        if (segundoTotal < 10) {
            duracao.innerHTML = `${minutoTotal}:0${segundoTotal}`
        } else {
            duracao.innerHTML = `${minutoTotal}:${segundoTotal}`
        }
    }

    updateVolume() {
        const volumeMax = 1.0;
        const volumeAtual = audio.volume;
        const porcentVolume = (volumeAtual / volumeMax) * 100;
        volumeBar.style.width = `${porcentVolume}%`;
    }

    setVolume(e) {
        let sobra = e.target.getBoundingClientRect();
        const width = this.clientWidth
        const clickX = e.clientX - sobra.left;
        audio.volume = (clickX / width) 
    }

    setProgress(e) {
        let sobra = e.target.getBoundingClientRect();

        const width = this.clientWidth
        const clickX = e.clientX - sobra.left;
        const duration = audio.duration

        audio.currentTime = (clickX / width) * duration
    }
}

const player = new Player();

//Event Listeners
//Tocar / Pausar a musica
playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.classList.contains('isPlay');

    if (isPlaying) {
        player.pausarMusica();
    } else {
        player.tocarMusica();
    }
})

//Voltar / Passar a musica
prevBtn.addEventListener('click', () => {
    index.i--

    if (index.i < 0) {
        index.i = musicas.length - 1;
    }

    player.carregarMusica()
    player.tocarMusica()
});
nextBtn.addEventListener('click', () => {
    index.i++

    if (index.i > musicas.length - 1) {
        index.i = 0;
    }

    player.carregarMusica()
    player.tocarMusica()
});

//Atualizar a barra de progresso
audio.addEventListener('timeupdate', player.updateProgress);

//Atualizar e interagir com o volume
audio.addEventListener('timeupdate', player.updateVolume);
volumeContainer.addEventListener('click', player.setVolume);

//Interagir com a barra de progresso
containerProgresso.addEventListener('click', player.setProgress) 
containerProgresso.addEventListener('mouseover', () => {
    progressoBarra.style.backgroundColor = '#1ed760';
})
containerProgresso.addEventListener('mouseout', () => {
    progressoBarra.style.backgroundColor = 'white';
})

//Terminar a musica pular para a proxima
audio.addEventListener('ended',  () => {
    index.i++

    if (index.i > musicas.length - 1) {
        index.i = 0;
    }

    player.carregarMusica()
    player.tocarMusica()
})