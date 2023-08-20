export const Exercise = () => {
  class Pokemon {
    health = 100;
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100;
    }

    start() {
      console.log('attack');
      this.health -= 10;
    }
  }

  const pikachu = new Pokemon('pikachu', 'electric');
  console.log(pikachu.start());

  class Rectangle {
    constructor(_width, _height, _color) {
      console.log('Rectangle is being created');

      this.width = _width;
      this.height = _height;
      this.color = _color;
    }

    getArea() {
      return this.width * this.height;
    }
    printSecription() {
      console.log(
        `I am Rectanglw width ${this.width} and height ${this.height}`
      );
    }
  }
  let Rectangle1 = new Rectangle(3, 2, 'blue');
  let Rectangle2 = new Rectangle(10, 5, 'red');
  console.log(Rectangle2.getArea());
  Rectangle1.printSecription();

  class Square {
    constructor(_width) {
      this.witdht = _width;
      this.height = _width;
    }

    get area() {
      return this.width * this.height;
    }
    set area(area) {
      this.width = Math.sqrt(area);
      this.height = this.width;
    }
  }

  let square1 = new Square(10);
  square1.area = 25;

  class Person {
    constructor(_name, _age) {
      this.name = _name;
      this.age = _age;
    }
    describe() {
      console.log(` I am ${this.name} at age ${this.age}`);
    }
  }

  class Programer extends Person {
    constructor(_name, _age, _yearsExp) {
      super(_name, _age);
      this.yearsExp = _yearsExp;
    }
    code() {
      console.log(`${this.name} is coding`);
    }
  }

  const person1 = new Person('Janek', 45);
  const person2 = new Programer('Heniek', 50, 10);
  console.log(person2.code());

  console.log(person1 instanceof Programer);

  class Animal {
    constructor(_name) {
      this.name = _name;
    }
    speak() {
      console.log('animal make a noise');
    }
    getName() {
      return this.name;
    }
  }

  class Dog extends Animal {
    speak() {
      console.log('dog barks');
    }
    animalData() {
      console.log(`To jest jakis ${this.getName()}`);
    }
  }

  const pimpek = new Dog();
  const kot = new Animal();
  const alien = new Dog('Obcy');
  alien.animalData();

  pimpek.speak();
  kot.speak();

  class PrivateClass {
    #accessKey = 777;
    #privateMethod() {
      console.log('sekret');
    }
    getPrivateKey() {
      const hash = this.#accessKey;

      return hash;
    }
  }
  const private1 = new PrivateClass();

  console.log(private1.getPrivateKey());
  class AnimalInheritence {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogInheritence extends AnimalInheritence {
    speak() {
      console.log('Dog barks');
    }
  }

  const dogInheritence = new DogInheritence();
  dogInheritence.speak();

  //kompozycja

  class Autos {
    constructor(_name) {
      this.name = _name;
    }

    wheels() {
      console.log('have wheels');
    }
  }
  class SmallAutos {
    constructor() {
      this.auto = new Autos();
    }

    equipment() {
      this.auto.wheels();
    }
  }

  const smallAuto = new SmallAutos('Audi');
  smallAuto.equipment();

  return <div>OOP</div>;
};
