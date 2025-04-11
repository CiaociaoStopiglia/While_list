

// cada rodada o zumbi sofre um dano aleátorio entre 0 a 30.
// o dano deve ser subtraido da vida atual do zumbi;
// o programa deve exisbir no console o valor do dano e a vida restante.
// o laço deve continuar até que a vida do zumbi seja menor ou igual a zero, exibir a mensagem: "Zumbi derrotado"
// utilize o laço while pra controlar o combate

let aleatorio = Math.floor(Math.random() * 30);
let vida = 100;

while (vida > 0){
    aleatorio = Math.floor(Math.random() * 30);
    let dano = aleatorio;
    vida = vida - dano;
    // vida -= dano;
    console.log(`zumbi sofreu ${dano} de dano! Vida restante: ${vida}`)
}

//tudo da sequencia só acontece após o while ser concluido.
// Exemplo feito em aula (SENAI - primeiro ano) por: @thiago-rferreira