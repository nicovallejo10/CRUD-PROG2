let registros = obtenerRegistrosGuardados() || [];

function agregarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const dni = document.getElementById("dni").value;
    const pais = document.getElementById("pais").value;
    const estado = document.getElementById("estado").value;
    const fecha = document.getElementById("fecha").value;

    if (nombre && email && telefono && dni && pais && estado && fecha) {
        const nuevoRegistro = {
            nombre,
            email,
            telefono,
            dni,
            pais,
            estado,
            fecha
        };

        registros.push(nuevoRegistro);
        guardarRegistros(registros);
        mostrarRegistros();
        limpiarFormulario();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
window.onload = mostrarRegistros();
function mostrarRegistros() {
    const tablaBody = document.getElementById("tabla-body");
    tablaBody.innerHTML = "";

    registros.forEach((registro, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${registro.nombre}</td>
            <td>${registro.email}</td>
            <td>${registro.telefono}</td>
            <td>${registro.dni}</td>
            <td>${(registro.pais === '1') ? 'Masculino' : 'Femenino'}</td>
            <td>${getEspecialista(registro.estado)}</td>
            <td>${registro.fecha}</td>
            <td>
                <button onclick="editarRegistro(${index})">Editar</button>
                <button onclick="eliminarRegistro('${registro.email}')">Eliminar</button>
            </td>
        `;
        tablaBody.appendChild(fila);
    });
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("pais").value = "1";
    document.getElementById("estado").value = "1";
    document.getElementById("fecha").value = "";
}

function editarRegistro(index) {
    const registroEditado = registros[index];

    document.getElementById("nombre").value = registroEditado.nombre;
    document.getElementById("email").value = registroEditado.email;
    document.getElementById("telefono").value = registroEditado.telefono;
    document.getElementById("dni").value = registroEditado.dni;
    document.getElementById("pais").value = registroEditado.pais;
    document.getElementById("estado").value = registroEditado.estado;
    document.getElementById("fecha").value = registroEditado.fecha;

    registros = registros.filter((registro, i) => i !== index);

    guardarRegistros(registros);
    mostrarRegistros();
}

function eliminarRegistro(email) {
    registros = registros.filter((registro) => registro.email !== email);
    guardarRegistros(registros);
    mostrarRegistros();
}

function getEspecialista(valor) {
    switch (valor) {
        case '1':
            return 'Clinico';
        case '2':
            return 'Odontologico';
        case '3':
            return 'Cardiologo';
        case '4':
            return 'Endocrinologa';
        case '5':
            return 'Pediatra';
        default:
            return '';
    }
}

function guardarRegistros(registros) {
    localStorage.setItem('registros', JSON.stringify(registros));
}

function obtenerRegistrosGuardados() {
    const registrosGuardados = localStorage.getItem('registros');
    return registrosGuardados ? JSON.parse(registrosGuardados) : null;
}

