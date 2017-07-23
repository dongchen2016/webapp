window.onload = function() {
    if (!-[1,]) { // only IE & ver lt 10
        document.write('<p style="text-align: center">亲，Chrome是您身份的象征，请使用华丽丽滴Chrome浏览器！！</p>');
    }
};

// =============================================
// ------------------- 弹出框 -------------------
// =============================================
/**
 * 标签居中，给jquery增加新工具方法
 * 使用方式$('#div').center(true)
 *
 * isParent 默认为false,true相对父级别窗体大小
 */
$.fn.center = function(isParent) {
    var parent = window;
    if (isParent) {
        parent = this.parent();
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
};
$.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : $("<p>").append(this.eq(0).clone()).html();
};

/**
 * 弹出框，基本文字版
 *
 * div#dialog_simple
 *
 * 调用方法：
 * dialog_simple()
 * dialog_simple({width:200})
 * dialog_simple({html:'添加成功', top: '20px', hide: true, time: 2000})
 * dialog_simple({html:'修改成功', time: 2000})
 *
 * 参数传入map {}
 * content 提示内容，支持html标签
 * top     弹出层居上高度，默认136px
 * hide    是否自动隐藏，默认true,隐藏
 * status  状态,默认成功：success，颜色为绿色，否则为红色
 * time    隐藏延迟时间，默认5秒=5000毫秒
 */
var dialog_simple = function(opts) {
    opts = $.extend({
        content: "恭喜，操作成功！",
        top: '103px',
        hide: true,
        status: 'success', // error
        time: 5000,
        isParent: true
    },opts||{});
    var className = 'msg';
    if (opts.status == 'error') {
        className = 'errmsg';
    }
    var parent = window;
    if (opts.isParent) {
        parent = window.parent;
    }
    parent.$("#dialog_simple").remove();
    var s ='';
    s +='<div id="dialog_simple" style="position: absolute; width: 100%; padding-top: 2px; height: 24px; top: '+opts.top+'; text-align: center;">';
    s +='<span class="'+className+'">'+opts.content+'</span>';
    s +='</div>';
    parent.$("body").prepend(s);
    if (opts.hide) {
        parent.$("#dialog_simple").delay(opts.time).fadeOut();
    }
};

/**
 * 简化提示，操作成功
 * c 内容
 * p 窗体默认true
 */
var dialog_simple_ok = function(c, p, top) {
    if (typeof(c) == "undefined") {
        c = "恭喜，操作成功！";
    }
    var isParent = true;
    if (typeof(p) != "undefined") {
        isParent = p;
    }
    var t = '103px';
    if (typeof(top) != "undefined") {
        t = top
    }
    if (isParent == false && t == '103px') {
        t = '0px';
    }
    dialog_simple({status:'success', content:c, isParent: p, top:t});
}

/**
 * 简化提示，操作失败
 *
 * c 内容
 * p 窗体默认true
 */
var dialog_simple_fail = function(c, p, top) {
    if (typeof(c) == "undefined") {
        c = "抱歉，操作失败！";
    }
    var isParent = true;
    if (typeof(p) != "undefined") {
        isParent = p;
    }
    var t = '103px';
    if (typeof(top) != "undefined") {
        t = top
    }
    if (isParent == false && t == '103px') {
        t = '0px';
    }
    dialog_simple({status:'error', content:c, isParent: p, top:t});
}

/**
 * 弹出框，动态页面
 *
 * 调用方式：
 * dialog_iframe({url:$(this).attr("href"), title:"导航设置", isParent:false});
 * dialog_iframe({url:'http://127.0.0.1:8080/security', title:"安全设置", width:700, height:600});
 *
 * 参数传入：map {}
 * url      请求url，将返回页面至对话框内
 * title    弹出框标题，页面名称
 * width    弹出框宽度
 * height   弹出框高度
 * isParent 遮盖父窗体，默认遮盖父窗体。
 *
 */
var dialog_iframe = function(opts) {
    opts = $.extend({
        url: "/404.jsp",
        title:"标题",
        width: 650,
        height: 500,
        isParent: true,
        closeOnEscape: true,
        resizable: true,
        draggable: true,
        scroll: false,     // 窗体内容翻屏
        my:"center",
        at:"center"
    },opts||{});
    var parent = window;
    if (opts.isParent) {
        parent = window.parent;
    }
    if(opts.self){
        parent = self;
    }

    var openfun = function(event, ui) { };
    if (!opts.closeOnEscape) {
        openfun = function(event, ui) { parent.$(".ui-dialog-titlebar-close").hide(); }
    }
    parent.$("#dialog iframe").attr('src',""); // fix:大于第一次请求后iframe存在之前地址，获取$('dialog')对象会自动加载一次src地址
    parent.$("#dialog").remove();
    // parent.$("body").prepend('<div id="dialog"></div>');
    var scollAttr = '';
    if (!opts.scroll) {
        scollAttr = ' frameborder="0" scrolling="no" ';
    }
    
    parent.$('<div id="dialog"></div>').html('<iframe '+scollAttr+'style="border: 0px; " src="' + opts.url + '" width="100%" height="100%"></iframe>')
        .dialog({
            modal : true,
            height : opts.height,
            closeText : '关闭',
            closeOnEscape: opts.closeOnEscape,
            open: openfun,
            resizable: opts.resizable,
            draggable: opts.draggable,
            width : opts.width,
            title : opts.title,
            position:{my: opts.my, at: opts.at, of: parent}
        });
}

/**
 * 弹出框，动态html
 *
 * 调用方式：
 * dialog_html({title:"导航设置", html:"<div>test</div>", isParent:false});
 * dialog_html({title:"安全设置", html:"<div><p>test</p></div>", width:700, height:600});
 *
 * 参数传入：map {}
 * title    弹出框标题
 * html     弹出框内容
 * width    弹出框宽度
 * height   弹出框高度
 * isParent 遮盖父窗体，默认遮盖父窗体。
 *
 */
var dialog_html = function(opts) {
    opts = $.extend({
        title:"标题",
        html: "",
        width: 500,
        height: 400,
        isParent: true
    },opts||{});

    var parent = window;
    if (opts.isParent) {
        parent = window.parent;
    }
    parent.$("#dialog").remove();
    parent.$("body").prepend('<div id="dialog"></div>');
    parent.$("#dialog").html(opts.html).dialog({
        modal : true,
        height : opts.height,
        width : opts.width,
        title : opts.title
    });
}

/**
 * 关闭iframe页面弹出框
 * 调用方式：
 * dialog_close({callBack:function(){
 *    // operating
 * }, isParent:true})
 *
 * 传入参数：map{}
 * callBack  回调方法
 * isParent  参考dialog_iframe.isParent
 */
var dialog_close = function(opts) {
    opts = $.extend({
        callBack: function(){},
        isParent: true
    },opts||{});

    var parent = window;
    if (opts.isParent) {
        parent = window.parent;
    }
    parent.$('#dialog').dialog('close');
    opts.callBack();
}

/**
 * 彈出框，確認對話框
 *
 * 調用方式：
 * dialog_confirm({yes:function(){alert(1)}});
 *
 * 傳入參數：map{}
 * title    对话框标题
 * content  对话框内容
 * width    弹出框宽度
 * height   弹出框高度
 * yes      确认 回调方法
 * no       取消 回调方法
 * isParent 遮盖父窗体，默认不遮盖父窗体。
 *
 */
var dialog_confirm = function(opts) {
    opts = $.extend({
        title:"操作确认",
        content: "真的要这么做？",
        width: 300,
        height: 160,
        yes: function(){},
        no: function(){},
        isParent: false
    },opts||{});

    var parent = window;
    if (opts.isParent) {
        parent = this.parent;
    }
    parent.$("#dialog_confirm").remove();
    parent.$("body").prepend('<div id="dialog_confirm"></div>');
    parent.$("#dialog_confirm").html(opts.content).dialog({
        title : opts.title,
        height: opts.height,
        width: opts.width,
        modal: true,
        buttons: {
            "确认": function() {
                parent.$( this ).dialog( "close" );
                opts.yes();
            },
            "取消": function() {
                parent.$( this ).dialog( "close" );
                opts.no();
            }
        },
        close: function() {
            opts.no();
        }
    });
};

var dialog_confirm1 = function(opts) {
    opts = $.extend({
        title:"操作确认",
        content: "真的要这么做？",
        width: 440,
        height: 465,
        yes: function(){},
        no: function(){},
        isParent: false
    },opts||{});

    var parent = window;
    if (opts.isParent) {
        parent = this.parent;
    }
    parent.$("#dialog_confirm1").remove();
    parent.$("body").prepend('<div id="dialog_confirm1"></div>');
    parent.$("#dialog_confirm1").html(opts.content).dialog({
        title : opts.title,
        height: opts.height,
        width: opts.width,
        modal: true,
        buttons: {
            "确认": function() {
                parent.$( this ).dialog( "close" );
                opts.yes();
            },
            "取消": function() {
                parent.$( this ).dialog( "close" );
                opts.no();
            }
        },
        close: function() {
            opts.no();
        }
    });
};

/**
 * 弹出对话框，用于消息提示
 *
 * 调用方式：
 * dialog_prompt({title:'测试标题',content:'测试内容'})
 * dialog_prompt({title:'测试',yes:function(){alert(1)}});
 *
 * 传入参数：map{}
 * title    消息标题
 * content  消息内容
 * width    对话框宽度
 * height   对话框高度
 * yes      确认 回调方法
 * isParent 遮盖父窗体，默认不遮盖父窗体。
 *
 */
var dialog_prompt = function(opts) {
    opts = $.extend({
        title:"消息",
        content:"内容",
        width: 320,
        height: 140,
        yes: function(){},
        isParent: false
    },opts||{});

    var parent = window;
    if (opts.isParent) {
        parent = this.parent;
    }
    if(opts.self){
        parent = self;
    }

    parent.$("#dialog_prompt").remove();
    parent.$("body").prepend('<div id="dialog_prompt"></div>');
    parent.$("#dialog_prompt").html(opts.content).dialog({
        title : opts.title,
        height: opts.height,
        width: opts.width,
        modal: true,
        buttons: {
            "确定": function() {
                parent.$( this ).dialog( "close" );
                opts.yes();
            }
        }
    });
};

/**
 * 封装消息对话框,使其调用更简单
 *
 * 调用方式：
 * dialog_msg("没有选择商品！", 'warning');
 * dialog_msg("事情就这样简单");
 *
 * 传入参数：
 * content  提示框内容
 * type     提示类型，支持 成功：succeed，警告：warning，提示：prompt，错误：error和默认消息：msg
 * title    提示框标题
 *
 */
var dialog_msg = function(content, type, title) {
    type = type || 'msg';
    switch (type) {
        case 'succeed':
            title = title || "成功";
            break;
        case 'warning':
            title = title || "警示";
            break;
        case 'prompt':
            title = title || "提示";
            break;
        case 'error':
            title = title || "错误";
            break;
        default:
            title = title || "消息";
            break;
    }
    content = '<div class="' + type + '">' + content + '</div>';

    dialog_prompt({title:title, content:content, width:320, height:140});
};


/**
 * 表格刷新当前页
 *
 * 对应于dataTable而言的刷新当前页的方法，主要为了修改操作，弹出iframe其父页面的表格的刷新
 */
function flushPage(table) {
    $(table).refreshCurrent();
};

/**
 *表格刷新到首页
 *
 * 对应于dataTable而言的刷新到第一页页的方法，主要为了新增操作，弹出iframe其父页面的表格的刷新
 */
function flushData(table) {
    $(table).refreshData()
};


/**
 * 实现Tab页方法
  */
var initTab = function(id) {
    // 实现Tab页的效果
    // Default Action
    $(id + " .tab_content").hide(); // Hide all content
    $(id + " ul.tabs li:first").addClass("active").show(); // Activate first tab
    $(id + " .tab_content:first").show(); // Show first tab content
    // On Click Event
    $(id + " ul.tabs li").click(function() {
        $(id + " ul.tabs li").removeClass("active"); // Remove any "active" class
        $(this).addClass("active"); // Add "active" class to selected tab
        $(id + " .tab_content").hide(); // Hide all tab content
        var activeTab = $(this).find("a").attr("href"); // Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); // Fade in the active content
        return false;
    });
}


/**
 * 格式化时间的方法
 * 如下方式调用：date.pattern("yyyy-MM-dd HH:mm:ss")；
 */
Date.prototype.pattern=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时（12小时制）
        "H+" : this.getHours(), //小时（24小时制）
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds() //秒
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}


/**
 * 格式化时间函数
 * @param options date:给定的时间，如果不给则默认当前时间，format:格式，默认yyyy-MM-dd HH:mm:ss
 * @returns {string}
 */
var fnFormatDate = function(options) {
    var formatedDate = '';
    var settings = $.extend(true, {
        date: null,
        format: "yyyy-MM-dd HH:mm:ss"
    }, options);
    if (null == settings.date) {
        formatedDate = new Date().pattern(settings.format);
    } else {
        formatedDate = new Date(settings.date).pattern(settings.format);
    }
    return formatedDate;
}

/**
 * 查询数字字典数据通用方法 -- 生成下拉里边select
 * @param columnNo 列编号
 * @param id
 */
var searchDictionary = function(columnNo, id) {
    $.post("/productmgr/searchDictionary",{columnNo : columnNo}, function(json) {
        if (json.result == "success") {
            $.each(json.data, function(i, item) {
                var option = "<option value='"+item.columnValue+"'>" + item.columnName + "</option>";
                $(id).append(option);
            });
        }
    },"json");
}


/**
 * 查询数字字典数据通用方法 -- 生成checkbox
 * @param columnNo 列编号
 */
var searchDictionaryCheck = function (columnNo) {
    var html = '<input type="checkbox" value="" class="checkAll" /><label for="" class="inline-label">全选</label>';
    $.post("/productmgr/searchDictionary",{columnNo : columnNo}, function(json) {
        if (json.result == "success") {
            $.each(json.data, function(i, item) {
                if (item.columnValue != 'ALL') {
                    html += '<input type="checkbox" name="' + columnNo + '" value="'+item.columnValue+'" id="" /><label for="" class="inline-label">' + item.columnName + '</label>&nbsp;&nbsp;'
                }
            });
        }
    },"json");
    return html;
}




//用科学技术法显示金额
var fmoney = function (s, n)
{
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, ""))+ "";
    var nums = s.split(".")[0];
    var bool = false;
    if(nums.indexOf('-')>=0)
    {
        nums = nums.substring(1, nums.length);
        bool = true;
    }
    var l = nums.split("").reverse();
    var point = "";
    //有小数点就加上尾巴，整数就算了
    if(s.indexOf('.')>0)
    {
        point = "."+ s.split(".")[1];
    }
    var t = "";
    for(var i = 0; i < l.length; i ++ )
    {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    var str = t.split("").reverse().join("") + point;
    if(bool)
    {
        str = "-"+str;
    }
    return str;
}

//用科学技术法显示金额,小数点不足传入位补0
var fmoneyFixed = function(s, n)
{
    n = n > 0 && n <= 20 ? n : 2;
    //目前是留小数点４位，不足４位补0
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse();
    var t = "";
    for(var i = 0; i < l.length; i ++ )
    {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "."+ s.split(".")[1];
}


// 审核流程js
$.fn.checkStepBar = function(mainId,type){
    var $ul = $("<ul></ul>");
    $(this).append($ul);
    $(this).addClass("flow_steps");
    $.post("/purchase/queryWorkFlowCheckers", {mainId: mainId,type: type}, function (data) {
        if (data.state=="审核中") {
            for (var i=0;i<data.stepName.length;i++) {
                if (data.currentStep > data.totalStep) {
                    // 全部通过
                    if (i == data.stepName.length-1) {
                        $ul.append("<li class='doneLast step'>"+data.stepName[i]+"</li>");
                    } else {
                        $ul.append("<li class='done step'>"+data.stepName[i]+"</li>");
                    }
                } else if (data.currentStep == data.totalStep) {
                    // 在最后一步
                    if (i == data.stepName.length-1) {
                        $ul.append("<li class='last step'>"+data.stepName[i]+"</li>");
                    } else if (i == data.stepName.length-2) {
                        $ul.append("<li class='current_prev step'>"+data.stepName[i]+"</li>");
                    } else {
                        $ul.append("<li class='done step'>"+data.stepName[i]+"</li>");
                    }
                } else {
                    if (i == data.currentStep-2) {
                        $ul.append("<li class='current_prev step'>"+data.stepName[i]+"</li>");
                    } else if (i == data.currentStep-1) {
                        $ul.append("<li class='current step'>"+data.stepName[i]+"</li>");
                    } else if ( i == data.stepName.length-1) {
                        $ul.append("<li class='last step'>"+data.stepName[i]+"</li>");
                    } else if (i > data.currentStep-1) {
                        $ul.append("<li class='step'>"+data.stepName[i]+"</li>");
                    } else if (i < data.currentStep-2) {
                        $ul.append("<li class='done step'>"+data.stepName[i]+"</li>");
                    }
                }
            }
            $(".step").each( function (index){
                $(this).attr("title",data.stepInfo[index]);
            });
        }
        if (data.state=="审核不通过"){
            for (var i=0;i<data.stepName.length;i++) {
                if (i == data.stepName.length-2){
                    $ul.append("<li class='refuse_prev step'>"+data.stepName[i]+"</li>");
                } else if (i == data.currentStep-1){
                    $ul.append("<li class='refuse step'>"+data.stepName[i]+"</li>");
                } else {
                    $ul.append("<li class='done step'>"+data.stepName[i]+"</li>");
                }
            }
            $(".step").each( function (index){
                if (index == data.stepName.length-1) {
                    $(this).addClass("last");
                }
                $(this).attr("title",data.stepInfo[index]);
            });
        }

        attachEvent($(".step"),50);


    });
};

