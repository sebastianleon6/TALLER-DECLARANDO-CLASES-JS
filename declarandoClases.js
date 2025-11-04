class Vehiculos {

    constructor(marca, modelo, placa) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log(`El vehículo ${this.marca} está encendido`);
    }
    apagar() {
        this.encendido = false;
        console.log(`El vehículo ${this.marca} está apagado`);
    }

}