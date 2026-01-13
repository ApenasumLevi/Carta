function abrirCarta() {
  trocarTela("tela-carta");
}

function recusar() {
  trocarTela("tela-nao");
}

function voltar() {
  trocarTela("tela-inicial");
}

function trocarTela(id) {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });
  document.getElementById(id).classList.add("ativa");
}
