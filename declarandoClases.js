///  Ejercicio 1: Sistema básico de vehículos ///


class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
}


class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
  }
}


class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
  }
}


const coche1 = new Coche("Toyota", "Corolla", 2020, 4);
const moto1 = new Moto("Yamaha", "R6R", 2022, 599);


console.log("Detalles del coche:");
console.log(coche1.obtenerDetalles());

console.log("Detalles de la moto:");
console.log(moto1.obtenerDetalles());
