package com.wifidata.service;

import com.wifidata.dao.RealTimeDao;
import com.wifidata.dao.StopTimeDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by yangchun on 2017/5/19.
 */

@Service("RealTimeService")
public class RealTimeServiceImpl implements RealTimeService {

    @Resource
    private RealTimeDao realTimeDao;

    HashMap<Integer,String> result=new HashMap<Integer, String>();


    public HashMap<String, Object> getRealTimeFlow() {
        return realTimeDao.getRealTimeFlow();
    }
}
