function loadRecopilaFiles () {
  document.write(`
    <script src="./recopila_files/exe_jquery.js" type="text/javascript"></script>
    <script src="./recopila_files/common_i18n.js" type="text/javascript"></script>
    <script src="./recopila_files/common.js" type="text/javascript"></script>
    <script src="./recopila_files/SCORM_API_wrapper.js" type="text/javascript"></script>
    <script src="./recopila_files/SCOFunctions.js" type="text/javascript"></script>
    <script src="./recopila_files/exe_highlighter.js" type="text/javascript"></script>
    <script src="./recopila_files/saved_resource" type="text/javascript"></script>
    <link href="./recopila_files/base.css" type="text/css" rel="stylesheet">
    <link href="./recopila_files/content.css" type="text/css" rel="stylesheet">
    <link href="./recopila_files/exe_highlighter.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="./recopila_files/exe_tooltips.js"></script>
  `);
}

function loadRecopilaFilesUT10() {
  document.write(`
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/exe_jquery.js" type="text/javascript">
  </script>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/common_i18n.js" type="text/javascript">
  </script>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/common.js" type="text/javascript">
  </script>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/SCORM_API_wrapper.js" type="text/javascript">
  </script>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/SCOFunctions.js" type="text/javascript">
  </script>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/exe_highlighter.js" type="text/javascript">
  </script>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/saved_resource" type="text/javascript">
  </script>
  <link href="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/base.css" rel="stylesheet" type="text/css"/>
  <link href="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/content.css" rel="stylesheet" type="text/css"/>
  <link href="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/exe_highlighter.css" rel="stylesheet" type="text/css"/>
  <script src="./educacionadistancia.juntadeandalucia.es_formacionprofesional_blocks_recopila_recopila.php_id=4052&amp;dopt=1_files/exe_tooltips.js" type="text/javascript">
  </script>
  `);
}

function loadMetaTags (title, description) {
  const basePath = location.hostname.includes('github.io') ? '/daw-chat' : '';

  document.write(`
    <link rel="stylesheet" href="${basePath}/css/style.css">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  `);
}
