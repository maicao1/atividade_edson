//Maicon Carolino Campos

//////////////////////////////////////

// 1 exiba a mensagem "ola mundo" no console

console.log("ola mundo");

/////////////////////////////////////////

// 2. crie uma variavel com seu nome  e exiba o valor no console

let nome = "camile";
console.log(nome);

/////////////////////////////////////////

//3. some dois numeros e exiba e resultado

let c =1;
let h =4;
console.log(c+h);


let soma = 10 + 3;

console.log(soma);

/////////////////////////////////////////

//4.subtraia dois numero e exiba o valor

let sub = 10 -3;
console.log(sub);

/////////////////////////////////////////

//5 descubra o resto da divisao de um numero por outro
let restos = 10%3;
console.log(restos)

/////////////////////////////////////////

//6. crie uma variavel boleana(true false) e exiba seu valor.

let bola = true;
console.log(bola);

/////////////////////////////////////////

//7. verifique se um numero e maior q outro 

let maiorque = 18>11;
console.log(maiorque);

/////////////////////////////////////////

//8.crie duas variaveis com algum valor e exiba a  concatenação

let m = 2
let n = 3

console.log(n,m)

//ou

let num1 = "test";
let num2 = "test2";

console.log(`teste ${num1} ${num2}`)

//////////////////////////////////////////

//9. descubra o tipo de uma variavel

let valor = 100;
console.log(typeof valor); 

/////////////////////////////////////////

//10. converta numero para string

let num = 5

console.log(String(num))

/////////////////////////////////////////

//11. string para numero

let texto = "123"
console.log(Number(texto))

/////////////////////////////////////////


//laços de repetição

//12. exiba no console numero de 0 a 10


for(i =0; i<=10; i++){
    console.log(i)
}

//13. exiba apenas numeros pares ate 20

for(let i =0; i<=20; i+=2){

    console.log(i)
}

//14. monstre no console de 10 ate 1


for(i = 10; i>=1; i--){
    console.log(i)
}

/////////////////////////////////////////////

//15. some numeros de 1 a 5

let somaloop = 0;
for(let i = 1; i<=5; i++){
    somaloop+=i;
    console.log("valor de i " +i+" valor de somaloop"+somaloop)
}
console.log(somaloop)
