package com.wifidata.dao;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**
 * Created by yin on 2017-05-22.
 */

@Component
public interface FlowDao {
    public HashMap<String,Object> getEnteredCountByDay(String time);
    public HashMap<String,Object> getNotEnterCountByDay(String time);
}
