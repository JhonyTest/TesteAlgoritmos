const distribuidora = [
  { name: "SP", value: 67836.43 },
  { name: "RJ", value: 36678.66 },
  { name: "MG", value: 29229.88 },
  { name: "ES", value: 27165.48 },
  { name: "Outros", value: 19849.53 },
];


function agrupar(item){
  return item.value;
}

function somar(ant, post){
  return ant + post;
}

const total = distribuidora.map(agrupar).reduce(somar);


const porcentagem = distribuidora.map((user, index, array) => {
  user.value = (user.value / total) * 100;
  return user;
});

console.log(porcentagem);

