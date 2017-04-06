<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017/03/31
  Time: 20:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<span>${message}</span>123
<div>
    <form action="login/${message}" method="post">
        用户名：<input name="username" type="text" id="username">
        密码：<input name="password" type="password" id="pwd">
        <%--生日：<input name="birthday" type="text" id="birthday">--%>
        <button type="submit" id="button">注册</button>
    </form>
</div>
</body>
</html>
