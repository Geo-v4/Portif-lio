//alert("oi")

     const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
     const projetosInativos = document.querySelectorAll('.projeto:not(ativo)');

   botaoMostrarProjetos.addEventListener('click', () => {
    //passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();
    //Objeto2 - esconder o botão de mostrar mais
    //Passo 1 - pegar o botão e esconder ele 
    EsconderBotao();
   });

function EsconderBotao() {
    botaoMotrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}
