// Obtener referencias a los elementos del DOM
const messagesDiv = document.querySelector('.chat-messages');
const questionInput = document.querySelector('.chat-input textarea');
const sendBtn = document.querySelector('.chat-input .send-button');

// Limpiar los mensajes de ejemplo
messagesDiv.innerHTML = '';

// Añadir mensaje de bienvenida
agregarMensaje('Bienvenido al asistente del módulo de Programación. Puedo responder preguntas sobre todo el temario. ¿En qué puedo ayudarte?', 'system');

// Función auxiliar para agregar un mensaje al chat (rol puede ser "user", "assistant" o "system")
function agregarMensaje(texto, rol) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${rol}`;

    const p = document.createElement('p');
    p.textContent = texto;
    messageDiv.appendChild(p);

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  // desplazarse al final
}

// Función para obtener el contenido de un fichero de texto
function obtenerContextoPagina(path) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path || 'contexto.txt', false); // Sincrónico para simplificar
    xhr.send();
    if (xhr.status === 200) {
        console.log(xhr.responseText);
        return xhr.responseText;
    } else {
        console.error('Error al cargar el contexto:', xhr.statusText);
        return '';
    }

}

// Manejar el envío de la pregunta
async function enviarPregunta() {
    const pregunta = questionInput.value.trim();
    if (!pregunta) return;

    agregarMensaje(pregunta, 'user');
    questionInput.value = '';

    // Mostrar indicador de carga
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message assistant loading';
    loadingDiv.textContent = 'Pensando...';
    messagesDiv.appendChild(loadingDiv);

    try {
        // Obtener contexto de la página actual
        const contexto = obtenerContextoPagina("/resources/summary/resumen_programacion_UT1.txt");

        // Crear prompt con contexto
        const promptConContexto = [
            {
                role: 'system',
                content: 'Eres un asistente educativo especializado en programación. Responde de manera clara y concisa a las preguntas de los estudiantes basándote en el contexto proporcionado.'
            },
            {
                role: 'user',
                content: `Contexto del material educativo:\n${contexto}\n\nPregunta del estudiante: ${pregunta}`
            }
        ];

        // Llamar a la IA usando puter.ai.chat
        const respuesta = await puter.ai.chat(promptConContexto);

        // Eliminar indicador de carga
        messagesDiv.removeChild(loadingDiv);

        // La respuesta puede ser un objeto; obtenemos el texto directamente si es necesario
        const textoRespuesta = respuesta.text || respuesta;
        agregarMensaje(textoRespuesta, 'assistant');
    } catch (error) {
        console.error('Error en la IA:', error);
        // Eliminar indicador de carga
        messagesDiv.removeChild(loadingDiv);
        agregarMensaje("Lo siento, ocurrió un error al obtener la respuesta. Por favor, intenta de nuevo.", 'assistant');
    }
}

// Enviar la pregunta al hacer clic en el botón
sendBtn.addEventListener('click', enviarPregunta);

// Permitir enviar con la tecla Enter
questionInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Evitar salto de línea
        enviarPregunta();
    }
});