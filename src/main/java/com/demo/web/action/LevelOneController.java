package com.demo.web.action;

import com.demo.entity.ThingsInfo;
import com.demo.service.LevelOneService;
import com.demo.utils.FormatUtil;
import com.demo.web.filter.SessionFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

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
        return "/level1/add";
    }
}
