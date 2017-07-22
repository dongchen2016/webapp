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

<link rel="stylesheet" href="<c:url value="/css/style.css"/>">
<link rel="stylesheet" href="<c:url value="/js/ui/bootstrap-3.3.5/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/js/ui/bootstrap-3.3.5/css/bootstrap-theme.min.css"/>">
<!--js-->
<script type="text/javascript" src="<c:url value="/js/ui/jquery/jquery-1.12.4.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/ui/bootstrap-3.3.5/js/bootstrap.min.js"/>"></script>
<script type="text/javascript">
 $(document).ready(function(){
     /*$("#container").height($(window).height());*/
 });
</script>
<body>
<div id="container" >
    <div id="top">设置时间专用div</div>
    <div id = "middle" class="col-lg-12 col-md-12 col-xs-12 inform-color">
        <div id="middle-left" class="col-md-6 col-xs-12">123</div>
        <div id="middle-right" class="col-md-6 col-xs-12">456</div>
    </div>
    <div id = "button" class="col-lg-12 col-md-12 col-xs-12 inform-color">
        <div id="button-left" class="col-md-6 col-xs-12">789</div>
        <div id="button-right" class="col-md-6 col-xs-12">890</div>
    </div>
</div>

</body>
</html>
