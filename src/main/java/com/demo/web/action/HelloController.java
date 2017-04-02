package com.demo.web.action;


import com.demo.web.entity.UserInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by admin on 2017/03/31.
 */
@Controller
public class HelloController {

    @RequestMapping(value = "/hello" ,method = {RequestMethod.GET,RequestMethod.POST})
    public String handleRequest(Model model){
        model.addAttribute("message","Hello World1");
        return "welcome";
    }

    @RequestMapping(value = "/login" ,method = {RequestMethod.GET,RequestMethod.POST})
    public String valid(Model model,UserInfo userinfo){
        model.addAttribute("username",userinfo.getUserName());
        model.addAttribute("username",userinfo.getPassWord());
        return "welcome";
    }


}
