<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017/07/23
  Time: 12:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div  style="width: 550px;height: 250px;">
    <form id = "add" action="/levelOne/welcome">
        <div class="col-md-8 col-md-offset-2" >
            <div>事件等级</div>
            <div >
                <select name="level" id="level" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </div>
        <div class="col-md-8" >
            <div>事件内容</div>
            <div class="col-md-10 col-xs-12">
                <textarea class="col-md-12 col-xs-12" rows="10"  id="content" name="content" placeholder="事件内容" style="width: 300px;"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-default col-md-2 col-md-offset-5" >提交</button>
    </form>
</div>
</body>
</html>
