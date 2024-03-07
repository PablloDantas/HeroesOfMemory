const util = Util;
const ID_CONTADOR = "contador";
const ID_CONTEUDO = "jogo-conteudo";
const ID_BTN_JOGAR = "jogar";
const ID_RESULTADO = "resultado";
const MENSAGENS = {
  inicio: {
    texto: "ESCOLHA DUAS CARTAS 👇",
    classe: "inicio",
  },
  sucesso: {
    texto: "COMBINAÇÃO CORRETA 🥳",
    classe: "acertou",
  },
  erro: {
    texto: "COMBINAÇÃO INCORRETA 🤔",
    classe: "errou",
  },
};

class Tela {
  static obterCodigoHtml(item) {
    return `
        <div class="cartao" onclick="window.verificarSelecao('${item.id}','${item.nome}')">
            <img src="${item.img}" name="${item.nome}">
        </div>
        `;
  }
  static configurarBotaoVeridicarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick;
  }
  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO);
    conteudo.innerHTML = codigoHtml;
  }
  static gerarStringHTMLPelaImagem(itens) {
    // para cada item da lista, vai executar a função código HTML
    // ao final, concatena tudo em uma única stirng
    // tranforma de Array para String
    return itens.map(Tela.obterCodigoHtml).join("");
  }
  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens);
    Tela.alterarConteudoHTML(codigoHtml);
  }
  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR);
    btnJogar.onclick = funcaoOnClick;
  }
  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi);
    // Retorna para o elemento a imagem inicial do heroi
    elementosHtml.forEach((item) => (item.src = img));
  }
  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_RESULTADO);
    if (sucesso) {
      elemento.classList.remove(MENSAGENS.inicio.classe);
      elemento.classList.remove(MENSAGENS.erro.classe);
      elemento.classList.add(MENSAGENS.sucesso.classe);
      elemento.innerText = MENSAGENS.sucesso.texto;
    } else {
      elemento.classList.remove(MENSAGENS.inicio.classe);
      elemento.classList.remove(MENSAGENS.sucesso.classe);
      elemento.classList.add(MENSAGENS.erro.classe);
      elemento.innerText = MENSAGENS.erro.texto;
    }
    await util.timeout(1000);
    elemento.classList.remove(MENSAGENS.sucesso.classe);
    elemento.classList.remove(MENSAGENS.erro.classe);
    elemento.classList.add(MENSAGENS.inicio.classe);
    elemento.innerText = MENSAGENS.inicio.texto;
  }
  static iniciarContador() {
    let contarAte = 5;
    const elementoContador = document.getElementById(ID_RESULTADO);
    const identificadorNoTexto = "$$contador";
    const textoPadrao = `Començando em ${identificadorNoTexto} segundos...`;
    const atualizarTexto = () =>
      (elementoContador.innerHTML = textoPadrao.replace(
        identificadorNoTexto,
        contarAte--
      ));
    atualizarTexto();
    const idDoIntervalo = setInterval(atualizarTexto, 1000);
    return idDoIntervalo;
  }
  static limparContador(idDoIntervalo) {
    clearInterval(idDoIntervalo);
    const elemento = document.getElementById(ID_RESULTADO);
    elemento.innerText = MENSAGENS.inicio.texto;
  }
}
