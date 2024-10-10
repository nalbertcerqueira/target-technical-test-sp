/**
 * Avalia se o número informado faz parte da sequência de Fibonacci ou não.
 * @param n número informado.
 */
function isFibonacciNumber(n: number): boolean {
  const fibonacciTherms = [0, 1];
  let count = 0;

  if (n < 0) {
    return false;
  }

  while (n > fibonacciTherms[0]) {
    const index = count % 2;
    fibonacciTherms[index] = fibonacciTherms[0] + fibonacciTherms[1];
    count += 1;
  }

  if (n === fibonacciTherms[0] || n === fibonacciTherms[1]) {
    return true;
  }

  return false;
}

function createMessage(n: number, success: boolean): string {
  if (success) {
    return `Parabéns! O número ${n} faz parte da sequência de Fibonacci.`;
  }

  return `O número ${n} não faz parte da sequência de Fibonacci.`;
}

const n1 = 12;
console.log(n1, "-", createMessage(n1, isFibonacciNumber(n1)));

const n2 = 89;
console.log(n2, "-", createMessage(n2, isFibonacciNumber(n2)));

const n3 = 1251;
console.log(n3, "-", createMessage(n3, isFibonacciNumber(n3)));

const n4 = 514229;
console.log(n4, "-", createMessage(n4, isFibonacciNumber(n4)));
