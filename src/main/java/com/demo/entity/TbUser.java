package com.demo.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * Created by admin on 2017/1/16 0016.
 */
@Setter
@Getter
@ToString
public class TbUser {

    /*users表*/
    /**
     * 用户id
     */
    private String userid;
    /**
     * 用户名
     */
    private String username;
    /**
     * 密码
     */
    private String password;
    /**
     * 性别
     */
    private String gender;
    /**
     * 宿管站
     */
    private String department;
    /**
     * 管理权限级别
     */
    private String priority;



    /*公有字段*/
    /**
     * 学号
     */
    private String studentid;
    /**
     * 学生姓名
     */
    private String studentname;
    /**
     * 宿舍编号
     */
    private String dormitoryid;
    /**
     * 学生性别
     */
    private String studentsex;
    /**
     * 备注
     */
    private String remark;


     /*晚归表*/

    /**
     * 晚归时间
     */
    private Date latetime;
    private String stringLateTime;

     /*假日管理表*/
    /**
     * 留校(0、1判断，1表示留校；0表示离校)
     */
    private String stay;
    /**
     * 离校时间
     */
    private Date awaytime;
    private String awaytime1;
    /**
     * 回校时间
     */
    private Date backtime;
    private String backtime1;


     /*外来人员信息表*/
    /**
     * 人员姓名
     */
    private String migname;
    /**
     * 性别
     */
    private String migsex;
    /**
     * 证件类型
     */
    private Date indentification;

    /**
     * 证件号码
     */
    private String indentinumber;

    /**
     * 进入时间
     */
    private Date accesstime;
    /**
     * 离开时间
     */
    private Date leavetime;

     /*贵重物品表*/
    /**
     * 商品名称
     */
    private String goods;
    /**
     * 数量
     */
    private int goodsquantity;


     /*维修信息表*/
    /**
     * 报告时间
     */
    private Date reporttime;
    private String reporttime1;
    /**
     * 维修时间
     */
    private Date reptime;
    /**
     * 报告人
     */
    private String reportman;
    /**
     * 维修原因
     */
    private String repreason;

    /**
     * 修理人员姓名
     */
    private String repman;

    /**
     * 维修物品名称
     */
    private String equipment;
    /**
     * 维修数量
     */
    private int repquantity;
    /**
     * 维修价格
     */
    private int repprice;


     /*学生信息表*/
    /**
     * 院系
     */
    private String departmentid;
    /**
     * 班级名称
     */
    private String classname;
    /**
     * 辅导员
     */
    private String classteacher;
    /**
     * 学生年龄
     */
    private int studentage;

    /**
     * 联系方式
     */
    private String studentphone;

}
