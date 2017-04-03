package com.demo.web.action;


import com.demo.entity.TbUser;
import com.demo.entity.UserInfo;
import com.demo.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by admin on 2017/03/31.
 */
@Controller
public class HelloController {

    @Autowired
    private TestService testService;

    @RequestMapping(value = "/hello" ,method = {RequestMethod.GET,RequestMethod.POST})
    public String handleRequest(Model model){
        model.addAttribute("message","Hello World1");
        return "welcome";
    }

    @RequestMapping(value = "/login" ,method = {RequestMethod.GET,RequestMethod.POST})
    public String valid(Model model, UserInfo userinfo, @RequestParam("username") String username, @RequestParam("password") String password){
        model.addAttribute("username",userinfo.getUsername());
        model.addAttribute("username",userinfo.getPassword());
        return "welcome";
    }

    @RequestMapping(value = "/login/{message}" ,method = {RequestMethod.GET,RequestMethod.POST})
    public String pathVariable(Model model, @ModelAttribute UserInfo userinfo, @PathVariable String message){
        model.addAttribute("username",userinfo.getUsername());
        model.addAttribute("username",userinfo.getPassword());
        List<TbUser> users = testService.getAllUser();
        return "welcome";
    }


}
