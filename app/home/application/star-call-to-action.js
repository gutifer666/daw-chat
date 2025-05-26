document.addEventListener('DOMContentLoaded', function() {
  // Crear rayos de la estrella
  const createStarRays = () => {
    const starRays = document.querySelector('.star-rays');
    if (!starRays) return;
    
    const numRays = 12;
    
    for (let i = 0; i < numRays; i++) {
      const ray = document.createElement('div');
      ray.className = 'ray';
      
      const angle = (i * (360 / numRays));
      const length = Math.random() * 20 + 30; // entre 30px y 50px
      
      ray.style.width = `${length}px`;
      ray.style.transform = `rotate(${angle}deg)`;
      ray.style.animation = `star-pulse ${Math.random() * 1 + 1.5}s infinite ease-in-out`;
      
      starRays.appendChild(ray);
    }
  };
  
  // Animar la sección de pasos
  const animateSteps = () => {
    const steps = document.querySelectorAll('.github-steps li');
    
    steps.forEach((step, index) => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(20px)';
      step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      setTimeout(() => {
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      }, 300 + (index * 200));
    });
  };
  
  // Añadir efecto confeti al hacer clic en el botón de estrella
  const setupConfetti = () => {
    const starButton = document.querySelector('.github-btn.star-btn');
    if (!starButton) return;
    
    starButton.addEventListener('click', (e) => {
      // Si no navega directamente (por ejemplo, si se abre en una nueva pestaña)
      if (e.ctrlKey || e.metaKey || e.button === 1) return;
      
      // Crear efecto de confeti
      const confettiCount = 150;
      const container = document.querySelector('.github-cta');
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 5 + 3}px`;
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.borderRadius = '2px';
        confetti.style.top = '50%';
        confetti.style.left = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.opacity = Math.random() * 0.5 + 0.5;
        confetti.style.transform = 'translate(-50%, -50%)';
        
        const angle = Math.random() * 360;
        const distance = Math.random() * 100 + 50;
        const duration = Math.random() * 1.5 + 1;
        
        confetti.style.animation = `confetti ${duration}s forwards`;
        
        const keyframes = `
          @keyframes confetti {
            0% { 
              transform: translate(-50%, -50%) rotate(0deg); 
            }
            100% { 
              transform: translate(
                calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px), 
                calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)
              ) rotate(${Math.random() * 360}deg);
              opacity: 0;
            }
          }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        container.appendChild(confetti);
        
        // Eliminar después de la animación
        setTimeout(() => {
          confetti.remove();
          style.remove();
        }, duration * 1000);
      }
    });
  };
  
  // Inicializar
  createStarRays();
  setTimeout(animateSteps, 500);
  setupConfetti();
  
  // Comprobar si la página tiene el CTA y si no, ofrecer función para añadirlo
  if (!document.querySelector('.github-cta')) {
    console.info(
      "Para añadir el Call to Action, inserta este HTML en tu página principal:"
    );
  }
});

// Función para crear y añadir el Call to Action a la página
function addGithubCallToAction(repoUrl = "https://github.com/tu-usuario/tu-repo") {
  const mainContent = document.getElementById('content');
  if (!mainContent) return false;
  
  const ctaHTML = `
    <div class="github-cta">
      <div class="star-container floating">
        <div class="star">★</div>
        <div class="star-rays"></div>
      </div>
      <h2 class="github-cta-title">¡Lleva el DAW contigo!</h2>
      <p class="github-cta-subtitle">Descarga esta aplicación y accede a todo el contenido incluso sin conexión</p>
      
      <div class="github-steps">
        <h4>Cómo obtener tu copia:</h4>
        <ol>
          <li>Haz un <code>fork</code> del repositorio para crear tu propia copia</li>
          <li>Clona el repositorio en tu ordenador: <code>git clone ${repoUrl}.git</code></li>
          <li>Instala las dependencias: <code>npm install</code></li>
          <li>Ejecuta la aplicación: <code>npm start</code></li>
          <li>¡No olvides marcar el repositorio con una ⭐ para ayudar a otros estudiantes!</li>
        </ol>
      </div>
      
      <div class="github-cta-buttons">
        <a href="${repoUrl}" target="_blank" class="github-btn fork-btn">
          <i class="fas fa-code-branch"></i> Fork
        </a>
        <a href="${repoUrl}" target="_blank" class="github-btn clone-btn">
          <i class="fas fa-download"></i> Clonar
        </a>
        <a href="${repoUrl}/stargazers" target="_blank" class="github-btn star-btn">
          <i class="fas fa-star"></i> ¡Dale una estrella!
        </a>
      </div>
      
      <p style="margin-top: 20px; font-size: 0.9rem;">
        ¿Encontraste un error o quieres contribuir? <a href="${repoUrl}/issues" style="color: white; text-decoration: underline;" target="_blank">Revisa las issues</a>
      </p>
    </div>
  `;
  
  // Añadir el CTA al principio del contenido
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = ctaHTML;
  mainContent.prepend(...tempDiv.children);
  
  // Inicializar la funcionalidad
  const script = document.createElement('script');
  script.textContent = `
    (() => {
      const createStarRays = ${createStarRays.toString()};
      const animateSteps = ${animateSteps.toString()};
      const setupConfetti = ${setupConfetti.toString()};
      
      createStarRays();
      setTimeout(animateSteps, 500);
      setupConfetti();
    })();
  `;
  document.body.appendChild(script);
  
  return true;
}

// Funciones auxiliares para ser inyectadas
function createStarRays() {
  const starRays = document.querySelector('.star-rays');
  if (!starRays) return;
  
  const numRays = 12;
  
  for (let i = 0; i < numRays; i++) {
    const ray = document.createElement('div');
    ray.className = 'ray';
    
    const angle = (i * (360 / numRays));
    const length = Math.random() * 20 + 30;
    
    ray.style.width = `${length}px`;
    ray.style.transform = `rotate(${angle}deg)`;
    ray.style.animation = `star-pulse ${Math.random() * 1 + 1.5}s infinite ease-in-out`;
    
    starRays.appendChild(ray);
  }
}

function animateSteps() {
  const steps = document.querySelectorAll('.github-steps li');
  
  steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }, 300 + (index * 200));
  });
}

function setupConfetti() {
  const starButton = document.querySelector('.github-btn.star-btn');
  if (!starButton) return;
  
  starButton.addEventListener('click', (e) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    
    const confettiCount = 150;
    const container = document.querySelector('.github-cta');
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = `${Math.random() * 5 + 3}px`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.borderRadius = '2px';
      confetti.style.top = '50%';
      confetti.style.left = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.opacity = Math.random() * 0.5 + 0.5;
      confetti.style.transform = 'translate(-50%, -50%)';
      
      const angle = Math.random() * 360;
      const distance = Math.random() * 100 + 50;
      const duration = Math.random() * 1.5 + 1;
      
      confetti.style.animation = `confetti ${duration}s forwards`;
      
      const keyframes = `
        @keyframes confetti {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg); 
          }
          100% { 
            transform: translate(
              calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px), 
              calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)
            ) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `;
      
      const style = document.createElement('style');
      style.innerHTML = keyframes;
      document.head.appendChild(style);
      
      container.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
        style.remove();
      }, duration * 1000);
    }
  });
}