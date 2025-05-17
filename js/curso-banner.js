// Definición de la clase del elemento personalizado
class CursoBanner extends HTMLElement {
    constructor() {
        super(); // Llamamos al constructor de HTMLElement
    }

    connectedCallback() {
        // Leer atributos personalizados (si no existen, usar valores por defecto)
        const titulo = this.getAttribute('titulo') || 'Título del curso';
        const imagen = this.getAttribute('imagen') || '/img/curso-ejemplo.png';
        const textoBoton = this.getAttribute('texto-boton') || 'Más información';

        // Construir el contenido HTML interno del componente
        this.innerHTML = `
    <div class="curso-banner-contenido">
      <h2>${titulo}</h2>
      <img src="${imagen}" alt="Imagen del curso">
      <button>${textoBoton}</button>
    </div>
  `;

        // (Opcional) Añadir comportamiento a los botones si es necesario
        const boton = this.querySelector('button');
        if (boton) {
            boton.addEventListener('click', () => {
                console.log('Botón del curso clickeado');
                // Aquí podrías añadir la lógica deseada, e.g. redirigir a otra página
            });
        }
    }

}

// Registrar el nuevo elemento personalizado en el navegador
customElements.define('curso-banner', CursoBanner);
