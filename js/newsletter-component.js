// Definición de la clase del elemento personalizado
class NewsletterComponent extends HTMLElement {
    constructor() {
        super(); // Llamamos al constructor de HTMLElement
    }

    connectedCallback() {
        // Leer atributos personalizados (si no existen, usar valores por defecto)
        const titulo = this.getAttribute('titulo') || 'Para saber más';
        const descripcion = this.getAttribute('descripcion') || 
            'No te pierdas las nuevas unidades de trabajo que se van añadiendo contínuamente a la plataforma, así como todas las actualizaciones de contenido. Suscríbete al Newsletter y mantente contínuamente informado. Puedes darte de baja en cualquier momento.';
        const textoBoton = this.getAttribute('texto-boton') || 'Seguir Actualizaciones';
        const enlace = this.getAttribute('enlace') || 'https://www.getrevue.co/profile/javigutiblogger';

        // Construir el contenido HTML interno del componente
        this.innerHTML = `
        <div class="cta-newsletter" id="id2">
          <div class="iDevice emphasis_parasabermasfpd">
            <div class="iDevice_header">
              <h2 class="iDeviceTitle">${titulo}</h2>
            </div>
            <div class="iDevice_inner">
              <div class="iDevice_content_wrapper">
                <div class="block iDevice_content">
                  <p>${descripcion}</p>
                  <p class="enlace_centrado">
                    <a href="${enlace}" title="Acceso al Newsletter" target="_blank">${textoBoton}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    }
}

// Registrar el nuevo elemento personalizado en el navegador
customElements.define('newsletter-component', NewsletterComponent);