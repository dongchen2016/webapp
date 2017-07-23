package com.demo.web.action;



import com.demo.service.LoginService;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;


/**
 * Created by admin on 2017/03/31.
 */
@Controller
public class HelloController {

    @Autowired
    private LoginService loginService;
    protected static final Logger log = Logger.getLogger(HelloController.class);

    @RequestMapping(value = "/valid" ,method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String handleRequest(Model model, @RequestParam( "user") String userid, @RequestParam( "password") String pwd){
        model.addAttribute("message","Hello World1");
        //ajax 返回json
        return loginService.validUser(userid,pwd);
    }

    @RequestMapping(value = "/welcome")
    public String Index(){
        return  "welcome";
    };
}
