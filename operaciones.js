const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    const id = Math.floor(Math.random() * 100).toString();

    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.error('Ingresa correctamente todos los datos');
        return;
    }

    citas.push({ id, nombre, edad, tipo, color, enfermedad });
    guardar(citas);
    console.log('Datos registrados con éxito:', { id, nombre, edad, tipo, color, enfermedad });
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(citas);
};


const guardar = (citas) => {
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
}



module.exports = { registrar, leer };