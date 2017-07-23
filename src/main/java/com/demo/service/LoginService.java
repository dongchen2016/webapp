package com.demo.service;

import com.demo.entity.TbUser;
import com.demo.persistence.LoginMapper;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;

/**
 * Created by admin on 2017/04/03.
 */
@Service
public class LoginService {

    @Autowired
    private LoginMapper loginMapper;

   /*public List<TbUser> getAllUser(){return loginMapper.validUser();}*/

    public String validUser(String userid,String password){
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("success",loginMapper.validUser(userid,password).toString());
        map.put("user",userid);
        Gson gson = new Gson();

        if(loginMapper.validUser(userid,password) > 0)
            map.put("msg","");
        map.put("msg","用户名或密码错误");
        return gson.toJson(map);
    };
}
