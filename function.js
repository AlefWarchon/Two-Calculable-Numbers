//Variables
let option, numberOne, numberTwo, sum, sub, mult, div, restDiv, sameOrDifferent, pairOrOdd;

//Functions
function getNumbers () {
  while (numberOne != Number(numberOne) || numberOne === 0) {
  numberOne = Number(prompt('Digite um número'))
  if (numberOne != Number(numberOne) || numberOne === 0) {
  alert('Opção inválida. Tente novamente.')
  } else {
  while (numberTwo != Number(numberTwo) || numberTwo === 0) {
  numberTwo = Number(prompt('Digite um outro número'))
  if (numberTwo != Number(numberTwo) || numberTwo === 0) {
    alert('Opção inválida. Tente novamente.')
  } else if (numberOne == Number(numberOne), numberTwo == Number(numberTwo)) {
    break
  }}}} return}

function getVariablesValue () {
  sum = `A soma dos dois números é: ${numberOne + numberTwo}`;
  sub = `A subtração dos dois números é: ${numberOne - numberTwo}`
  mult = `A multiplicação dos dois números é: ${numberOne * numberTwo}`
  div = `A divisão dos dois números é: ${(numberOne / numberTwo).toFixed(2)}`
  restDiv = `O resto de divisão dos dois números é: ${numberOne % numberTwo}`
  return
}

function resetNumbers () {
  numberOne = 0;
  numberTwo = 0;
}

while (option != 3) {
option = Number(prompt(`
Olá usuário! Seja bem vindo ao Two Calculable Numbers!

Digite a opção desejada:

1. Iniciar o cálculo completo.
2. Iniciar um cálculo específico.
3. Sair do programa.
`))
switch (option) {
  case 1:
  alert (`Vamos precisar de dois números a seguir!
Realizaremos diversos cálculos!`)
  getNumbers()
  getVariablesValue()
  if(numberOne == numberTwo) {
    alert(`Os dois números inseridos são iguais!`)
  } else {
    alert(`Os dois números inseridos são diferentes!`)
  }
  if((numberOne + numberTwo) % 2 === 0) {
    alert(`A soma dos dois números: ${numberOne + numberTwo} é par`)
  } else {
    alert(`A soma dos dois números: ${numberOne + numberTwo} é ímpar`)
  }
  alert(sub)
  alert(mult)
  alert(div)
  alert(restDiv)

  while (option != 1 || 2) {
    option = Number(prompt(`
    Gostaria de ver todos os resultados?
  
    Digite a opção desejada:

    1. Sim.
    2. Não.
    `))
    if(numberOne == numberTwo) {
      sameOrDifferent = `Os dois números inseridos são iguais!`
    } else {
      sameOrDifferent = `Os dois números inseridos são diferentes!`
    }
    if((numberOne + numberTwo) % 2 === 0) {
      pairOrOdd = `A soma dos dois números é par`
    } else {
      pairOrOdd = `A soma dos dois números é ímpar`
    }

  if (option == 1) {
    alert(`
Os números escolhidos foram: ${numberOne} e ${numberTwo}
${sameOrDifferent}
${sum}
${pairOrOdd}
${sub}
${div}
${restDiv}
  `)
   break
  } else if (option == 2) {
    break
  } else {
    alert('Opção inválida. Tente novamente.')
  } 
  } 
  resetNumbers()
  break

  case 2:
    while (option != 6) {
    option = Number(prompt(`
    Qual tipo de cálculo gostaria de fazer?

    Digite a opção desejada:

    1. Soma.
    2. Subtração.
    3. Multiplicação.
    4. Divisão.
    5. Resto de divisão.
    6. Voltar.
    `))
switch (option) {
  case 1:
    getNumbers()
    getVariablesValue()
    alert(sum)
    resetNumbers()
    break

  case 2:
    getNumbers()
    getVariablesValue()
    alert(sub)
    resetNumbers()
    break

  case 3:
    getNumbers()
    getVariablesValue()
    alert(mult)
    resetNumbers()
    break

  case 4:
    getNumbers()
    getVariablesValue()
    alert(div)
    resetNumbers()
    break

  case 5:
    getNumbers()
    getVariablesValue()
    alert(restDiv)
    resetNumbers()
    break

  case 6:
    break

  default:
    alert('Opção inválida. Tente novamente.')
}
  } break

  case 3:
    alert('Você saiu do programa.')
    break;

  default:
    alert('Opção inválida. Tente novamente.')
} 
}
