class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela;
    // caminho relativo ao index.html
    this.heroisIniciais = [
      { img: "./icons/aquaman.png", nome: "aquaman" },
      { img: "./icons/batman.png", nome: "batman" },
      { img: "./icons/captainamerican.png", nome: "captainamerican" },
      { img: "./icons/captainmarvel.png", nome: "captainmarvel" },
      { img: "./icons/deadpool.png", nome: "deadpool" },
      { img: "./icons/fantasticfour.png", nome: "fantasticfour" },
      { img: "./icons/flash.png", nome: "flash" },
      { img: "./icons/greenlantern.png", nome: "greenlantern" },
      { img: "./icons/hankman.png", nome: "hankman" },
      { img: "./icons/ironfirst.png", nome: "ironfirst" },
      { img: "./icons/ironman.png", nome: "ironman" },
      { img: "./icons/loki.png", nome: "loki" },
      { img: "./icons/robin.png", nome: "robin" },
      { img: "./icons/shield.png", nome: "shield" },
      { img: "./icons/spiderman.png", nome: "spiderman" },
      { img: "./icons/superman.png", nome: "superman" },
      { img: "./icons/thepunisher.png", nome: "thepunisher" },
      { img: "./icons/venom.png", nome: "venom" },
      { img: "./icons/wonderwoman.png", nome: "wonderwoman" },
      { img: "./icons/xman.png", nome: "xman" },
    ];
    this.iconePadrao = "./icons/random.png";
    this.heroisEscondidos = [];
    this.heroisEscondidos = [];
    this.heroisSelecionados = [];
  }
  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais);
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
    this.tela.configurarBotaoVeridicarSelecao(this.verificarSelecao.bind(this));
  }
  embaralhar() {
    const copias = this.heroisIniciais
      // Cria uma cópia para cada Heroi
      .concat(this.heroisIniciais)
      // Cria id's para cada Heroi
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      // Ordena os heróis de forma aleatória
      .sort(() => Math.random() - 0.5);
    this.tela.atualizarImagens(copias);
    // atraso na atualização de tela
    setTimeout(() => {
      this.esconderHerois(copias);
    }, 2000);
  }
  esconderHerois(herois) {
    // Troca as imagens dos herois pelo icone random
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao,
    }));
    this.tela.atualizarImagens(heroisOcultos);
    this.heroisOcultos = heroisOcultos;
  }
  verificarSelecao(id, nome) {
    const item = { id, nome };
    // Veirifica a quantidade de herois selecionados e verifica se deu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length;
    switch (heroisSelecionados) {
      case 0:
        // Adiciona a escolha na lista e espera o próximo click
        this.heroisSelecionados.push(item);
        break;
      case 1:
        // Se a quantidade de itens escolhidos for 1, significa que o usuário só //
        // podde escolher mais um item.
        const [opcao1] = this.heroisSelecionados;
        // zerar a lista de herois selecionados
        this.heroisSelecionados = [];
        if (
          opcao1.nome === item.nome &&
          // Verifica se os ids são diferentes para o usuário não clicar duas vezes na mesma carta
          opcao1.id !== item.id
        ) {
          alert("combinação correta!" + item.nome);
          // Para a execução
          return;
        }
        alert("combinação incorreta!");
        // fim do case!
        break;
    }
  }
  jogar() {
    this.embaralhar();
  }
}
