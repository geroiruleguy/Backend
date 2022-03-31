class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas; 
    }

    getFullName () {
        console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascotas(mascota) {
        this.mascotas.push(mascota)
        console.log(`La mascota "${mascota}" se añado correctamente`)
    }
    countMascotas () {
        console.log(this.mascotas.length);
    }
    addBook(nombre, autor) {
        this.libros.push({nombre: 'Harry Potter', autor: 'J.K. Rowling' })
    }
    getBookNames() {
        const arrayBookNames = [];
        for (const libro in this.libros){
            arrayBookNames.push(this.libros[libro]['Harry Potter'])
        }
        console.log(arrayBookNames);
    }
};















