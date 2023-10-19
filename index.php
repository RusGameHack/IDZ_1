<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Графики</title>
    <link rel="stylesheet" href="/style/bootstrap.min.css">
    <link rel="stylesheet" href="/style/main.css">
</head>
<body>
    <div class="container">
        <input type="text" placeholder="Введите a1">
        <input type="text" placeholder="Введите c">
        <input type="text" placeholder="Введите < X">
        <input type="text" placeholder="Введите > X">
        <input type="text" placeholder="Введите a2">
        <input type="text" placeholder="Введите b">
        <button>Начать</button>

        <h3>1-й пункт</h3>
        <h4>
            1.1. Вычислим математическое ожидание случайной величины ξ, используя формулу:
            <div>
                m<span class="bottomText">ξ</span> = 
                <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
                (x⋅W<span class="bottomText">ξ</span>(x)dx)= <span class="first_1"></span>
            </div>
        </h4>
        <h4>
            1.2. Вычислим средний квадрат случайной величины ξ, используя формулу:
            <div>
                σ<span class="bottomText">ξ</span> = 
                <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
                (x^2⋅W<span class="bottomText">ξ</span>(x)dx)= <span class="first_2"></span>
            </div>
        </h4>
        <h4>
            1.3. Вычислим дисперсию случайной величины ξ, используя формулу:
            <div>
                σ<span class="bottomText">ξ</span>^2 = 
                <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
                ((x-m<span class="bottomText">ξ</span> )^2⋅W<span class="bottomText">ξ</span>(x))dx = <span class="first_3"></span>
            </div>
        </h4>

        <h4>Строим графики:</h4>
        <h3>
            F<span class="bottomText">ξ</span>(x)=∫[W<span class="bottomText">ξ</span>(x)dx]=
            <span class="graphFormul"></span>
        </h3>
        <div id="chartdiv1" style="width: 100%; height: 400px;"></div>
        <h3>
            F<span class="bottomText">ξ</span>(y)=∫[W<span class="bottomText">ξ</span>(y)dx]=
            <span class="graphFormul"></span>
        </h3>
        <div id="chartdiv2" style="width: 100%; height: 400px;"></div>
        <h3 class="graphFormul"></h3>
        <div id="chartdiv3" style="width: 100%; height: 400px;"></div>
    </div>
    
    <script src="jquery.js"></script>
    <script src="myMath.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
    <script src="./main.js"></script>
</body>
</html>