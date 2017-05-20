<html>
<head>
    <meta charset="utf-8">
</head>
<script src="js/highcharts.js"></script>
<script src="js/index.js"></script>
<body>
<h2>Hello World!</h2>

<div id="container" style="min-width:800px;height:400px"></div>
<script>
    var chart= new Highcharts.Chart('container', {
        chart: {
            type: 'bar'                         //指定图表的类型，默认是折线图（line）
        },
        title: {
            text: '我的第一个图表'                //指定图表标题
        },
        xAxis: {
            categories: ['苹果', '香蕉', '橙子'] //指定x轴分组
        },
        yAxis: {
            title: {
                text: '吃水果个数'                //指定y轴的标题
            }
        },
        series: [{                              //指定数据列
            name: '小明',                       //数据列名
            data: [1, 0, 4]                     //数据
        }, {
            name: '小红',
            data: [5, 7, 3]
        }]
    });
</script>

</body>
</html>
