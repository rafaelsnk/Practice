const galeria = document.querySelector('.galeria')
console.log(galeria)

function mostrarMensagem(event) {
  switch (event.target.className) {
    case "fox":
      alert('Você clicou na Raposa');
      break;

    case "tiger":
      alert('Você clicou no Tigre');
      break;

    case "wolf":
      alert('Você clicou no Lobo');
      break;
  }

}
addEventListener('click', mostrarMensagem);
