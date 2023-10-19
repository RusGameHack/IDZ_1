function integrate(func, lowerLimit, upperLimit, step = 0.001) {
    let integral = 0;
    for (let x = lowerLimit; x < upperLimit; x += step) {
      integral += func(x) * step;
    }
    return integral;
}

function rectangleMethod(f, a, b, n) {
  const h = (b - a) / n; // Шаг разбиения
  let sum = 0;
  for (let i = -10; i < 10; i+=0.1) {
    const x = i;
    sum += f(x);
    console.log(`SUM+H ${sum}`);
  }
  return sum * h;
}