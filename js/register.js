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
