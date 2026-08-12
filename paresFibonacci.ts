function somaFibonacciPares(limite: number): number {
    let soma = 0
    
    let termoAnterior = 1
    let termoAtual = 2
    
    while (termoAtual <= limite) {
        if (termoAtual % 2 === 0) {
            soma += termoAtual
        }
        
        const proximoTermo = termoAnterior + termoAtual
        
        termoAnterior = termoAtual
        termoAtual = proximoTermo
    }
    return soma
}

const resultadoFibonacci = somaFibonacciPares(4000000);
console.log(`Soma dos termos pares de Fibonacci abaixo de 4 milhões: ${resultadoFibonacci} `)