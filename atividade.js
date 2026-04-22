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

/////////////////////////////////////////

//16. faça a tabuada do 3

for(let i = 1; i<=10; i++){
    console.log("3 X "+i+"="+3*i);
}

////////////////////////////////////////////////

//17. conte quantos numeros sao maiores que 5


let lista = [2,6,8,1,3];
let cont =0;

for(let i=0; i<lista.length; i++){
    if(lista[i]>5)cont++;
   
}
console.log(cont)
//////////////////////////////

let palavra = "MVETJ"

for(let i=0; i<palavra.length;i++){
    console.log
}

///19. pare um loop quando encontrar o numero 7 de 0 a 10

for(i=0;i<=10; i++){
    if(i === 8)break;
    console.log(i); 
}

/////////////////////////////////////////////////////////

/20 crie uma funçao que exibe uma mensagem.

function notficacao(){
   console.log("tu e gay");
}
notficacao()

/////////////////////////////////////////////////

// 21. crie uma funçao que multiplica 2 numero

function  multiplica(a,b){
    return a *b;


}
console.log(multiplica(2,3));

//22 crie uma funçao pye verifica se e  par ou impar.

function verificar(num){
    return  num  % 2 ===0 ? "par": "impar";


}
console.log(verificar(11));

//23 crie uma funçao que retorne o dobro

function  dobro(n){
    return n*2;


}
console.log(dobro(5));

///////////////////////

//24 crie uma funçao que some elementos de um array.

function somaArray(arr){
    total=0;
    for(let i=0; i<arr.length;i++){
        total +=arr[i];
    }
       
    return total;

}
 console.log(somaArray([2,5,6,67]));

////////////////////////////////////////////////

//25.  verifique se o numero 15 é positivo e exiba uma mensagem
let numero = 15

if(numero >0){
    console.log(`${numero} é positivo`)
}

//////////////////////////

//26 verifique se uma pessoa de 17 é maior de idade

let pessoa = 17

if(pessoa == 18){
    console.log("pessoa maior de idadae")
}else{
    console.log("pessoa nao é maior de idade")

}

///////////////////////

//27 crie um array com os numeros 10,20,30,40 e exibba todos

function notficacao(){
    console.log("tu e gay");
 }
 notficacao()

/////////////////////////
 
 // crie uma funçao que multiplica 2 numero
 
 function  multiplica(a,b){
     return a *b;
 
 }
 console.log(multiplica(2,3));

/////////////////////////////////////

 //28. crie um array com 5 frutas exiba a primeira fruta


 let fruta = [
    "maça", "manga", "uva", "banana", "laranja"
  ]

  console.log(fruta[[0]])


  ////////////////////////////////////////////////

//29. adicione o numero 50 no final do array[10,20,30,40]

let arrayy = [10,20,30,40]
arrayy.push(50)
console.log(arrayy)

  ////////////////////////////////////////////////

// 30 Remova o último elemento do array [1, 2, 3, 4, 5]
let array = [1, 2, 3, 4, 5]
array.pop(5)
console.log(array)

  ////////////////////////////////////////////////

// 31  Exiba quantos elementos tem o array [5, 10, 15, 20]


let arrayy1 = [5, 10, 15, 20]

console.log(`o array tem ${arrayy1.length} elemento`)

////////////////////////////////////////////////

// 32  Some todos os números do array [2, 4, 6, 8]

let array4 = [2,4,6,8]
let somar = 0;
for(let i=0; <array4.length; i++);{
    array4 = soma + array4[i];

}

// 33. multiplique cada elemento do array [1,2,3,4] por 2

Array5 = [1,2,3,4]
let multiplicar=[]

for(let i = 0 ;i<Array5.length; i++ ){
    multiplicar.push(Array5[i]*2)
}
console.log(multiplicar)

// 34 Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]

let frutas1 = ["maça", "banana", "uva"];
let procura = "laranja";
let acho = false;
for (let i = 0; i<frutas1.length;i++){
    if(frutas1[i]==procura){
        acho = true
    }
}
if(acho){
    console.log(`${procura} foi encontrada`)
}
else{
    console.log(`${procura} nao encontrada`)
}

//35  Exiba um por um os elementos do array ["azul", "verde", "amarelo"]

let cores = [
    "azul", "verde", "amarelo"
]
for(let i=0; i<cores.length; i++){
    console.log(cores)
}

//36 Exiba o último elemento do array [100, 200, 300, 400, 500]

let numerosarray = [
    100,200,300,400,500
]
let ultimoindien = numerosarray -1;
console.log(`o ultimo Elemento é: ${numerosarray[ultimoindien]}`)
