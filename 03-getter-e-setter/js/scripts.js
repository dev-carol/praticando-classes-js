class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return 'O nome da pessoa é: ' + this.nome;
    }
    set mudarNomeHumano(novoNome){
        this.nome = "Sra ." + novoNome;
    }
    get receberNomeHumano(){
        return "O nome da pessoa é :"  + this.nome
    }
}



let leticia = new Humano ('Leticia', 19);


console.log(leticia.nomeDaPessoa());

leticia.mudarNomeHumano = "Leticia";

console.log(leticia.nome);

console.log(leticia.receberNomeHumano);