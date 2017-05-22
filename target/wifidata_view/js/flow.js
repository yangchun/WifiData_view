

//获取URL参数的方法
function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

$(function() {
    var day = getQueryString("day"); //获取需查询的时间（天）
    var array1=new Array(15);
    var array2=new Array(15);
    var array3=new Array(15);
    var array4=new Array(15);
    var time="";

    //入店量
    $.ajax({
        url:'../flow/entered/day/'+day,
        type:'GET', //GET
        timeout:5000,    //超时时间
        async :false,
        dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
        success:function(rs){
            dataStr=JSON.stringify(rs.data);
            var data=JSON.parse(dataStr);
            time = data['time']
            array1[0]=data['8'];
            array1[1]=data['9'];
            array1[2]=data['10'];
            array1[3]=data['11'];
            array1[4]=data['12'];
            array1[5]=data['13'];
            array1[6]=data['14'];
            array1[7]=data['15'];
            array1[8]=data['16'];
            array1[9]=data['17'];
            array1[10]=data['18'];
            array1[11]=data['19'];
            array1[12]=data['20'];
            array1[13]=data['21'];
            array1[14]=data['22'];
            array4=array1;
            addDataToEnteredFlow(time,array1);
        }
    });

    //客流量
    $.ajax({
        url:'../flow/notenter/day/'+day,
        type:'GET', //GET
        timeout:5000,    //超时时间
        dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
        async :false,
        success:function(rs){
            dataStr=JSON.stringify(rs.data);

            var data=JSON.parse(dataStr);
            //var time = data['time']
            array2[0]=data['8'];
            array2[1]=data['9'];
            array2[2]=data['10'];
            array2[3]=data['11'];
            array2[4]=data['12'];
            array2[5]=data['13'];
            array2[6]=data['14'];
            array2[7]=data['15'];
            array2[8]=data['16'];
            array2[9]=data['17'];
            array2[10]=data['18'];
            array2[11]=data['19'];
            array2[12]=data['20'];
            array2[13]=data['21'];
            array2[14]=data['22'];
            addDataToEnterFlow(time,array2);
        }
    });

    for (var i=0;i<15;i++) {
        array3[i] = (parseFloat(array1[i])/parseFloat(array2[i]).toFixed(4))*100;
    }

    //入店率
    addDateToFlowRate(time,array3);


});

function addDataToEnteredFlow(time,array){

    var chart = new Highcharts.Chart('container', {
        title: {
            text: time+ '入店量',
            x: -20
        },
        xAxis: {
            categories: ['8','9','10','11','12','13','14','15','16','17','18','19','20','21','22']   //指定x轴分组
        },
        yAxis: {
            title: {
                text: '人数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人 '
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '入店量',
            data: array
        }]
    });
}


function addDataToEnterFlow(time,array){
    var chart = new Highcharts.Chart('container1', {
        title: {
            text: time+ '客流量',
            x: -20
        },
        xAxis: {
            categories: ['8','9','10','11','12','13','14','15','16','17','18','19','20','21','22']   //指定x轴分组
        },
        yAxis: {
            title: {
                text: '人数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '人 '
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '客流量',
            data: array,
            color:"#434348"
        }]
    });
}

function addDateToFlowRate(time,array){
    var chart = new Highcharts.Chart('container2', {
        title: {
            text: time+ '入店率',
            x: -20
        },
        xAxis: {
            categories: ['8','9','10','11','12','13','14','15','16','17','18','19','20','21','22']   //指定x轴分组
        },
        yAxis: {
            title: {
                text: '入店率'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '入店率',
            data: array
        }]
    });
}
