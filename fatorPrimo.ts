function maiorFatorPrimo(numero: number): number {
    let fator = 2;
    let n = numero;
    
    while (fator * fator <= n) {
        if (n % fator === 0) {
            n = n / fator;
        } else {
            fator++;
        }
    }
    
    return n;
}

const numero = 600851475143;
const resultadoFatorPrimo = maiorFatorPrimo(numero);
console.log(`O maior fator primo de ${numero} é: ${resultadoFatorPrimo}`);