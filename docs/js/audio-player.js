const audio = document.getElementById('audio'),
    audioName = document.getElementById('audio-name'),
    playIcon = document.getElementById('play-icon'),
    pauseIcon = document.getElementById('pause-icon'),
    btnPlay = document.getElementById('btn-play'),
    btnmute = document.getElementById('mute'),
    audioSelector = document.querySelectorAll('.locucion-list a');

for (let i = 0; i < audioSelector.length; i++) {
    audioSelector[i].addEventListener('click', () => {
        const e = audioSelector[i].id
        audio.innerHTML = `<source src="./audio/${e}.ogg" type="audio/ogg">`
        const re = /(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])([a-záéíóúüñ])/g;
        audioName.innerText = e.replaceAll('-', ' ').replace(re, l => l.toUpperCase())
        audio.load();
        audio.play();
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
    });
}
btnPlay.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
        playIcon.style.display = 'block'
        pauseIcon.style.display = 'none'
    } else {
        audio.play();
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
    }
});

btnmute.addEventListener('click', () => {
    audio.muted = !audio.muted
    if (audio.muted) {
        btnmute.innerHTML = `<img src="./img/componets/mute-icon.png">`
    } else {
        btnmute.innerHTML = `<img src="./img/componets/unmute-icon.png">`
    }
})

const concurrentTime = document.getElementById('concurrent-time'),
    duration = document.getElementById('duration');
//console.log(audio.duration);
//console.log(audio.currentTime);