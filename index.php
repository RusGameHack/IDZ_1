<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Графики</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style/bootstrap.min.css">
    <link rel="stylesheet" href="/style/main.css">
</head>
<body>
    <div class="container">
        <div class="defaultGap mb-4">
            <input type="text" placeholder="Введите a1">
            <input type="text" placeholder="Введите c">
            <br>
            <input type="text" class="graphSize_start" placeholder="Диапазон первого графика от">
            <input type="text" class="graphSize_stop" placeholder="Диапазон первого графика до">
            <br>
            <input type="text" class="graphSize_start" placeholder="Диапазон второго графика от">
            <input type="text" class="graphSize_stop" placeholder="Диапазон второго графика до">
            <br>
            <input type="text" class="graphSize_start" placeholder="Диапазон третьего графика от">
            <input type="text" class="graphSize_stop" placeholder="Диапазон третьего графика до">
            <br>
            <button>Начать</button>
        </div>
        

        <h3>1.	Символьные безынтегральные выражения и численные значения:</h3>
        <h4 class="mt-3">
            1.1. Вычислим математическое ожидание случайной величины ξ, используя формулу:
            <div class="mt-1">
                m<span class="bottomText">ξ</span> = 
                <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
                (x⋅W<span class="bottomText">ξ</span>(x)dx)= <span class="first_1"></span>
            </div>
        </h4>
        <h4 class="mt-3">
            1.2. Вычислим средний квадрат случайной величины ξ, используя формулу:
            <div class="mt-1">
                σ<span class="bottomText">ξ</span> = 
                <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
                (x^2⋅W<span class="bottomText">ξ</span>(x)dx)= <span class="first_2"></span>
            </div>
        </h4>
        <h4 class="mt-3">
            1.3. Вычислим дисперсию случайной величины ξ, используя формулу:
            <div class="mt-1">
                σ<span class="bottomText">ξ</span>^2 = 
                <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
                ((x-m<span class="bottomText">ξ</span> )^2⋅W<span class="bottomText">ξ</span>(x))dx = <span class="first_3"></span>
            </div>
        </h4>

        <h4 class="mt-5">2.	Символьные выражения и построить график:</h4>
        <h3 class="mt-4 mb-4">
            F<span class="bottomText">ξ</span>(x)=
            <span class="graphFormul"></span>
        </h3>
        <div id="chartdiv1" class="graph" style="width: 100%; height: 400px;"></div>
        <h3 class="mt-4 mb-4">
            F<span class="bottomText">ξ</span>(y)=∫[W<span class="bottomText">ξ</span>(y)dx]=
            <span class="graphFormul"></span>
        </h3>
        <div id="chartdiv2" class="graph" style="width: 100%; height: 400px;"></div>
        <h3 class="mt-4 mb-4">
            W(y)=d/dy(<span class="graphFormul_2"></span>)
            <span class="graphFormul"></span>
        </h3>
        <div id="chartdiv3" class="graph" style="width: 100%; height: 400px;"></div>

        <!-- 3-й пункт -->
        <h3 class="mt-4">3.	Символьные выражения и численные значения:</h3>
        <h4 class="mt-2 mb-4">
            Математическое ожидание случайной величины ƞ: <br>
            m<span class="bottomText">ƞ</span>=
            <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
            [y*W<span class="bottomText">ƞ</span>(y)dy]=
            <span class="thirdhFormul"></span>
        </h4>
        <h4 class="mt-2 mb-4">
            Средний квадрат случайной величины ƞ: <br>
            σ<span class="bottomText">ƞ</span>=
            <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
            [<span class="position-relative">y<span class="square">2</span></span>
            *W<span class="bottomText">ƞ</span>(y)dy]=
            <span class="thirdhFormul"></span>
        </h4>
        <h4 class="mt-2 mb-4">
            Дисперсия случайной величины ƞ: <br>
            σ<span class="square">2</span><span class="bottomText">ƞ</span>=
            <span class="position-relative">&#0160;∫<span class="ot">0</span><span class="do">∞</span></span>
            [<span class="position-relative">(y-m<span class="bottomText">ƞ</span>)<span class="square">2</span></span>
            *W<span class="bottomText">ƞ</span>(y)dy]=
            <span class="thirdhFormul"></span>
        </h4>
    </div>


    <div class="loading active visible">
        <img class="loading__image" src="./img/loading.gif">
    </div>
    <script src="./jquery.js"></script>
    <script src="./myMath.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
    <script src="./main.js"></script>
</body>
</html>