function somarMultiplosDe3Ou5(limite: number): number {
    let soma = 0

    for (let numero = 0; numero < limite; numero++) {
        if (numero % 3 === 0 || numero % 5 === 0) {
            soma += numero
        }
    }
    return soma
}

const resultadoMultiplos = somarMultiplosDe3Ou5(1000)
console.log(`Soma abaixo de 1000: ${resultadoMultiplos}`)