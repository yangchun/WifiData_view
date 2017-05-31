package com.wifidata.service;

import java.util.HashMap;
import java.util.List;

/**
 * Created by yin on 2017-05-22.
 */
public interface RealTimeService {
    public HashMap<String,Object> getRealTimeFlow();
    public List<HashMap<String,Object>> getRealTimeCustomer();
    public List<Integer> getOlderFlow();
}
