$.fn.select2.defaults.defaults.language.errorLoading = function () {
  return 'Os resultados não puderam ser carregados.';
}

$.fn.select2.defaults.defaults.language.inputTooLong = function (args) {
  var overChars = args.input.length - args.maximum;

  var message = 'Apague ' + overChars + ' caracter';

  if (overChars != 1) {
    message += 'es';
  }

  return message;
}

$.fn.select2.defaults.defaults.language.inputTooShort = function (args) {
  var remainingChars = args.minimum - args.input.length;

  var message = 'Digite ' + remainingChars + ' ou mais caracteres';

  return message;
}

$.fn.select2.defaults.defaults.language.loadingMore = function () {
  return 'Carregando mais resultados…';
}

$.fn.select2.defaults.defaults.language.maximumSelected = function (args) {
  var message = 'Você só pode selecionar ' + args.maximum + ' ite';

  if (args.maximum == 1) {
    message += 'm';
  } else {
    message += 'ns';
  }

  return message;
}

$.fn.select2.defaults.defaults.language.noResults = function () {
  return 'Nenhum resultado encontrado';
}

$.fn.select2.defaults.defaults.language.searching = function () {
  return 'Pesquisando...';
}
