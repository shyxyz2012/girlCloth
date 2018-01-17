/**
 * Created by shy on 2018/1/16.
 */
    var backUp=document.querySelector('.arrow');
    backUp.onclick=function(){
        history.back();
    }

    var reg=document.querySelectorAll('.userIntro span');
    var inps=document.querySelectorAll('.userIntro input');
    var patter1=/^.{6,15}$/;
    var patter2=/^[a-zA-Z0-9]{6,14}/;
    var username=reg[0];
    var psw=reg[1];

    var isok1=false;
    inps[0].onblur=function(){
        if(patter1.test(this.value)){
            username.innerHTML='√';
            isok1=true;
        }
        else{
            username.innerHTML='×';
            username.style.color='red';
        }
    }

    var isok2=false;
    inps[1].onblur=function(){
        if(patter2.test(this.value)){
            psw.innerHTML='√';
            isok2=true;
        }
        else{
            psw.innerHTML='×';
            psw.style.color='red';
        }
    }