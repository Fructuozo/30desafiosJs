/*A equipe de manutenção da nave solicitou a sua ajuda para analisar o desempenho do um computador portátil utilizado pela equipe de reconhecimento. Para isso, em um determinado momento, você precisou simular a criação de blocos de informação em formato de texto recursivamente, então decidiu criar uma função para imitar esse comportamento.

Desafio:Escreva uma função que receba um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição(while, dowhile, for, etc)

Testes:
-Entrada:(4)
Saída: "chunk-chunk-chunl-chunk"
-Entrada:(1)
Saída: "chunk"
-Entrada:(2)
Saída: "chunk"
-Entrada:(8)
Saída: "chunk-chunk-chunk-chunk-chunk-chunk-chunl-chunk"
*/

 function chunks(num) {
    if (num === 0) {
        return ''
    }
    if (num === 1) {
        return 'chunk'
    } else {
        return 'chunk-' + chunks(num -1)
    }
 }

 console.log(chunks(4))
 console.log(chunks(1))
 console.log(chunks(8))
 console.log(chunks(2))