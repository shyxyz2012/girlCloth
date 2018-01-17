/**
 * Created by shy on 2018/1/16.
 */
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
    }
    getFocus.onblur=function(){
        sHide.style='border:1px solid #808080;';
    }

    //点击隐藏搜索框中的箭头，返回首页
    var backUp=document.querySelector('.hideTitle-inner b');
    backUp.onclick=function(){
        hideDiv.style.display='none';
}
