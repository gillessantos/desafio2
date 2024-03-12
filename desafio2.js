// Calculadora de partidas Rankeadas
// Deve utilizar
// Variaveis, Operadores, Laços de Re
// oBJ> Crie uma função que recebe como parametro a quantidade de vitórias e derrotas de um jogador.
// depois disto retornar o resultado para uma variavel, o sando de rankeadas deve ser feito atraves de calculo ( V - D)

// Se V <= 10 = Ferro, 
//Se V <= 20   = Bronze
// Se V <= 50 = Prata
// se V <= 80 = Ouro
//se V <= 90 = Diamante
//se V <= 100 = Lendario
// se V >100 = Imortal

// "O heroi tem um saldo de " saldo" e está no nivel de "nivel"

let vitorias = 62
let derrotas = 15
let nivel = "Zero"
let saldo = vitorias - derrotas

if (saldo <= 10){
    nivel = "Ferro";
}else if(saldo <=20){
    nivel = "Bronze";
}else if(saldo <= 50){
    nivel = "Prata";
}else if (saldo <= 80){
    nivel = "Ouro";
}else if (saldo <= 90){
    nivel = "Diamante";
}else if (saldo <= 100){
    nivel = "Lendário";
}else if (saldo >100){
    nivel = "Imortal"
}


console.log("O Heroi tem um saldo de " + saldo + " está no nível " + nivel)