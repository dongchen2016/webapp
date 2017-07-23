package com.demo.persistence;

import com.demo.entity.TbUser;
import com.demo.entity.ThingsInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by admin on 2017/04/03.
 */
public interface LevelOneMapper {


    /**
     *  Tb_things 表插入数据
     */
    Integer insert(ThingsInfo info);
}
