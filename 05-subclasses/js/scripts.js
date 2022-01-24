class Humano {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log("O humano falou");
    }
}



class Engenheiro extends Humano{
    constructor(nome, idade, especialista){
        super(nome,idade);
        this.profissao = "Engenheiro";
        this.especializacao = especialista;
    }
}


let joao = new Engenheiro ("João", 25, "Civil");


console.log(joao);
joao.falar();