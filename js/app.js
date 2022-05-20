const keys = Array.from(document.querySelectorAll('.key'))

window.addEventListener('keydown', play)

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
    key.addEventListener('click', playOnTouch)
    key.addEventListener('mouseout', removeClass)
})

function play(event) {
    const actualAudio = this.document.querySelector(`audio[data-key="${event.code}"]`)
    const actualKey =  this.document.querySelector(`.key[data-key="${event.code}"]`)
    if(!actualAudio) return //Stop the function if no audio
    actualAudio.currentTime = 0 //returns to the start, to repeat the sound
    actualAudio.play()
    actualKey.classList.add('playing')
}

 function playOnTouch(event) {
    let actualKeySelected = this.dataset.key
    const actualAudio = document.body.querySelector(`audio[data-key="${actualKeySelected}"]`)
    if(!actualAudio) return //Stop the function if no audio
    actualAudio.currentTime = 0 //returns to the start, to repeat the sound
    actualAudio.play()
    this.classList.add('playing')
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