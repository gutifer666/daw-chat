function loadHeader(title, description) {
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
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N9SKXEDQZB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-N9SKXEDQZB');
    </script>
    <!-- estilos propios -->
    <link rel="stylesheet" href="../../css/style.css">
    <!-- meta -->
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Cargar el componentes -->
    <script src="/js/newsletter-component.js" defer></script>
  `);
}