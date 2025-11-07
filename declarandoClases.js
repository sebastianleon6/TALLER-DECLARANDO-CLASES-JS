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


/// Ejercicio 2: Sistema de empleados ///

// Clase base
class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }

  obtenerDetalles() {
    return `Empleado: ${this.nombre}, Edad: ${this.edad}, Salario: $${this.calcularSalario()}`;
  }
}


class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase); 
    this.bonificacion = bonificacion;
  }


  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }

  obtenerDetalles() {
    return `Gerente: ${this.nombre}, Edad: ${this.edad}, Salario total: $${this.calcularSalario()} (Base: $${this.salarioBase}, Bonificación: $${this.bonificacion})`;
  }
}


class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }

  obtenerDetalles() {
    return `Desarrollador: ${this.nombre}, Edad: ${this.edad}, Lenguaje: ${this.lenguaje}, Salario: $${this.calcularSalario()}`;
  }
}


const empleado1 = new Empleado("Ana", 30, 2000);
const gerente1 = new Gerente("Luis", 40, 3000, 1000);
const dev1 = new Desarrollador("Sebastian", 25, 2500, "JavaScript");


console.log(empleado1.obtenerDetalles());
console.log(gerente1.obtenerDetalles());
console.log(dev1.obtenerDetalles());

