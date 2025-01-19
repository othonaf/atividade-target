// 1. Valor da Variável SOMA:

let INDICE: number = 13;
let SOMA: number = 0;
let K: number = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);
// O valor final será 91

//----------------------------------------------------------------


// 2. Sequência de Fibonacci

function fibonacci(n: number): number[] {
    const fibSeq: number[] = [0, 1];
    while (fibSeq[fibSeq.length - 1] < n) {
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }
    return fibSeq;
}

function isInFibonacci(n: number): string {
    const fibSeq = fibonacci(n);
    if (fibSeq.includes(n)) {
        return `${n} pertence à sequência de Fibonacci.`;
    } else {
        return `${n} não pertence à sequência de Fibonacci.`;
    }
}

// Número informado
const numero: number = parseInt(prompt("Informe um número: ") || "0", 10);
console.log(isInFibonacci(numero));


//--------------------------------------------------------------------------------------------

// 3. Faturamento Diário

import * as fs from 'fs';

const rawData = fs.readFileSync('faturamento.json', 'utf-8');
const faturamento = JSON.parse(rawData);

const faturamentoFiltrado = faturamento.filter((dia: { valor: number }) => dia.valor > 0);

const valores = faturamentoFiltrado.map((dia: { valor: number }) => dia.valor);
const menorFaturamento = Math.min(...valores);
const maiorFaturamento = Math.max(...valores);

const mediaMensal = valores.reduce((acc: number, cur: number) => acc + cur, 0) / valores.length;

const diasAcimaDaMedia = valores.filter((valor: number) => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia} dias`);

// -------------------------------------------------------------------------------------------------

// 4. Faturamento Mensal por Estado

type Faturamento = {
    estado: string;
    valor: number;
};

const faturamentoMensal: Faturamento[] = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

const totalMensal = faturamentoMensal.reduce((acc, cur) => acc + cur.valor, 0);

faturamentoMensal.forEach(f => {
    const percentual = (f.valor / totalMensal) * 100;
    console.log(`${f.estado}: ${percentual.toFixed(2)}%`);
});


// ----------------------------------------------------------------------------------------------------

// 5. Inverter String

function inverterString(s: string): string {
    let invertida = "";
    for (let char of s) {
        invertida = char + invertida;
    }
    return invertida;
}

const string: string = prompt("Informe uma string: ") || "";
console.log(inverterString(string));
