package com.wifidata.service;

import com.wifidata.dao.FlowDao;
import com.wifidata.dao.JumpOutDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by yin on 2017-05-22.
 */
@Service("flowService")
public class FlowServiceImpl implements FlowService {
    @Resource
    private FlowDao flowDao;


    public HashMap<String, Object> getEnteredCountByDay(String time) {
        return flowDao.getEnteredCountByDay(time);
    }

    public HashMap<String, Object> getNotEnterCountByDay(String time) {
        return flowDao.getNotEnterCountByDay(time);
    }
}
