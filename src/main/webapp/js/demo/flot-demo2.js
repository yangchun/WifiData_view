
//Flot Pie Chart
$(function(){
	power();
	cop(getRangeData(7,100,20,0),0);
	stops(getRangeData(7,10,0,1));
	times(getRangeData(7,24,12,1));
});

function changeEq(){
	cop(getRangeData(7,100,20,0),0);
	stops(getRangeData(7,10,0,1));
	times(getRangeData(7,24,12,1));
}
function changeTime(state){
	var num=0;
	if(state==0||state==1){
		num=7;
	}
	if(state==2){
		num=12;
	}
	if(state==3){
		num=4;
	}
	cop(getRangeData(num,100,20,0),state);
	stops(getRangeData(7,10,0,1));
	times(getRangeData(7,24,12,1));
}




function power() {
    var container = $("#flot-line-chart-moving");
    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.
    var maximum = container.outerWidth() / 2 || 300;
    //
    var data = [];
    function getRandomData() {
        if (data.length) {
            data = data.slice(1);
        }
        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }
        return res;
    }
    series = [{
        data: getRandomData(),
        lines: {
            fill: true
        }
    }];
    var plot = $.plot(container, series, {
        grid: {
            color: "#999999",
            tickColor: "#D4D4D4",
            borderWidth:0,
            minBorderMargin: 20,
            labelMargin: 10,
            backgroundColor: {
                colors: ["#ffffff", "#ffffff"]
            },
            margin: {
                top: 8,
                bottom: 20,
                left: 20
            },
            markings: function(axes) {
                var markings = [];
                var xaxis = axes.xaxis;
                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                    markings.push({
                        xaxis: {
                            from: x,
                            to: x + xaxis.tickSize
                        },
                        color: "#fff"
                    });
                }
                return markings;
            }
        },
        colors: ["#1ab394"],
        xaxis: {
            tickFormatter: function() {
                return "";
            }
        },
        yaxis: {
            min: 0,
            max: 110
        },
        legend: {
            show: true
        }
    });
    // Update the random dataset at 25FPS for a smoothly-animating chart

    setInterval(function updateRandom() {
        series[0].data = getRandomData();
        plot.setData(series);
        plot.draw();
    }, 40);
}




function cop(mdata,state) {
	var labels=[];
	if(state==0){
		labels=["13h", "14h", "15h", "16h", "17h", "18h", "19h"];
	}
	if(state==1){
		labels=["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	}
	if(state==2){
		labels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];
	}
	if(state==3){
		labels=["第一季度","第二季度","第三季度","第四季度"]
	}
    var lineData = {
        labels: labels,
        datasets: [
                   {
                       label: "Example dataset",
                       fillColor: "rgba(220,220,220,0.5)",
                       strokeColor: "rgba(220,220,220,1)",
                       pointColor: "rgba(220,220,220,1)",
                       pointStrokeColor: "#fff",
                       pointHighlightFill: "#fff",
                       pointHighlightStroke: "rgba(220,220,220,1)",
                       data: mdata
                   }       
        ]
    };

    var lineOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(lineData, lineOptions);
}





function stops(mdata){
    var barOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.0
                    }, {
                        opacity: 0.0
                    }]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["red"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: mdata
    };
   
    $.plot($("#flot-line-chart"), [barData], barOptions);
}


function times(mdata){
    var barOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.0
                    }, {
                        opacity: 0.0
                    }]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#1ab394"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: mdata
    };
   
    $.plot($("#flot-line-chart1"), [barData], barOptions);
}


function getRangeData(num,Max,Min,state){
	var Range = Max - Min;   
	var res=[];
	if(state==0){
		for(i=1;i<=num;i++){
			var Rand = Math.random();
			var d=Min + Math.round(Rand * Range);
			res.push(d);
		}
	}
	if(state==1){
		for(i=1;i<=num;i++){
			var Rand = Math.random();
			res.push([i,Min + Math.round(Rand * Range)]);
		}
	}
	return res;
}

