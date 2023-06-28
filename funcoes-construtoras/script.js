// Transforme o objeto abaixo em uma Constructor Function

function Pessoa(nomePessoa, idade, movimento) {
  this.nome = nomePessoa;
  this.idade = idade;
  this.movimento = () => {
    console.log(this.nome + " " + movimento);
  };
}

const joao = new Pessoa("Joao", 25, "para trás");
const maria = new Pessoa("Maria", 25, "para trás");
const bruno = new Pessoa("Bruno", 25, "para trás");

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elemento) {
  this.elements = document.querySelectorAll(elemento);
  this.addClass = (classe) => {
    this.elements.forEach((elemento) => {
      elemento.classList.add(classe);
    });
  };
  this.removeClass = (classe) => {
    this.elements.forEach((elemento) => {
      elemento.classList.remove(classe);
    });
  };
}

const muda = new Dom("li");
