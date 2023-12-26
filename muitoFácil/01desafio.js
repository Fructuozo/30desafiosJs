/*A academia de Oficiais da Federação precisa da sua ajuda para criar um progrma que automatize os cálculos das médias de alunos e turmas para melhor acompanhar os seus desempenhos. Este programa será incorporado em seu sistema principal, portanto você precisa apenas desenvolver a funcção que calcula a média. No entanto, a função deve ser capaz de funcionar com qualquer número de alunos ou turmas.

Desafio: Escreva uma função que receba um número qualquer de números inteiros com argumentos e retorne a média aritmética entre eles.


Testes:
-Entrada:(10, 9, 6, 8, 9, 1, 5, 7)
Saída: 6.875
-Entrada:(2, 5, 7, 1, -2)
Saída: 2.8
-Entrada:(10, 10, 10, 10, 9)
Saída: 9.8
-Entrada:(25, 75)
Saída: 50
*/

function average(numbers) {


   const sun = numbers.reduce((accuum, num)=> {
    return accuum + num
   }, 0) 

    return sum / numbers.length
 };


console.log(average(10, 9, 6, 8, 9, 1, 5, 7));
console.log(average(2, 5, 7, 1, -2));
console.log(average(10, 10, 10, 10, 9));
console.log(average(25, 75));