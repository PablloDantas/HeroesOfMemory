class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela;
    // caminho relativo ao index.html
    this.heroisIniciais = [
      { img: "./icons/aquaman.png", name: "aquaman" },
      { img: "./icons/batman.png", name: "batman" },
      { img: "./icons/captainamerican.png", name: "captainamerican" },
      { img: "./icons/captainmarvel.png", name: "captainmarvel" },
      { img: "./icons/deadpool.png", name: "deadpool" },
      { img: "./icons/fantasticfour.png", name: "fantasticfour" },
      { img: "./icons/flash.png", name: "flash" },
      { img: "./icons/greenlantern.png", name: "greenlantern" },
      { img: "./icons/hankman.png", name: "hankman" },
      { img: "./icons/ironfirst.png", name: "ironfirst" },
      { img: "./icons/ironman.png", name: "ironman" },
      { img: "./icons/loki.png", name: "loki" },
      { img: "./icons/robin.png", name: "robin" },
      { img: "./icons/shield.png", name: "shield" },
      { img: "./icons/spiderman.png", name: "spiderman" },
      { img: "./icons/superman.png", name: "superman" },
      { img: "./icons/thepunisher.png", name: "thepunisher" },
      { img: "./icons/venom.png", name: "venom" },
      { img: "./icons/wonderwoman.png", name: "wonderwoman" },
      { img: "./icons/xman.png", name: "xman" },
    ];
  }
  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais);
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
  }
  jogar() {
    this.embaralhar();
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
  }
}
