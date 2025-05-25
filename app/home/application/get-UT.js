const temas = {
  SI: [
    { UT: "UT01.- Hardware de un Sistema Informático", path: "sistemas-informaticos/ut1/SI01.html" },
    { UT: "UT02.- Software de un Sistema Informático", path: "sistemas-informaticos/ut2/SI01.html" },
    { UT: "UT03.- Redes de Ordenadores", path: "sistemas-informaticos/ut3/redes-de-ordenadores.html" },
    { UT: "UT04.- Instalación y configuración (Windows I)", path: "sistemas-informaticos/ut4/instalacion-y-configuracion-windows.html" },
    { UT: "UT05.- Administración básica del sistema (Windows II)", path: "sistemas-informaticos/ut5/administracion-basica-del-sistema-windows-II.html" },
    { UT: "UT06.- Administración de redes (Windows III)", path: "sistemas-informaticos/ut6/administracion-de-redes-windows-III.html" },
    { UT: "UT07.- Instalación y configuración (Linux I)", path: "sistemas-informaticos/ut7/instalacion-y-configuracion-linux-I.html" },
    { UT: "UT08.- Administración básica del sistema (Linux II)", path: "sistemas-informaticos/ut8/administracion-basica-del-sistema-linux-II.html" },
    { UT: "UT09.- Administración de la red (Linux III)", path: "sistemas-informaticos/ut9/administracion-de-la-red-linux-III.html" }
  ],
  BD: [
    { UT: "UT01.- Almacenamiento de la información", path: "bases-de-datos/ut1/recopila.html" },
    { UT: "UT02.- Interpretación de Diagramas E-R", path: "bases-de-datos/ut2/recopila.html" },
    { UT: "UT03.- Bases de datos Relacionales", path: "bases-de-datos/ut3/recopila.html" },
    { UT: "UT04.- Realización de Consultas.", path: "bases-de-datos/ut4/recopila.html" },
    { UT: "UT05.- Tratamiento de Datos", path: "bases-de-datos/ut5/recopila.html" },
    { UT: "UT06.- Programación de Bases de Datos.", path: "bases-de-datos/ut6/recopila.html" },
    { UT: "UT07.- Uso de Bases de Datos Objeto-Relaciones.", path: "bases-de-datos/ut7/educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=3997&dopt=1.html" }
  ],
  PROG: [
    { UT: "UT01.- Introducción a la programación.", path: "programacion/ut1/recopila.html" },
    { UT: "UT02.- Uso de estructuras de control.", path: "programacion/ut2/recopila.html" },
    { UT: "UT03.- Utilización de objetos.", path: "programacion/ut3/recopila.html" },
    { UT: "UT04.- Cadenas de caracteres y arrays.", path: "programacion/ut4/recopila.html" },
    { UT: "UT05.- Desarrollo de clases.", path: "programacion/ut5/recopila.html" },
    { UT: "UT06.- Utilización avanzada de clases.", path: "programacion/ut6/recopila.html" },
    { UT: "UT07.- Estructuras de datos internas (memoria).", path: "programacion/ut7/recopila.html" },
    { UT: "UT08.- Estructuras de datos externas (ficheros).", path: "programacion/ut8/recopila.html" },
    { UT: "UT09.- Interfaces gráficas de usuario.", path: "programacion/ut9/recopila.html" },
    { UT: "UT10.- Gestión de bases de datos: relacionales y orientadas a objetos. Persistencias de objetos.", path: "programacion/ut10/educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&dopt=1.html" }
  ],
  LMSGI: [
    { UT: "UT01: Aspectos básicos de los lenguajes de marcas y sistemas de gestión empresarial", path: "lenguajes-de-marcas/ut1/LM01.html" },
    { UT: "UT02: Utilización de lenguajes de marcas en entornos web", path: "lenguajes-de-marcas/ut2/LM02.html" },
    { UT: "UT03: Sindicación de Contenidos", path: "lenguajes-de-marcas/ut3/sindicacion-de-contenidos.html" },
    { UT: "UT04: Definición de esquemas y vocabularios en XML", path: "lenguajes-de-marcas/ut4/definicion-de-esquemas-y-vocabularios-en-xml.html" },
    { UT: "UT05: Conversión y adaptación de documentos XML", path: "lenguajes-de-marcas/ut5/conversion-y-adaptacion-de-documentos-xml.html" },
    { UT: "UT06: Almacenamiento de información", path: "lenguajes-de-marcas/ut6/almacenamiento-de-informacion.html" }
  ],
  ED: [
    { UT: "UT01.- Desarrollo del software. 14,5", path: "entornos-de-desarrollo/ut1/recopila.html" },
    { UT: "UT02.- Instalación y uso de entornos de desarrollo. 14,5", path: "entornos-de-desarrollo/ut2/recopila.html" },
    { UT: "UT03.- Diseño y realización de pruebas. 19", path: "entornos-de-desarrollo/ut3/recopila.html" },
    { UT: "UT04.- Optimización y documentación. 19", path: "entornos-de-desarrollo/ut4/recopila.html" },
    { UT: "UT05.- Diseño orientado a objetos. Diagramas estructurales y de comportamiento. 29", path: "entornos-de-desarrollo/ut5/recopila.html" }
  ],
  FOL: [
    { UT: "UT01: Relación Laboral Individual", path: "formacion-y-orientacion-laboral/ut1/la-relacion-laboral-individual.html" },
    { UT: "UT02: Las relaciones colectivas de trabajo", path: "formacion-y-orientacion-laboral/ut2/la-relacion-colectiva-en-el-trabajo.html" },
    { UT: "UT03: Seguridad Social", path: "formacion-y-orientacion-laboral/ut3/la-relacion-colectiva-en-el-trabajo.html" },
    { UT: "UT04: Evaluación de riesgos profesionales", path: "formacion-y-orientacion-laboral/ut4/FOL04.html" },
    { UT: "UT05: El Plan de Prevención de la Empresa", path: "formacion-y-orientacion-laboral/ut5/plan-de-prevencion-de-la-empresa.html" },
    { UT: "UT06: Medidas de Prevención y Protección", path: "formacion-y-orientacion-laboral/ut6/medidas-de-prevención-y-proteccion.html" },
    { UT: "UT07: Los equipos de trabajo y la gestión del conflicto", path: "formacion-y-orientacion-laboral/ut7/recopila.html" },
    { UT: "UT08: Búsqueda de empleo", path: "formacion-y-orientacion-laboral/ut8/FOL08.html" }
  ],
  DWEC: [
    "JavaScript básico",
    "DOM y eventos",
    "AJAX y fetch",
    "Frameworks frontend"
  ],
  DWES: [
    "PHP y servidores",
    "APIs REST",
    "Autenticación y sesiones",
    "Frameworks backend"
  ],
  DAW: [
    { UT: "UT01.- Implantación, configuración y administración de servidores web.",
      path: "despliegue-de-aplicaciones/ut1/recopila.html" },
    { UT: "UT02.- Configuración y administración de servidores de aplicaciones.",
      path: "despliegue-de-aplicaciones/ut2/recopila.html" },
    { UT: "UT03.- Instalación y administración de servidores de alta disponibilidad.",
      path: "despliegue-de-aplicaciones/ut3/recopila.html" },
    { UT: "UT04.- Servicios de red implicados en el despliegue de una aplicación web.",
      path: "despliegue-de-aplicaciones/ut4/recopila.html" },
    { UT: "UT05.- Documentación y control de versiones.",
      path: "despliegue-de-aplicaciones/ut5/educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4057&dopt=1.html" }
  ],
  DIW: [
    "Diseño responsive",
    "Accesibilidad web",
    "UX/UI",
    "Animaciones CSS"
  ],
  EIE: [
    "UT01: La Empresa y su Clasificación",
    "UT02: La Iniciativa Emprendedora y el Plan de Negocio",
    "UT03: El Marketing",
    "UT04: El Equipo Humano",
    "UT05: CLASIFICACIÓN JURÍDICA DE LAS EMPRESAS Y TRÁMITES DE CONSTITUCIÓN",
    "UT06: EL PLAN DE INVERSIONES Y EL PLAN FINANCIERO",
    "UT07: Gestión administrativa, fiscal y contable"
  ],
  PROY: [
    "Gestión de proyectos",
    "Desarrollo colaborativo",
    "Presentación de proyectos",
    "Documentación final"
  ],
  FCT: [
    "Prácticas en empresa",
    "Seguimiento y evaluación",
    "Informe final"
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const content = document.getElementById('content');
  menu.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      // Quitar clase activa de todos
      Array.from(menu.children).forEach(li => li.classList.remove('active'));
      e.target.classList.add('active');
      const asig = e.target.getAttribute('data-asig');
      if (temas[asig]) {
        content.innerHTML = `<h3>${e.target.textContent}</h3>
          <ul>${temas[asig].map(t => `<li><a href="${t.path}" target="_blank">${t.UT}</a></li>`).join('')}</ul>`;
      }
    }
  });
});