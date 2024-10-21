function factorialOfN(n) {
  for (n = 1; n++; ) {
    let factorial = (n *= n + 1);
  }
  return factorial;
}
