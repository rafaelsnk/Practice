const text = document.querySelector("h2 a");
console.log(text);

function changetext() { // crei a função
  text.innerHTML = 'Mudei';
}

text.addEventListener('click', changetext); // adicionei o evento.