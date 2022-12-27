// Chamar o script no html: <script src="index.js"></script>

// ---------------------------- Exemplo 1 ---------------------------- let e var
function Exemplo1()
{
    const verdadeira = true;
    let nome = "Luiz"; //criando
    var nome2 = nome //criando

    if(verdadeira)
    {
        let nome = "Joana"; //criando
        var nome2 = 'Catarina'; //redeclarando

        if(verdadeira)
        {
            var nome2 = 'Outro nome'; // redeclarando
            let nome = 'Roberto'; //criando
        }
    }
    console.log(nome,nome2);

    function sobrenome()
    {
        var sobrenome = 'Fredericksen';
        return sobrenome;
    }
    console.log(sobrenome()); 
}


// ---------------------------- Exemplo 2 ---------------------------- métodos
function Exemplo2()
{
    let num1 = 10;
    let num2 = NaN;

    console.log(num1.toString()); // Mostra o número em string
    console.log(num1.toString(2)); // Mostra o número em binário
    console.log(num1.toFixed(2)); // Arruma as casas decimais do número
    console.log(Number.isInteger(num1)); // Verifica se o número é inteiro
    console.log(Number.isNaN(num2)); // Verifica se o número é NaN
}


// ---------------------------- Exemplo 3 ---------------------------- métodos
function Exemplo3()
{
    let nume1 = 0.7;
    let nume2 = 0.1;

    console.log(nume1 + nume2); // Há imprecisão

    let nume3 = (nume1 + nume2).toFixed();
    console.log(nume3);
    console.log(Number.isInteger(nume3)); // Apenas usar o "toFixed" não funciona

    nume3 = Number(nume3)
    console.log(nume3);
    console.log(Number.isInteger(nume3)) // É preciso transformar em Number de novo
}


// ---------------------------- Exemplo 4 ---------------------------- biblioteca math
function Exemplo4()
{
    let num = 9.548

    console.log(Math.floor(num)) // Arredonda o número para baixo
    console.log(Math.ceil(num)) // Arredonda o número para cima
    console.log(Math.round(num)) // Arredonda o número
    console.log(Math.random()) // Gera um número aleatório entre 0 e 1

    var nume =  (100 / 0); // É possível dividir por 0
    console.log(nume);
}


// ---------------------------- Exemplo 5 ---------------------------- ternário
function Exemplo5()
{
    const pontuacaoUsuario = 1000;
    const tipoUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; // (condição) ? (valor verdadeiro) : (valor falso)

    console.log(tipoUsuario);

    var corUsuario = null;
    var corPadrao = corUsuario || 'Azul';

    console.log(corPadrao);

    var corUsuario = 'Roxo';
    var corPadrao = corUsuario || 'Azul';
    console.log(corPadrao);


    console.log("Nome" && 25 && 2.88 && "Esse vai ser mostrado"); //é um bool, caso verdadeiro, mostra o último elemento

    console.log("Nome" && 25 && 2.88 || undefined && false && "Esse não vai ser mostrado");
}


// ---------------------------- Exemplo 6 ---------------------------- arrays
function Exemplo6()
{
    const nomes = ['Luiz', 'Maria', 'João'];
    console.log(nomes);
    console.log(nomes);
    nomes.push('Otávio');
    console.log(nomes); // Adiciona um item no final
    nomes.unshift('Luiza');
    console.log(nomes); // Adiciona um item no começo
    nomes.pop();
    console.log(nomes); // Tira um item do final

    nomes.shift();
    console.log(nomes); // Tira um item do começo

    delete nomes[1];
    console.log(nomes); // Tira o item referente ao índice passado, mas sem mudar o arra

    console.log("Outro Exemplo\n");
    const nomes2 = ['Luiz', 'Maria', 'João'];
    console.log(nomes2);
    console.log(nomes2.length); // Mostra o tamanho do array
    console.log(typeof nomes2); // Array é do tipo Objeto
    console.log(nomes2 instanceof Array); // É possivel verificar se uma variavel é um array
}


// ---------------------------- Exemplo 7 ---------------------------- arrays

function Exemplo7()
{
    
const nomes = ['Luiz', 'Maria', 'João', 'Wallace', 'Rosana'];

var novos_nomes = nomes.slice(0, 1);
console.log(novos_nomes); // Vai mostrar apenas primeiro elemento
var novos_nomes = nomes.slice(0, -2);
console.log(novos_nomes); // Vai mostrar todos elementos, menos os dois últimos


var novos_nomes = nomes.slice(3);
console.log(novos_nomes); // Vai mostrar todos elementos, menos os três primeiros
}


// ---------------------------- Exemplo 8 ---------------------------- arrays
function Exemplo8()
{
    const nomes = ['Luiz', 'Maria', 'João', 'Wallace', 'Rosana'];

    var novos_nomes = nomes.slice(0, 1);
    console.log(novos_nomes); // Vai mostrar apenas primeiro elemento
    var novos_nomes = nomes.slice(0, -2);
    console.log(novos_nomes); // Vai mostrar todos elementos, menos os dois últimos

    var novos_nomes = nomes.slice(3);
    console.log(novos_nomes); // Vai mostrar todos elementos, menos os três primeiros
}


// ---------------------------- Exemplo 9 ---------------------------- arrays
function Exemplo9()
{
    // função join serve para transformar uma array em string
    const nomes = ['Luiz', 'Maria', 'João', 'Wallace', 'Rosana'];
    const novos_nomes = nomes.join(', ');
    console.log(nomes);
    console.log(novos_nomes);
    // função split serve para transformar uma string em array
}


// ---------------------------- Exemplo 10 ---------------------------- filter
function Exemplo10()
{
    const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    var nums_filter = nums.filter(function(valor){return valor >= 10;}); 

    // filter passa os valores, índices e a array (Nessa ordem), dessa 
    //forma podemos passar uma função para o filter ou criar uma função que só 
    //funciona nesse filtro

    console.log(nums_filter);

    var nums_filter = nums.filter((valor, indice, array) => 
    console.log(indice, valor, array[indice]));
}
// Como a função que criamos dentro do filter não precisa de nome podemos fazer ela no estilo de arrow function


// ---------------------------- Exercício 1 ---------------------------- 
function Exercicio1()
{
    // Tire os 3 primeiros números e adicione uma array com 5 números no lugar
    var nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
    nums = nums.slice(3)
    
    var Parte1 = [0,1,2,3,4, ...nums];
    console.log("Parte1", Parte1);
    
    // Filtre os números divisíveis por 3 -- filter
    var Parte2 = Parte1.filter(function(valor){
        if (valor % 3 == 0)
            return valor});
    console.log("\nParte1", Parte2);  

    // Eleve ao quadrado todos os números da array -- map
    var Parte3 = Parte2.map(function(valor)
        {return valor ** 2});
    console.log("\nParte3", Parte3);

    // Faça a soma de todos menos 200 -- reduce
    var Parte4 = Parte3.reduce(function(soma, valor)
        {return soma += valor}, -200);
    console.log("\nParte4", Parte4);
}
// Exercicio1();


// ---------------------------- Exercício 2 ----------------------------
function Exercicio2()
{   
    const nums = [1,2,3,4,5,6,7,8,9,10];

    var par = nums.filter(function(valor){return valor % 2 == 0}); 
    var impar = nums.filter(function(valor){return valor % 2 != 0}); 

    // Tire o primeiro item da array dos pares e coloque no final da array dos impares
    var num = par.shift()
    impar.push(num);
    console.log(impar)
    var newArray = []

    impar.forEach((valor,index) =>
    { 
        if (valor % index == 0)
            newArray.push(valor);
    });

    par.forEach((valor,index)=>
    {
        if (valor % index == 0)
            newArray.push(valor);
    });

    console.log(newArray);
}
// Exercicio2();
