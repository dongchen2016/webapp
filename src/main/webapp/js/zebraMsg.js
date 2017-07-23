/**
 * 简化提示，操作失败
 *
 * iserror 错误消息否-默认true
 * msg 消息内容
 */
var zebra_simple = function(msg, issuccess,callback,timeout) {
    var mSg = "抱歉，操作失败！"
    if (typeof(msg) == "undefined") {
        mSg = "抱歉，操作失败！";
    }else{
        mSg = msg;
    }
    var isSuccess = false;
    if (typeof(issuccess) != "undefined") {
        isSuccess = issuccess;
    }
    var classZebraName = 'errzebramsg';
    if (isSuccess) {
        classZebraName = 'zebramsg';
    }

    var callbackFunc = function(){};
    var defaultTimeout = 5000;
    if(callback){
        callbackFunc = callback;
    }
    if(timeout){
        defaultTimeout = timeout;
    }

    if(isSuccess){
        new $.Zebra_Dialog('<font color="white">'+mSg+'</font>', {
            'buttons':  false,
            'modal': false,
            'custom_class':  classZebraName,
            'position':['center','middle'],
            'max_height':'20px',
           // 'position':['center','top-10'],
            'auto_close': defaultTimeout,
            onClose:callback
        });
//        $(".ZebraDialog .ZebraDialog_BodyOuter ").css('background','#68af02');
    }else{
        new $.Zebra_Dialog(mSg, {
            'buttons':  false,
            'modal': false,
            'custom_class':  classZebraName,
//            'type':'error',
            'position':['center','middle'],
            'max_height':'20px',
           // 'position':['center','top-10'],
            'auto_close': defaultTimeout
        });
//        $(".ZebraDialog .ZebraDialog_BodyOuter ").css('background','#ef8f00');
    }
}
