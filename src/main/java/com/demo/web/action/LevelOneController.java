package com.demo.web.action;

import com.demo.entity.ThingsInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @description:
 * @author: of2354:马冬冬
 * @date: 2017/07/23.
 */
@Controller
@RequestMapping(value = "/level1")
public class LevelOneController {

    @RequestMapping(value = "/add")
    public String levelOneAdd(){
        return "/level1/add";
    }
        @RequestMapping(value = "/welcome")
    public String levelOneIndex(ThingsInfo things){
        return "/welcome";
    }
}
