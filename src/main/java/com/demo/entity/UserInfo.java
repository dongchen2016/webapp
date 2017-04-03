package com.demo.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * Created by admin on 2017/04/01.
 */
@Setter
@Getter
@ToString
public class UserInfo {

    private  String username;

    private String password;

    private Date birthday;
}
