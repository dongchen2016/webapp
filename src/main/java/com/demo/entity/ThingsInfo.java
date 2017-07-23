package com.demo.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * @description:
 * @author: of2354:马冬冬
 * @date: 2017/07/23.
 */
@Setter
@Getter
@ToString
public class ThingsInfo {
    /**
     * 用户编号
     */
    private  String userid;

    /**
     * 任务等级
     */
    private  String level;

    /**
     * 任务内容
     */
    private  String content;

    /**
     * 开始时间
     */
    private Date startTime;

    /**
     * 结束时间
     */
    private  Date endTime;

    /**
     * 任务状态
     */
    private  String done;
}
