 
//获取Canvas对象(画布)   
var canvas = document.getElementById("myCanvas");   
//简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误   
if(canvas.getContext){     
    //获取对应的CanvasRenderingContext2D对象(画笔)   
    var ctx = canvas.getContext("2d");     
       
    //开始一个新的绘制路径   
    ctx.beginPath();   
    //设置线条颜色为蓝色   
    ctx.strokeStyle = "blue";   
    //设置路径起点坐标   
    ctx.moveTo(20, 50);   
    //绘制直线线段到坐标点(60, 50)   
    ctx.lineTo(20, 100);   
    //绘制直线线段到坐标点(60, 90)   
    ctx.lineTo(70, 100);       
    //先关闭绘制路径。注意，此时将会使用直线连接当前端点和起始端点。   
    ctx.closePath();   
    //最后，按照绘制路径画出直线   
    ctx.stroke();   
}     
