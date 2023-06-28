// let listaArray = ["masera", "matheus"];

// let novoArray = listaArray.join(", ");

// console.log(listaArray);
// console.log(novoArray);

// const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
// const htmlArray = htmlText.split("</div>");
// const htmlNovo = htmlArray.join("as");

// console.log(htmlArray, htmlNovo);

// const numeros = [7, 10, 15];
// const maiorQue3 = numeros.every((n) => n >= 3);

// console.log(maiorQue3);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = Array.from(document.querySelectorAll(".curso"));

const objetosCursos = cursos.map((el) => {
  const titulos = el.querySelector("h1").innerHTML;
  const descricao = el.querySelector("p").innerHTML;
  const aulas = el.querySelector(".aulas").innerHTML;
  const horas = el.querySelector(".horas").innerHTML;

  return {
    titulo: titulos,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
  };
});

console.log(objetosCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresNumeros = numeros.filter((n) => n >= 100);
console.log(maioresNumeros);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const fazParte = instrumentos.includes("Baixo");

console.log(fazParte);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const totalCompras = compras.map((el) => console.log("O preço é" + " " + el.preco));
