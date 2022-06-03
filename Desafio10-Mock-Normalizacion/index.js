import { faker } from '@faker-js/faker';
faker.locale = 'es'

import { writeFile } from 'fs'

const productoRandom = faker.commerce.productDescription();
const precioRandom = faker.commerce.price();
const fotoRandom = faker.image.avatar();

let str = 'NOMBRE;PRECIO;FOTO;\n'

for (let i = 0; i < 100; i++) {
    str += productoRandom +
        ';' + precioRandom +
        ';' + fotoRandom +
        ';' 
        '\n'
}

writeFile('./api/productos-test', str, err => {
    if (err) console.log(err);
    console.log('archivo guardado')
})