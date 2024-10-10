/**
 * Retorna uma string com seus caracteres invertidos a partir de
 * uma entrada.
 * @param input entrada
 */
function reverseString(input: string): string {
  const stack = [];
  let reversedString = "";

  for (let i = 0; i < input.length; i++) {
    stack[i] = input[i];
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    reversedString += stack[i];
  }

  return reversedString;
}

function main() {
  const input01 = "Teste.";
  const input02 = "Essa é uma string longa feita exclusivamente para testes";
  const input03 = "Café da manhã: pão, queijo, e frutas frescas!";

  console.log(
    "Original:",
    input01,
    "|",
    "invertida:",
    reverseString(input01),
    "\n"
  );
  console.log(
    "Original:",
    input02,
    "|",
    "invertida:",
    reverseString(input02),
    "\n"
  );
  console.log(
    "Original:",
    input03,
    "|",
    "invertida:",
    reverseString(input03),
    "\n"
  );
}

main();
