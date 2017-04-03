package com.demo.web.convert;

import org.springframework.core.convert.converter.Converter;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by admin on 2017/04/03.
 */
public class StringToDateConverter implements Converter<String,Date>{

    private String datePattern;

    public void setDatePattern(String datePattern){
        this.datePattern = datePattern;
    }

    //定义转化方法
    @Override
    public Date convert(String date){

        try {
            SimpleDateFormat fmt = new SimpleDateFormat(this.datePattern);
            //将日期类型转化为date类型返回
            return fmt.parse(date);
        } catch(Exception e){
            e.printStackTrace();
            System.out.println("日期转化失败");
            return null;
        }
    }
}
