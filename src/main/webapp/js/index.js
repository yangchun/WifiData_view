$(function() {
    var array=new Array(3);
    $.ajax({
        url:'../stoptime/get',
        type:'GET', //GET
        timeout:5000,    //超时时间
        dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
        success:function(rs){
           dataStr=JSON.stringify(rs.data);
           var data=JSON.parse(dataStr);
           array[0]=data['first'];
           array[1]=data['second'];
           array[2]=data['third'];
            addData(array);
        }
    })

});

function addData(array){
    var chart = new Highcharts.Chart('container', {// 图表初始化函数，其中 container 为图表的容器 div
        chart: {
            type: 'bar'                           //指定图表的类型，默认是折线图（line）
        },
        title: {
            text: '顾客进店停留时间'                 //指定图表标题
        },
        xAxis: {
            categories: ['0-10min', '10-30min', '30-60min']   //指定x轴分组
        },
        yAxis: {
            title: {
                text: '人数'                 //指定y轴的标题
            }
        },
        series: [{                                 //指定数据列
            data: array                        //数据
        }
        ]
    });
}