const inputBox = document.getElementById("input-box");
const botao = document.getElementById("botao")
const listContainer = document.getElementById("list-container");
const meuFormulario = document.getElementById("meuFormulario");
const nenhumaTarefa = document.getElementById("nenhumaTarefaID");




const numerosCriadas = document.getElementById("number-criadas");
let somaCriadas = 0;
let numeroDeCriadas = 0;






meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault()
})

function addTask() {
  if(inputBox.value === ''){
    alert("Você precisa informar qual é sua tarefa!")
  }
  else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    li.classList.add('card-concluir')
    li.id = 'check';
    listContainer.appendChild(li);


    let span = document.createElement("span");
    span.innerHTML = '<img src="css/assets/position-assets/trashRegular.png" >'
    li.appendChild(span);
    nenhumaTarefa.classList.add('display-none');

  }

  
  inputBox.value = "";
  
}








listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI") {
      e.target.classList.toggle("card-concluido")
      
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();

    }
}, false);

// Add numeros de criadas & Removidas

botao.addEventListener('click', 
  function() {
    numeroDeCriadas++;
    somaCriadas = numeroDeCriadas;
    numerosCriadas.textContent = `${somaCriadas}`;
  }
)


const li2 = document.querySelector('.tarefas-display')
let spanConcluidas = document.getElementById("contagem")
var numeroDeConcluidas = 0;

li2.addEventListener('click', 
  function() {
    numeroDeConcluidas++/2;
    somaConcluidas = numeroDeConcluidas;
    spanConcluidas.textContent = `${somaConcluidas}`;
  }
)



 
  
















