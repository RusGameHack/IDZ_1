// Определение констант и функций для интегрирования
let Wc = 1,
    Wa = 1,
    xMath = 0,
    gX = 'a * x**2',
    a = 1;
start();
document.querySelector('button').addEventListener('click', ()=>{
    const inputs = document.querySelectorAll('input');
    Wa = inputs[0].value;
    Wc = inputs[1].value;
    start();
});
function start() {
    let mainFormula = 'Wc * Wa * Math.exp(-Wa*x-Wc*Math.exp(-Wa*x))'.replace(/Math.exp/g, 'sp.exp').replace(/Wa/g, 'a').replace(/Wc/g, 'c');
    function We(x) {
        return Wc * Wa * Math.exp(-Wa*x-Wc*Math.exp(-Wa*x));
    }
    let WeAjax = '';
    console.log(mainFormula);
    $.ajax({
        url: './vendor/integral.php',         /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        data: {text: JSON.stringify(mainFormula), a: Wa, c: Wc},     /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
            console.log(data);            /* В переменной data содержится ответ от index.php. */
            WeAjax = data.replace(/exp/g, 'Math.exp');
            console.log(WeAjax);
            secondStart();
        }
    });

    function secondStart() {
        function WeAjaxFunction(x) {
            return eval(WeAjax);
        }
        // Создаем функцию для создания графика с единичными интервалами
        function createChart(containerId, seriesName, tooltipText, nameTitleY='Y', needTextX=0) {
            var chart = am4core.create(containerId, am4charts.XYChart);
        
            // Создаем оси и устанавливаем интервалы
            var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
            xAxis.renderer.minGridDistance = 1; // Устанавливаем минимальное расстояние между вертикальными линиями на 1 единицу
            xAxis.title.text = needTextX==0 ? '' : tooltipText; // Устанавливаем подпись оси X
        
            var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
            yAxis.renderer.minGridDistance = 20; // Устанавливаем минимальное расстояние между горизонтальными линиями на 1 единицу
            yAxis.title.text = nameTitleY; // Устанавливаем подпись оси Y
        
            // Создаем серии для графика
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "y";
            series.dataFields.valueX = "x";
            series.name = seriesName;
            series.tooltipText = tooltipText;
        
            return chart;
        }
        // Создание трех графиков
        var chart1 = createChart("chartdiv1", "X", "X: [bold]{y}[/]", 'F(X)');
        var chart2 = createChart("chartdiv2", "Y", "X: [bold]{y}[/]", 'F(Y)');
        var chart3 = createChart("chartdiv3", "Y", "X: [bold]{y}[/]", 'W(Y)');
        
        // Вычисление интегралов
        const resultMath = integrate(intX => intX * We(intX), 0, 100);
        const resultMath2 = integrate(intX => intX * intX * We(intX), 0, 100);
        const resultMath3 = integrate(intX => (intX - resultMath) * (intX - resultMath) * We(intX), 0, 100);

        // Вывод результатов
        document.querySelector('.first_1').innerHTML = parseFloat(resultMath.toFixed(3));
        document.querySelector('.first_2').innerHTML = parseFloat(resultMath2.toFixed(3));
        document.querySelector('.first_3').innerHTML = parseFloat(resultMath3.toFixed(3));
        
        // Генерация данных для графиков y
        function generateyData(Wc, Wa, start, end, formula) {
            var data = [];
            for (var x = start; x < end; x += 0.1) {
                var yValue = formula(x);
                // console.log(formula(x));
                data.push({ x: x, y: yValue });
            }
            return data;
        }
        var data1 = generateyData(Wc, Wa, -10, 10, (x) => WeAjaxFunction(x));
        var data2 = generateyData(Wc, Wa, -10, 10, (x) => WeAjaxFunction(x));
        var data3 = generateyData(Wc, Wa, -10, 10, (x) => We(x));
        let graphFormuls = document.querySelectorAll('.graphFormul');
            graphFormuls[0].innerHTML = WeAjax.replace(/Math./g, '');
            graphFormuls[1].innerHTML = WeAjax.replace(/x/g, 'y').replace(/eyp/g, 'exp').replace(/Math./g, '');
            graphFormuls[2].innerHTML = We;

        
        chart1.series.values[0].data = data1;
        chart2.series.values[0].data = data2;
        chart3.series.values[0].data = data3;

        // Добавление легенды к каждому графику
        chart1.legend = new am4charts.Legend();
        chart2.legend = new am4charts.Legend();
        chart3.legend = new am4charts.Legend();
    }
    
}