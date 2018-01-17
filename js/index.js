/**
 * Created by shy on 2018/1/10.
 */
//首页幻灯片部分开始
    $(function(){
        var i=0;
        var timer;
        //第一章图片显示，其它隐藏
        $(".ig").eq(0).show().siblings().hide();
        //图片自动轮播
        showTimer();

        //当鼠标放在圆点时图片切换
        $(".tab").hover(function(){
            clearInterval(timer);
            i=$(this).index();
            show();
        },function(){
            showTimer()
        });

        function show(){
            $(".ig").eq(i).show().siblings().hide();
            $(".tab").eq(i).addClass('bg').siblings().removeClass('bg');
        }

        function showTimer(){
           timer = setInterval(function(){
                i++;
                if(i>4){
                    i=0;
                }
                show();
            },1500)
        }
    })
//首页幻灯片部分结束

//首页到计时开始
function getTime(){
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

    var str=add(h)+':'+add(m)+':'+add(s);
    var st1=add(d)+'天'+add(h)+'时'+add(m)+'分'+add(s)+'秒';
    return str;
}
//首页到计时结束

//首页计时器开始
//当时间是一位数时在其前面加0
function add(num){
    if(num>9){
        return num;
    }else{
        return "0"+num;
    }
}
//首页计时器结束

//列表页价格的显示和隐藏
$(function(){
    $(".newType b").click(function(){
        if($(".listPrice").is(":hidden")){
            $(".listPrice").slideDown();
        }else{
            $(".listPrice").slideUp();
        }
    });
})

var timeB=document.querySelector('.interTime b');
timeB.innerHTML=getTime();
setInterval(function(){
    timeB.innerHTML=getTime();
},1000)

//当首页搜索框获取焦点时让隐藏的搜索框显示，失去焦点时让其隐藏
var skip=document.querySelector('.search-inner input');
var hideDiv=document.querySelector('.searchHide');
skip.onclick=function(){
    hideDiv.style.display='block';
}

//当隐藏搜索框后去获取焦点时边框变色，失去焦点时变回原来的颜色
var getFocus=document.querySelector('.inner input');
var sHide=document.querySelector('.inner');
getFocus.onfocus=function(){
    sHide.style='border:1px solid #FF4466;';
    getFocus.value='';
}
getFocus.onblur=function(){
    sHide.style='border:1px solid #808080;';
}

//点击隐藏搜索框中的箭头，返回首页
var backUp=document.querySelector('.hideTitle-inner b');
backUp.onclick=function(){
    hideDiv.style.display='none';
}

//获取搜索框中的值并将值加入到另一个ul列表中
var ulList=document.querySelector('.fangda ul');
getFocus.onblur=function(){
    var  evt= this.value;
    var newLi=document.createElement('li');
    newLi.innerHTML=evt;
    ulList.insertBefore(newLi,ulList.firstChild);
}

//点击删除按钮移除ul列表
var del=document.querySelector('.fangda ins');
del.onclick=function(){
    ulList.remove();
}