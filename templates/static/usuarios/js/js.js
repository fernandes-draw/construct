// Script para mostrar o nome dos arquivos selecionados
$('#customFile').on('change', function() {
  // Obtém a lista de arquivos
  var files = $(this)[0].files;
  var label = $(this).next('.custom-file-label');
  
  if (files.length > 1) {
      // Se múltiplos arquivos, mostra a quantidade
      label.html(files.length + ' arquivos selecionados');
  } else if (files.length === 1) {
      // Se apenas um, mostra o nome do arquivo
      label.html(files[0].name);
  } else {
      label.html('Selecionar arquivos...');
  }
});