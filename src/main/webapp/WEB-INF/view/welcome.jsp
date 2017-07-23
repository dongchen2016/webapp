<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017/03/31
  Time: 20:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<!--css引入-->

<link rel="stylesheet" href="<c:url value="/css/my.css"/>">
<link rel="stylesheet" href="<c:url value="/js/ui/bootstrap-3.3.5/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/js/ui/bootstrap-3.3.5/css/bootstrap-theme.min.css"/>">
<link rel="stylesheet" href="<c:url value="/css/zebra_dialog.css"/>">

<link rel="stylesheet" type="text/css" href="/css/jquery-ui-1.10.3.custom.min.css"/>
<link rel="stylesheet" type="text/css" href="/css/jquery.ui.resizable.css"/>
<link rel="stylesheet" type="text/css" href="/css/jquery.ui.tooltip.css"/>
<link rel="stylesheet" type="text/css" href="/css/jquery.ui.menu.css"/>

<!--js-->
<script type="text/javascript" src="<c:url value="/js/ui/jquery/jquery-1.12.4.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/ui/bootstrap-3.3.5/js/bootstrap.min.js"/>"></script>
<%--<script type="text/javascript" src="<c:url value="/js/zebra_dialog.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/zebraMsg.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/jquery.manifest.js"/>"></script>--%>

<script type="text/javascript" src="/js/jquery-ui-1.10.3.custom.min.js"></script>
<script type="text/javascript" src="/js/jquery.ui.widget.js"></script>
<script type="text/javascript" src="/js/jquery.ui.menu.js"></script>
<script type="text/javascript" src="/js/jquery.ui.autocomplete.js"></script>
<script type="text/javascript" src="/js/jquery.ui.combobox.js"></script>
<script type="text/javascript" src="/js/jquery.ui.tooltip.js"></script>
<script type="text/javascript" src="/js/ofcs.js" charset="utf-8"></script>
<script type="text/javascript" src="/js/jquery.manifest.js"></script>
<script type='text/javascript' src='/js/zebra_dialog.js'></script>
<script type="text/javascript" src="/js/zebraMsg.js"></script>
<script type="text/javascript">
 $(document).ready(function(){
     $("#container").height($(window).height());
     $("#middle-left, #middle-right,#button-left, #button-right").height($("#middle").height());
     $("#level1_add").click(function(){
         var url = "/level1/add";
         dialog_iframe({url: url, title: "新增任务：", width: 600, height: 300, scroll: false});
     });
 });
</script>
<body>
<div id="container" >
    <div id="top">个人计事软件管理</div>
    <div id = "middle" class="col-lg-12 col-md-12 col-xs-12 inform-color boundary-button" style="border-top: 1px solid red">
        <div id="middle-left" class="col-md-6 col-xs-12 boundary-right" style="border-left: 1px solid red">
            <div id="edit" class="col-md-10 col-xs-10 col-md-offset-1 col-xs-offset-1">
                <div id="level1_add" class="col-xs-3 text-center btn btn-default">新增</div>
                <div id="level1_delete" class="col-xs-3 text-center btn btn-default">删除</div>
                <div id="level1_edit" class="col-xs-3 text-center btn btn-default" >修改</div>
            </div>
        </div>
        <div id="middle-right" class="col-md-6 col-xs-12" style="border-right: 1px solid red">

        </div>
    </div>
    <div id = "button" class="col-lg-12 col-md-12 col-xs-12 inform-color" style="border-bottom: 1px solid red">
        <div id="button-left" class="col-md-6 col-xs-12 boundary-right" style="border-left: 1px solid red" >

        </div>
        <div id="button-right" class="col-md-6 col-xs-12" style="border-right: 1px solid red">890</div>
    </div>
</div>
</body>
</html>
