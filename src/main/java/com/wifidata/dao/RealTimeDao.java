package com.wifidata.dao;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**
 * Created by yangchun on 2017/5/19.
 */
@Component
public interface RealTimeDao {


    public HashMap<String,Object> getRealTimeFlow();
    public List<String> getRealCustomer(String time);
    public List<Integer> getOlderFlow();



}
