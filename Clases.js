class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = []; 
    };

    getFullName () {
        return `${this.nombre} ${this.apellido}`
    };
    addMascota (mascotas) {
        
        return `${this.mascotas}`;

    };
};

const usuario1 = new Usuario ('Gerónimo', 'Iruleguy', ['Harry Potter'] , ['Perro'])

console.log(usuario1);

console.log(usuario1.getFullName());

const mascotas = [];    
mascotas.push('Perro');
console.log(mascotas);


console.log(usuario1.addMascota());





