// Definición de la clase del elemento personalizado
class ChatComponent extends HTMLElement {
    constructor() {
        super(); // Llamamos al constructor de HTMLElement
    }

    connectedCallback() {
        // Construir el contenido HTML interno del componente
        this.innerHTML = `
        <div class="chat-container">
            <div class="chat-header">
                <h3>Asistente de Programación</h3>
            </div>
            <div class="chat-messages">
                <div class="message system">
                    <p>Bienvenido al asistente del módulo de Programación. Puedo responder preguntas sobre todo el temario. ¿En qué puedo ayudarte?</p>
                </div>
                <div class="message user">
                    <p>¿Qué son los lenguajes de programación?</p>
                </div>
                <div class="message assistant">
                    <p>Los lenguajes de programación son herramientas que permiten a los desarrolladores crear programas informáticos mediante un conjunto de instrucciones, símbolos y reglas sintácticas y semánticas.</p>
                    <p>Existen diferentes tipos como:</p>
                    <ul>
                        <li>Lenguajes de bajo nivel (ensamblador)</li>
                        <li>Lenguajes de alto nivel (Java, Python, C++)</li>
                        <li>Lenguajes interpretados y compilados</li>
                    </ul>
                    <p>¿Te gustaría saber más sobre algún lenguaje específico?</p>
                </div>
            </div>
            <div class="chat-input">
                <textarea placeholder="Escribe tu pregunta aquí..."></textarea>
                <button class="send-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                </button>
            </div>
        </div>
        `;
    }
}

// Registrar el nuevo elemento personalizado en el navegador
customElements.define('chat-component', ChatComponent);