/**
 * Created by shy on 2018/1/16.
 */
$(function(){
    $("td :lt(4)").css("display","block");
    var btn=document.querySelector(".loginPower button");

    $(".loginPower button").click(function(){
        var dis=$(".loginPower tr:eq(2)").css("display");
        if(dis=="none"){
            $(".loginPower tr").css("display","block");
        }else{
            $(".loginPower tr").css("display","none");
            $(".loginPower tr:lt(2)").css("display","block");
        }

        var i=btn.value++;
        if(i%2==0){
            btn.innerHTML='︿查看全部';
        }else{
            btn.innerHTML='︿点击收起';
        }
    });

// 登录账号，密码的正则表达式
    var reg=document.querySelectorAll('.userIntro span');
    var inps=document.querySelectorAll('.userIntro input');
    //reg.style.display='none';
    var pattern1=/^\d{10}|^1[0-9]{10}|.@qq.com$/;
    var pattern2=/[a-zA-Z0-9]{6,15}$/;
    var account=reg[0];
    var psw=reg[1];

    var isok1=false;
    inps[0].onblur=function(){
        if(pattern1.test(this.value)){
            account.innerHTML='√';
            isok1=true;
        }else{
            account.innerHTML='×';
            account.style.color='red';
        }
    }

    var isok2=false;
    inps[1].onblur=function(){
        if(pattern2.test(this.value)){
            psw.innerHTML='√';
            isok2=true;
        }
        else{
            psw.innerHTML='×';
            psw.style.color='red';
        }
    }
//    点击登录按钮
    var loginBtn=document.querySelector('.loginBtn');
    loginBtn.onclick=function(){
       if(account.value==''||psw.value==''){
           alert('用户名或密码不能为空');
       }
        if(isok1==true&&isok2==true){
            alert('登录成功');
            window.open('../index.html');
        }
    }
});