let Humano = class{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return 'O nome da pessoa é: ' + this.nome;
    }
}



let leticia = new Humano ('Leticia', 19);


console.log(leticia.nomeDaPessoa());