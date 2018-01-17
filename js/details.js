/**
 * Created by shy on 2018/1/16.
 */
$(function(){
    //头部倒计时部分
    var detail=document.querySelector('.timeStart div');
    detail.innerHTML=getDetailTime();
    setInterval(function(){
        detail.innerHTML=getDetailTime();
    },1000)

    //快捷导航部分
    var hideSide=document.querySelector('#detailAside .first');
    var hideBig=document.querySelector('#fastNav');
    var hideAll=document.querySelector('.hideNavLast');

    hideSide.onclick=function(){
        hideBig.style.display='block';
    }
    hideAll.onclick=function(){
        hideBig.style.display='none';
    }

    //加入购物车部分
    var shopCar=document.querySelectorAll('#proDetails_footer .equal')[2];
    var hideCar=document.querySelector('#innerCar');
    hideCar.style.display = "none";
    shopCar.onclick=function(){
        hideCar.style.display='block';
    }

    var cha=document.querySelector('.proInCar');
    cha.onclick=function(){
        hideCar.style.display='none';
    }

//详情页的倒计时部分开始
    function getDetailTime(){
        var cdate=new Date();
        var cms=cdate.getTime();
        var fdate=new Date('2018/02/01');
        var fms=fdate.getTime();
        var res=fms-cms;

        var a = 1000;
        var ma = 60*a;
        var ha = 60*ma;
        var da = 24*ha;

        var d=parseInt(res/da);
        var h=parseInt(res%da/ha);
        var m=parseInt(res%da%ha/ma);
        var s=parseInt(res%da%ha%ma/a);

        var str=add(d)+'天'+add(h)+'时'+add(m)+'分'+add(s)+'秒';
        return str;
    }

    function add(num){
        if(num>9){
            return num;
        }else{
            return "0"+num;
        }
    }
//详情页的倒计时部分结束
})