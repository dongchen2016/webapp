package com.demo.service;

import com.demo.entity.TbUser;
import com.demo.persistence.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by admin on 2017/04/03.
 */
@Service
public class TestService {

    @Autowired
    private TestMapper testMapper;

   public List<TbUser> getAllUser(){return testMapper.getAllUsers();}
}
