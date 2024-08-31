const inputBox = document.getElementById("input-box");
const botao = document.getElementById("botao");
const listContainer = document.getElementById("list-container");
const meuFormulario = document.getElementById("meuFormulario");
const nenhumaTarefa = document.getElementById("nenhumaTarefaID");
const check = document.getElementsByClassName("uncheck");
const spanConcluidas = document.getElementById("contagem");
const numerosCriadas = document.getElementById("number-criadas");

var numeroDeConcluidas = 0;
let somaCriadas = 0;
let numeroDeCriadas = 0;

meuFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
});

function addTask() {
  if (inputBox.value === "") {
    alert("Você precisa informar qual é sua tarefa!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<p>${inputBox.value}</p>`;
    li.classList.add("card-concluir");
    li.id = "check";
    li.setAttribute('onclick','removecheck');
    listContainer.appendChild(li);






    let span = document.createElement("span");
    span.innerHTML = '<img src="css/assets/position-assets/trashRegular.png" >';
    li.appendChild(span);
    nenhumaTarefa.classList.add("display-none");
  }


  inputBox.value = "";
}



listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("card-concluido");

      numeroDeConcluidas++;
      somaConcluidas = numeroDeConcluidas;
      spanConcluidas.textContent = `${somaConcluidas}`;


    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();

      
      numeroDeConcluidas--;
      somaConcluidas = numeroDeConcluidas;
      spanConcluidas.textContent = `${somaConcluidas}`;

      numeroDeCriadas--;
      somaCriadas = numeroDeCriadas;
      numerosCriadas.textContent = `${somaCriadas}`;

    }
  },
  false
);


// Add numeros de criadas & Removidas

botao.addEventListener("click", function () {
  numeroDeCriadas++;
  somaCriadas = numeroDeCriadas;
  numerosCriadas.textContent = `${somaCriadas}`;
});






// como adiicionar o check assim com createElement igual a imagem do trash? Ai ao click add 1, ao  unclick -1. ????
// Corrigir o botão delete
// Concluidas display, a ul j´´a seleciona apenas nas li
