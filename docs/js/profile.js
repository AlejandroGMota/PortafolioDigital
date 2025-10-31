// Configuración del perfil
const profileConfig = {
    nombre: "Enrique Alejandro García Mota",
    fechaNacimiento: new Date(2001, 2, 20), // Año, mes (0-indexado), día
};

// Función para calcular la edad de forma dinámica
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    // Ajustar si aún no ha cumplido años este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return edad;
}

// Función para inicializar la información del perfil
function inicializarPerfil() {
    const edad = calcularEdad(profileConfig.fechaNacimiento);

    // Actualizar la edad en el elemento correspondiente
    const elementoEdad = document.getElementById('edad-dinamica');
    if (elementoEdad) {
        elementoEdad.textContent = edad;
    }

    // Actualizar el año de experiencia si existe
    const anioInicio = 2019; // Ajusta esto según cuando empezaste a programar
    const aniosExperiencia = new Date().getFullYear() - anioInicio;
    const elementoExperiencia = document.getElementById('anos-experiencia');
    if (elementoExperiencia) {
        elementoExperiencia.textContent = aniosExperiencia;
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarPerfil);
} else {
    inicializarPerfil();
}
