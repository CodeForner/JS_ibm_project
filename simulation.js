const button = document.getElementById('butsim');

button.addEventListener('click', function() {
  const gifImage = document.getElementById('gif-image');
  const staticImage = document.getElementById('static-image');
  const simular = document.getElementsByClassName('simular')[0];

  if (button.textContent === 'Start') {
    

    staticImage.style.zIndex = -1;
    gifImage.style.opacity = 1;
    staticImage.style.opacity = 0;
    button.textContent = 'Stop';

    //Reseteamos el GIF
    const gifSrc = gifImage.src;
    gifImage.src = '';
    gifImage.src = gifSrc;
  } else {
    //Reseteamos al estado inicial
    gifImage.style.zIndex = 2;
    staticImage.style.opacity = 1;
    gifImage.style.opacity = 0;
    button.textContent = 'Start';

    
    const gifSrc = gifImage.src;
    gifImage.src = '';
    gifImage.src = gifSrc;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit').addEventListener('click', function() {
      let nameInput = document.getElementById("name2").value;
      let messageInput = document.getElementById('message').value;
      
      //Comprobamos que haya puesto el nombre
      if (nameInput === "") {
        alert("Name is required to submit a recommendation.");
        return;
    }

      //Creamos una nueva recomendación.
      const recommendationDiv = document.createElement('div');
      //Aquí escribimos el contenido directamente, como si fuera una string
      const recommendationContent = `
          ${messageInput ? messageInput : 'No message provided.'}
          <span class="author">Author: ${nameInput}</span>
      `;
      recommendationDiv.innerHTML = recommendationContent;

      //
      document.querySelector('.reco').appendChild(recommendationDiv);

      //Limpiamos el contenido del elemento para reiniciar el estado
      document.getElementById('name2').value = '';
      document.getElementById('message').value = '';
  });
});


