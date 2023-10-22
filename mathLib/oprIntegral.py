import sys

import sympy as sp

# Создаем символы для переменных
formula_str = sys.argv[1]

x, c, α = sp.symbols('x c α')
a = int(sys.argv[2])
c = int(sys.argv[3])

# Задаем функцию с использованием переменных c и α
expr = eval(sys.argv[1])

# Вычисляем неопределенный интеграл
indefinite_integral = sp.integrate(expr, (x, 0, 100))

# Выводим результат
print(indefinite_integral)
