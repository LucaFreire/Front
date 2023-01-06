
function Exemplo1() // Exemplo de construtor
{

    function Produto (nome, preco, estoque)
    {
        Object.defineProperties(this, {
            nome: {
                enumerable: true, // Define se a chave pode ser mostrada
                value: nome, // Define o valor da chave
                writable: false, // Define se o valor da chave pode ser alterado
                configurable: false // Define se a chave pode ser reconfigurada ou deletada
            },
            preco: {
                enumerable: true,
                value: preco,
                writable: true,
                configurable: false
            },
            estoque: {
                enumerable: true,
                value: estoque,
                writable: true,
                configurable: false
            }
        });
    }

    const p1 = new Produto("Camiseta",20,3);
    console.log(p1)

}
// Exemplo1();


function Exemplo2() // Exemplo com get set
{

    function Produto(nome , preco, estoque)
    {
        this.nome = nome;
        this.preco = preco;
        Object.defineProperty(this, 'estoque', {
            enumerable:true,
            configurable: false,
            get: () => {
                return estoque;
            },
            set: (valor) => 
            {
                if (typeof(valor) !== 'number')
                    throw new TypeError("Valor inválido");

                estoque = valor;
            }
        
        });
        this.estoque = estoque;
    }

    const p1 = new Produto("Camiseta",20,23);
    console.log(p1.estoque);

}
// Exemplo2();


function Exemplo3() // Alguns atalhos p/ fazer coisas
{

    const produto = {nome: "Produto", preco: 1.8};
    const caneca = Object.assign({}, produto); // Faz a cópia dos valores do produto p/ caneca

    caneca.nome = "Caneca"; // Subscrevendo o nome do objeto
    produto.preco = 10;

    console.log(produto)
    console.log(caneca)

    console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // mostra as informações do <nome> do produto

    for (let [chave, valor] of Object.entries(produto)) // for percorrendo objetos
        console.log(chave, valor)

}
// Exemplo3();


function ValidarCpf(cpfUser)
{
    let count = 10;
    let sum = 0;
    var cpf = cpfUser.replace(/[.,-]/g, '');

    if (cpf.length != 11)
        return false;

    for (let i = 0; i < 9; i++)
    {
        sum += parseInt(cpf[i]) * count;
        count--;
    }

    resto = 11 - (sum % 11);
    if(resto > 9)
        resto = 0;

    if(resto != parseInt(cpf[9]))
        return false;

    sum = 0;
    count = 11;
    for(let i = 0; i < 10; i++)
    {   
        sum += parseInt(cpf[i]) * count;
        count--;
    }
        
    resto = 11 - (sum % 11);
    if(resto > 9)
        resto = 0;
    
    if (resto == parseInt(cpf[10]))
        return true;
}

$("button").click(function(){
    var cpf = $("#cpfUser").val();

    if(ValidarCpf(cpf))   
        $("h5").text("CPF Válido");
    else
        $("h5").text("CPF Inválido");
});
