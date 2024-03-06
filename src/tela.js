const ID_CONTEUDO = "jogo-conteudo";
const ID_BTN_JOGAR = "jogar";
class Tela {
  static obterCodigoHtml(item) {
    return `
        <div class="cartao">
            <img src="${item.img}" name="${item.nome}">
        </div>
        `;
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
}
