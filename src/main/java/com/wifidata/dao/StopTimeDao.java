package com.wifidata.dao;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.*;

/**
 * Created by yangchun on 2017/5/19.
 */
@Component
public interface StopTimeDao {


    public List<HashMap<String,Object>> getStopTimes();


}
