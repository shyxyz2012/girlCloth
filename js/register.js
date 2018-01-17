/**
 * Created by shy on 2018/1/12.
 */
//手机号注册地区的显示和隐藏
$(function(){
    $(".country p:nth-child(2)").click(function(){
        if($(".nationHide").is(":hidden")){
            $(".nationHide").show();
        }else{
            $(".nationHide").hide();
        }
    });
})

var inp=document.querySelector('.sure-code [type=text]');
var btn=document.querySelector('.sure-code [type=button]');
var spa=document.querySelector('.sure-code span');
var timer;
btn.onclick=function(){
    //获取0-10之间随机的4个数字
    var str='';
    for(var i=0;i<4;i++){
        str+= parseInt(Math.random()*10);
    }
    spa.innerHTML=str;

    //将btn里的值赋值为60秒倒计时
    var num=30;
    timer=setInterval(function(){
        btn.value=num+'s';
        num--;
        if(num<0){
            clearInterval(timer);
            btn.value="重获取";
        }
    },500);

    //当输入框失去焦点时btn里的值
    inp.onblur=function(){
        if(this.value==spa.innerHTML){
            clearInterval(timer);
            btn.value='验证成功';
        }else{
            clearInterval(timer);
            btn.value='验证失败';
        }
    }
}

var backUp=document.querySelector('.arrow');
backUp.onclick=function(){
    history.back();
}
