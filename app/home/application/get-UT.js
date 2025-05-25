import subjectPaths from '../domain/subject-path.js';

const subjectMapping = subjectPaths;

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const content = document.getElementById('content');
  menu.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      // Quitar clase activa de todos
      Array.from(menu.children).forEach(li => li.classList.remove('active'));
      e.target.classList.add('active');
      const asig = e.target.getAttribute('data-asig');
      if (subjectMapping[asig]) {
        content.innerHTML = `<h3>${e.target.textContent}</h3>
          <ul>${subjectMapping[asig].map(t => `<li><a href="${t.path}" target="_blank">${t.UT}</a></li>`).join('')}</ul>`;
      }
    }
  });
});