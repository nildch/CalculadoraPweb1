// funções somar, subtrair, multiplicar, dividir e callback como foi pedido. 
// como foi exigido tambem usei um form do bootstrap.
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
      return a / b;
  } else {
      return 'Erro: divisão por zero';
  }
}

function calcular(operacao, a, b, callback) {
  const resultado = operacao(a, b);
  callback(resultado);
}

module.exports = { somar, subtrair, multiplicar, dividir, calcular };
