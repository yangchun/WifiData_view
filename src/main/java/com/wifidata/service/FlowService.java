package com.wifidata.service;

import java.util.HashMap;
import java.util.List;

/**
 * Created by yin on 2017-05-22.
 */
public interface FlowService {
    public HashMap<String,Object> getEnteredCountByDay(String time);
    public HashMap<String,Object> getNotEnterCountByDay(String time);
}
