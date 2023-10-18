function integrate(func, lowerLimit, upperLimit, step = 0.001) {
    let integral = 0;
    for (let x = lowerLimit; x < upperLimit; x += step) {
      integral += func(x) * step;
    }
    return integral;
}