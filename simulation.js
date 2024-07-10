const button = document.getElementById('butsim');

button.addEventListener('click', function() {
  const gifImage = document.getElementById('gif-image');
  const staticImage = document.getElementById('static-image');
  const simular = document.getElementsByClassName('simular')[0];

  if (button.textContent === 'Start') {
    // Change to the active state

    staticImage.style.zIndex = -1;
    gifImage.style.opacity = 1;
    staticImage.style.opacity = 0;
    button.textContent = 'Stop';

    // Restart the GIF
    const gifSrc = gifImage.src;
    gifImage.src = '';
    gifImage.src = gifSrc;
  } else {
    // Reset to the initial state
    gifImage.style.zIndex = 2;
    staticImage.style.opacity = 1;
    gifImage.style.opacity = 0;
    button.textContent = 'Start';

    // Restart the GIF (if needed, else leave it as is)
    const gifSrc = gifImage.src;
    gifImage.src = '';
    gifImage.src = gifSrc;
  }
});

const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
  window.alert("You have submitted a recommendation!");
});
