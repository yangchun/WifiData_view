Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}

function getData(){
    var result = new Array(2)//保存x,y数据
    $.ajax({
        url:'../realtime/flow/get',
        type:'GET', //GET
        timeout:5000,    //超时时间
        dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
        async :false,
        success:function(rs){
            dataStr=JSON.stringify(rs.data);
            var data=JSON.parse(dataStr);
            result[0] = data['time'];
            result[1] = data['count'];
        }
    });
    return result;
}



$(function() {
    $('#container').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0],
                        chart = this;
                    setInterval(function () {
                        //添加数据
                        var array = getData();
                        var x = (new Date()).getTime(), // current time
                            y = array[1];
                        series.addPoint([x, y], true, true);
                        activeLastPointToolip(chart);
                    }, 60000);
                }
            }
        },
        title: {
            text: '实时客流信息'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: '值'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%H:%M', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: '随机数据',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 60000,
                        y: 0
                    });
                }
                return data;
            }())
        }]
    }, function(c) {
        activeLastPointToolip(c);
    });
});

