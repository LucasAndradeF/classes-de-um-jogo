class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack = "";

    switch (this.type) {
      case "mago":
        attack = "magia";
        break;
      case "guerreiro":
        attack = "espada";
        break;
      case "monge":
        attack = "artes marciais";
        break;
      default:
        attack = "shuriken";
    }

    console.log(`O ${this.type} atacou usando ${attack}`);
  }
}

const heroOne = new Hero("Neymar JR", 30, "mago");
heroOne.attack();

const heroTwo = new Hero("Cristiano Ronaldo", 38, "guerreiro");
heroTwo.attack();

const heroThree = new Hero("Lionel Messi", 36, "ninja");
heroThree.attack();

const heroFour = new Hero("Ronaldinho Gaúcho", 40 , "monge");
heroFour.attack();
