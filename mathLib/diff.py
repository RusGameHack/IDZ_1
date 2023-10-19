import sympy as sp

def calculate_derivative(expr, variable):
    # Создаем символы
    x = sp.symbols(variable)

    # Преобразуем строку в выражение
    expression = sp.sympify(expr)

    # Вычисляем производную
    derivative = sp.diff(expression, x)

    return derivative

expr = "a * x**2"  # математическая формула
variable = "x"  # Переменная, по которой берется производная
derivative = calculate_derivative(expr, variable)

# Вывод результата
print(derivative)