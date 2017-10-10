function playSound (e) {
  const audioKey = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const drumKey = document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);
  if(!audioKey) return;
  audioKey.currentTime = 0;
  audioKey.play();
  drumKey.classList.add('playing');
}

function removeTransition (e) {
  if(e.propertyName !== 'transform') return; // Hoppa över det om det inte är en transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
