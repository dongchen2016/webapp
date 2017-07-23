package com.demo.utils;



import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @description:
 * @author: of2354:马冬冬
 * @date: 2017/04/27.
 */
public class FormatUtil {

    public static Date parseStringToDate(String str){
        SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");

        try{
            return fmt.parse(str);
        }catch (Exception e){
            /*log.debug("格式转化错误");*/
            return null;
        }
    }

    /**
     * 转化为固定格式
     */
    public static String parseDateToString(Date date){

        SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");
        return fmt.format(date);
    }

    /**
     * 转化格式
     * @param formateStyle
     */
    public static String parseDateToString(Date date,String formateStyle){

        SimpleDateFormat fmt = new SimpleDateFormat(formateStyle);
        return fmt.format(date);
    }

    /*
    * 转化特殊String类型时间，为标准String时间格式
    * @Param
    */
    public static String parseStringDateToStringDate(String stringOrigin){
        String year = stringOrigin.substring(6,10);
        String mm = stringOrigin.substring(0,2);
        String dd = stringOrigin.substring(3,5);
        String hour = stringOrigin.substring(11,13);
        String minute = stringOrigin.substring(14,16);
        return year + "-" + mm + "-" + dd + " " + hour + "-" + minute + "-00";
    }
}
