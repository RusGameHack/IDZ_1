// Определение констант и функций для интегрирования
let Wc = 1,
    Wa = 1,
    xMath = 0,
    gX = 'a * x**2',
    a = 1;
start();
document.querySelector('button').addEventListener('click', ()=>{
    const inputs = document.querySelectorAll('input');
    Wa = inputs[0].value == '' ? 1 : Number(inputs[0].value);
    Wc = inputs[1].value== '' ? 1 : Number(inputs[1].value);
    start();
});
function start() {
    let mainFormula = 'Wc * Wa * Math.exp(-Wa*x-Wc*Math.exp(-Wa*x))'.replace(/Math.exp/g, 'sp.exp').replace(/Wa/g, 'a').replace(/Wc/g, 'c');
    function We(x) {
        return Wc * Wa * Math.exp(-Wa*x-Wc*Math.exp(-Wa*x));
    }
    let WeAjax = '',
        dif = '';
    console.log(mainFormula);
    $.ajax({
        url: './vendor/integral.php',         /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        data: {text: JSON.stringify(mainFormula), a: Wa, c: Wc},     /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
            // console.log(data);            /* В переменной data содержится ответ от index.php. */
            WeAjax = data.replace(/exp/g, 'Math.exp');
            console.log(WeAjax);
            $.ajax({
                url: './vendor/dif.php',         /* Куда пойдет запрос */
                method: 'post',             /* Метод передачи (post или get) */
                data: {text: JSON.stringify(WeAjax.replace(/Math.exp/g, 'sp.exp')), a: Wa, c: Wc},     /* Параметры передаваемые в запросе. */
                success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                    console.log(data);            /* В переменной data содержится ответ от index.php. */
                    dif = data.replace(/exp/g, 'Math.exp');
                    console.log(dif);
                    secondStart();
                }
            });
        }
    });

    function secondStart() {

        // Размеры графиков
        const inputElementsStart = document.querySelectorAll('.graphSize_start'),
            inputValuesStart = Array.from(inputElementsStart).map(input => input.value == '' ? -10 : Number(input.value)),
            inputElementsStop = document.querySelectorAll('.graphSize_stop'),
            inputValuesStop = Array.from(inputElementsStop).map(input => input.value == '' ? 10 : Number(input.value))
        console.log(inputValuesStart);
        console.log(inputValuesStop);

        // Формулы для расчета графиков
        function WeAjaxFunction(x) {
            return eval(WeAjax);
        }
        function difEvalFunc(x) {
            return eval(dif);
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
        function generateyData(start, end, formula) {
            var data = [];
            for (var x = start; x < end; x += 0.1) {
                var yValue = formula(x);
                // console.log(formula(x));
                data.push({ x: x, y: yValue });
            }
            return data;
        }
        var data1 = generateyData(inputValuesStart[0], inputValuesStop[0], (x) => WeAjaxFunction(x));
        var data2 = generateyData(inputValuesStart[1], inputValuesStop[1], (x) => WeAjaxFunction(x));
        var data3 = generateyData(inputValuesStart[2], inputValuesStop[2], (x) => difEvalFunc(x));
        let graphFormuls = document.querySelectorAll('.graphFormul');
            graphFormuls[0].innerHTML = WeAjax.replace(/Math./g, '');
            graphFormuls[1].innerHTML = WeAjax.replace(/x/g, 'y').replace(/eyp/g, 'exp').replace(/Math./g, '');
            document.querySelector('.graphFormul_2').innerHTML = graphFormuls[1].innerHTML;
            graphFormuls[2].innerHTML = dif.replace(/x/g, 'y').replace(/eyp/g, 'exp').replace(/Math./g, '');

        
        chart1.series.values[0].data = data1;
        chart2.series.values[0].data = data2;
        chart3.series.values[0].data = data3;

        // Добавление легенды к каждому графику
        chart1.legend = new am4charts.Legend();
        chart2.legend = new am4charts.Legend();
        chart3.legend = new am4charts.Legend();
    }
    
}