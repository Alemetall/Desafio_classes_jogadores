// Definição da classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método de ataque
    atacar() {
      let ataque;
  
      // Definindo o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const mago = new Heroi('Gandalf', 150, 'mago');
  const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  const monge = new Heroi('Bruce Lee', 40, 'monge');
  const ninja = new Heroi('Hanzo', 30, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();