## Estrutura de classes

- A declaração é bem parecida com constructor functions;
- As propriedades devem ficar num método especial chamado cosntructor
- Onde serão inicializadas

```jsx
class Tenis{
	 cosntructor(modelo,cor){
		this.modelo = modelo;
		this.cor = cor;
  }

}

console.log(typeof Tenis);

let allStart = new Tenis ("All Start", "Branco");
```

---

## Classes anônimas

- outra maneira de criar classes é a conhecida como classe anônima;

```jsx
class Tenis{
	 cosntructor(modelo,cor){
		this.modelo = modelo;
		this.cor = cor;
  };

modeloDoTenis(){
	return this.modelo;
 }

}

let allStart = new Tenis ("All Start", "Branco");

console.log(allstar)
```

---

## Curiosidades sobre o constructor

- É utilizado apenas para inicializar vlaores de propriedades;
- Você só pode utilizar um constructor por classe;
- O constructor pode chamar a classe pai por uma instrução super ( o que ajuda na herança

---

## Prototype mehods

- São métodos que já existem na Classe, por exemplo os getters e setters

```jsx
class Tenis{
	 cosntructor(modelo,cor){
		this.modelo = modelo;
		this.cor = cor;
  };

modeloDoTenis(){
	return this.modelo;
 }
set trocarModelo(novoModelo){
		 this.modelo = novoModelo;
  }
	 get obterModelo(){
  return "O modelo do tênis é: " + this.modelo;
  }
 
}

let allStart = new Tenis ("All Start", "Branco");

allstart.trocarModelo = "All start 2.0";
console.log(allstart.obterModelo);
```

---

## Métodos estáticos

- Métodos que só funcionam caso você utilize o nome da classe;
- Ou seja, você não cria um novo objeto para usar eles.
- Utilizando muito com um helper

```jsx
class Calcular{
  static soma(a,b){
    return a+b;
 }
}

console.log(Calcular.soma(2,5));
```

---

## Subclasses

- Uma forma de criar herança com as classes;
- Utilizando a palavra extends, uma classe herda as propriedades de outra

```jsx
class Animal {
 constructor(nome) {
  this.nome = nome;
 }

}

class Cachorro extends Animal {
 latir(){
  console.log("Au au");
  }

}

let yuri = new Cachorro ("Yuri");

yuri.latir();

console.log(yuri.nome);
```