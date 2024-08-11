# todolistjs

function addConcluidas () {
  numeroDeConcluidas++;
  somaConcluidas = numeroDeConcluidas;
  numerosConcluidas.textContent = `${somaConcluidas}`;
};

addConcluidas()


-------
ul li span:hover {
    background-color: #edeef0;
    background-image: url(assets/position-assets/hover-delete.png);
    background-size: cover;
    width: 30px;
    height: 30px;
    right: 7.3px;
    top: 22px;
    background-position: center;
    z-index: 2;

   2

}

ul li span img:hover {
    opacity: 0.01;
    width: 50px;
    height: 50px;
    top: -20px;
    z-index: -1;
}