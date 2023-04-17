var agora = new Date()
var diaSem = agora.getDay()

/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
*/

//console.log(diaSem) //Assim ele imprime o numero do dia, e não o dia.

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break // Se não usar o BREAK ele vai imprimir todos os codigos abaixo dele.
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}

