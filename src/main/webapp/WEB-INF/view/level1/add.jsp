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
<link rel="stylesheet" media="all" type="text/css" href="http://code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" media="all" type="text/css" href="/css/jquery-ui-timepicker-addon.css" />

<!--js-->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.11.0/jquery-ui.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-timepicker-addon.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-timepicker-addon-i18n.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-sliderAccess.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $('#startTime,#endTime').datetimepicker({

        });
    });
</script>
<body>
<div  style="width: 550px;height: 250px;">
    <form id = "add" action="/levelOne/addResult">
        <div class="col-md-8 col-md-offset-2" >
            <span style="display: inline;">事件等级</span>
            <div>
                <select name="level" id="level" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </div>
        <div>
            <span style="display: inline;">开始时间：</span>
            <div>
                <input type="text" name="startTime" id="startTime" value="" />
            </div>
        </div>
        <div>
            <span style="display: inline;">结束时间：</span>
            <div>
                <input type="text" name="endTime" id="endTime" value="" />
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
