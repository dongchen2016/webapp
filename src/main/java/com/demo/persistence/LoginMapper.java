package com.demo.persistence;

import com.demo.entity.TbUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by admin on 2017/04/03.
 */
public interface LoginMapper {

    List<TbUser> getAllUsers();
    /**
     *  验证用户名密码是否正确
     */
    Integer validUser(@Param("userid") String userid,@Param("password") String password);
}
