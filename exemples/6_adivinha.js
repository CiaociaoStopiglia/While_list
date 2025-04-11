
// contar e exibir o numero de tentativas realizadas
// mostrar cada palpite feito pelo computador
// exibir uma mensagem final informando que o número foi adivinhando em quantas tentativas.
// utilize o laço while para repetir as tentativas até que o palpite seja igual ao número secreto.

const numeroSecreto = 12;
let quantidadeTentativas = 0;
let palpite = Math.floor(Math.random() * 99);

while (palpite !== numeroSecreto){
    quantidadeTentativas++;
    console.log(`Tentativa: ${quantidadeTentativas} e o PC tentou o numero ${palpite}`)
}

console.log(`numero de tentativas ${quantidadeTentativas}`);

// Exemplo feito em aula (SENAI - primeiro ano) por: @thiago-rferreira
