const button = document.getElementById('butsim');

button.addEventListener('click', function() {
  const gifImage = document.getElementById('gif-image');
  const staticImage = document.getElementById('static-image');

  gifImage.style.zIndex = 2;
  staticImage.style.zIndex = 1;
  gifImage.style.opacity = 1;
  staticImage.style.opacity = 0;
});
