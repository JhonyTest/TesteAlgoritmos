const fibonacci = (num, i = 1, a = 0) => {
  if (i < num) {
    return fibonacci(num, i + a, i);
  }
  if (i === num) {
    return "O numero pertence a sequencia";
  }
  return "O numero não pertence a sequencia";
};
console.log(fibonacci(5));
console.log(fibonacci(7));
