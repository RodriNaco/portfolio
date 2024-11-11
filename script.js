document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    if (modeToggle) {
        if (localStorage.getItem('mode') === 'light') {
            body.classList.add('light-mode');
        }

        modeToggle.addEventListener('click', () => {
            const isLight = body.classList.toggle('light-mode');
            localStorage.setItem('mode', isLight ? 'light' : 'dark');
            console.log("Modo actual:", isLight ? "claro" : "oscuro");
        });
    } 
});

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioConsulta');

    const regexNombreApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexEdad = /^(?:[1-9][0-9]?|1[01][0-9]|120|130)$/;
    const regexTelefono = /^[0-9]{8,12}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validarCampo(campo, regex) {
        if (campo.value.trim() === '') {
            campo.style.border = '2px solid red';
            return false;
        } else if (regex && !regex.test(campo.value.trim())) {
            campo.style.border = '2px solid red';
            return false;
        } else {
            campo.style.border = '2px solid green';
            return true;
        }
    }

    function agregarEventosDeValidacion(campo, regex) {
        campo.addEventListener('blur', function() {
            validarCampo(campo, regex);
        });
    }

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const correo = document.getElementById('correoElectronico');
    const telefono = document.getElementById('telefono');
    const consulta = document.getElementById('consulta');

    agregarEventosDeValidacion(nombre, regexNombreApellido);
    agregarEventosDeValidacion(apellido, regexNombreApellido);
    agregarEventosDeValidacion(edad, regexEdad);
    agregarEventosDeValidacion(correo, regexCorreo);
    agregarEventosDeValidacion(telefono, regexTelefono);
    agregarEventosDeValidacion(consulta);

    formulario.addEventListener('submit', function(event) {
        const nombreValido = validarCampo(nombre, regexNombreApellido);
        const apellidoValido = validarCampo(apellido, regexNombreApellido);
        const edadValida = validarCampo(edad, regexEdad);
        const correoValido = validarCampo(correo, regexCorreo);
        const telefonoValido = validarCampo(telefono, regexTelefono);
        const consultaValida = validarCampo(consulta);

        if (!nombreValido || !apellidoValido || !edadValida || !correoValido || !telefonoValido || !consultaValida) {
            event.preventDefault();
            alert('Por favor, corrige los campos en rojo antes de enviar el formulario.');
        }
        else{
            alert('Formulario enviado correctamente')
        }
    });
});