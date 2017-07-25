package com.demo.web.action;

import com.demo.entity.ThingsInfo;
import com.demo.service.LevelOneService;
import com.demo.utils.FormatUtil;
import com.demo.utils.HttpUtils;
import com.demo.web.filter.SessionFilter;
import org.apache.http.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * @description:
 * @author: of2354:马冬冬
 * @date: 2017/07/23.
 */
@Controller
@RequestMapping(value = "/levelOne")
public class LevelOneController {

    @Autowired
    private LevelOneService levelOneService;

    @RequestMapping(value = "/add")
    public String levelOneAdd(){
        return "/level1/add";

    }


    @RequestMapping(value = "/addResult")
    public String addResult(HttpServletRequest req, ThingsInfo things, Model model, @RequestParam("startTime") String startTime,@RequestParam("endTime") String endTime){
        String userid = SessionFilter.getLoginUserId(req);

        things.setUserid(userid);
        things.setStartTime(FormatUtil.parseStringToDate(FormatUtil.parseStringDateToStringDate(startTime)));
        things.setEndTime(FormatUtil.parseStringToDate(FormatUtil.parseStringDateToStringDate(endTime)));
        levelOneService.insertTbThings(things);

        String host = "http://jisukdcx.market.alicloudapi.com";
        String path = "/express/query";
        String method = "GET";
        String appcode = "9c0d248f627b46d2b3ad0c4f23b97be9";
        Map<String, String> headers = new HashMap<String, String>();
        //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
        headers.put("Authorization", "APPCODE " + appcode);
        Map<String, String> querys = new HashMap<String, String>();
        querys.put("number","1202516745301");
        querys.put("type", "YUNDA");


        try {
            /**
             * 重要提示如下:
             * HttpUtils请从
             * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
             * 下载
             *
             * 相应的依赖请参照
             * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
             */
            HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);
            System.out.println(response.toString());
            //获取response的body
            //System.out.println(EntityUtils.toString(response.getEntity()));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "/level1/add";
    }
}
