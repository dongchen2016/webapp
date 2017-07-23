package com.demo.service;

import com.demo.entity.ThingsInfo;
import com.demo.persistence.LevelOneMapper;
import com.demo.persistence.LoginMapper;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;

/**
 * Created by admin on 2017/04/03.
 */
@Service
public class LevelOneService {

    @Autowired
    private LevelOneMapper levelOneMapper;

    public void insertTbThings(ThingsInfo thingsInfo){
        levelOneMapper.insert(thingsInfo);
    };
}
