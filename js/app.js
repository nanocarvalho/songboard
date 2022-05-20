const keys = Array.from(document.querySelectorAll('.key'))
const btnChaos = document.getElementById('chaos-mode')
let chaosMode = false

window.addEventListener('keydown', play)
btnChaos.addEventListener('click', chaosModeActive)
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
    key.addEventListener('click', playOnTouch)
    key.addEventListener('mouseout', removeClass)
})

function play(event) {
    const actualAudio = this.document.querySelector(`audio[data-key="${event.code}"]`)
    const actualKey =  this.document.querySelector(`.key[data-key="${event.code}"]`)
    if(!actualAudio) return //Stop the function if no audio

    //chaos mode
    if(chaosMode === true) {
        let clone = actualAudio.cloneNode(true) 
        actualAudio.play()
        clone.play()
    } else {
        actualAudio.currentTime = 0 //returns to the start, to repeat the sound
        actualAudio.play()
        actualKey.classList.add('playing')
    }

    console.log(chaosMode)
}

 function playOnTouch(event) {
    let actualKeySelected = this.dataset.key
    const actualAudio = document.body.querySelector(`audio[data-key="${actualKeySelected}"]`)
    if(!actualAudio) return //Stop the function if no audio
 
    //chaos mode
    if(chaosMode === true) {
        let clone = actualAudio.cloneNode(true) 
        actualAudio.play()
        clone.play()
    } else {
        actualAudio.currentTime = 0 //returns to the start, to repeat the sound
        actualAudio.play()
        this.classList.add('playing')
    }

    
}

function removeTransition(event) {
    if(event.propertyName !== 'background-color') return //prevents execution when there's no transition. Remember to change this if the transition type change
    this.classList.remove('playing')
}

function removeClass() {
    //just to eliminate a bug when its remains with the class
    if(this.classList.contains('playing')){
        this.classList.remove('playing')
    } 
}

function chaosModeActive() {

    if(chaosMode === false) {
        chaosMode = true
    } else {
        chaosMode = false
    }

    if(chaosMode === true) {
        this.classList.add('active')
    } else {
        this.classList.remove('active')
    }
}