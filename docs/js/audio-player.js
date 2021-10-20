const audio = document.getElementById('audio'),
    audioName = document.getElementById('audio-name'),
    playIcon = document.getElementById('play-icon'),
    pauseIcon = document.getElementById('pause-icon'),
    btnPlay = document.getElementById('btn-play'),
    btnmute = document.getElementById('mute'),
    audioSelector = document.querySelectorAll('.locucion-list a'),
    playerProgress = document.getElementById('player-level'),
    volumen=document.getElementById('volume-slider'),
    duration = document.getElementById('duration');



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
        setTimeout(() => {
            audioLarge()
        }, 70)
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
audio.addEventListener('timeupdate', () => {
    concurrentTime(toMinutesFormate(audio.currentTime))
    if (audio.currentTime == audio.duration) {
        playIcon.style.display = 'block'
        pauseIcon.style.display = 'none'
    }
})
playerProgress.addEventListener('input',(ev)=>{
    
    audio.currentTime=(playerProgress.value/100)* audio.duration

})
volumen.addEventListener('input',(ev)=>{
    audio.volume = (ev.currentTarget.value/100);
    console.log(ev.currentTarget.value);
})
function concurrentTime(now) {
    const concurrentTime = document.getElementById('concurrent-time'),
        percent = (audio.currentTime / audio.duration) * 100;
    if (percent>0) {
        playerProgress.value = percent;
        concurrentTime.innerText = now;
    }
}

function audioLarge() {
    duration.innerText = toMinutesFormate(audio.duration)
    playerProgress.value=0
}

function toMinutesFormate(secs) {
    let minutes;
    secs = Math.round(secs)
    if (secs < 10) {
        minutes = '00:0' + secs.toString();
    } else if (secs < 60) {
        minutes = '00:' + secs.toString();
    } else if (secs < 3600) {
        minutes = 'on work'
    } else(
        minutes = '00:00'
    )

    return minutes;
}