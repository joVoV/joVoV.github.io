 
//��ȡCanvas����(����)   
var canvas = document.getElementById("myCanvas");   
//�򵥵ؼ�⵱ǰ������Ƿ�֧��Canvas����������һЩ��֧��html5�����������ʾ�﷨����   
if(canvas.getContext){     
    //��ȡ��Ӧ��CanvasRenderingContext2D����(����)   
    var ctx = canvas.getContext("2d");     
       
    //��ʼһ���µĻ���·��   
    ctx.beginPath();   
    //����������ɫΪ��ɫ   
    ctx.strokeStyle = "blue";   
    //����·���������   
    ctx.moveTo(20, 50);   
    //����ֱ���߶ε������(60, 50)   
    ctx.lineTo(20, 100);   
    //����ֱ���߶ε������(60, 90)   
    ctx.lineTo(70, 100);       
    //�ȹرջ���·����ע�⣬��ʱ����ʹ��ֱ�����ӵ�ǰ�˵����ʼ�˵㡣   
    ctx.closePath();   
    //��󣬰��ջ���·������ֱ��   
    ctx.stroke();   
}     
