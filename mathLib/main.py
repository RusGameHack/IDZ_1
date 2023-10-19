import sympy as sp

# Создаем символы для переменных
x, c, α = sp.symbols('x c α')

# Задаем функцию с использованием переменных c и α
expr = c * α * sp.exp(-α * x - c * sp.exp(-α * x))

# Устанавливаем значение α
α_value = 1
# Заменяем α в выражении на его значение
expr_with_value = expr.subs(α, α_value)

# Устанавливаем значение c
c_value = 1
# Заменяем c в выражении на его значение
expr_with_value = expr_with_value.subs(c, c_value)

# Вычисляем неопределенный интеграл
indefinite_integral = sp.integrate(expr_with_value, x)

# Выводим результат
print(indefinite_integral)
