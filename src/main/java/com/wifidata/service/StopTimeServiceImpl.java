package com.wifidata.service;

import com.wifidata.dao.StopTimeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by yangchun on 2017/5/19.
 */

@Service("stopTimeService")
public class StopTimeServiceImpl implements StopTimeService {

    @Resource
    private StopTimeDao stopTimeDao;

    public List<HashMap<String, String>> getStopTimes() {

        return stopTimeDao.getStopTimes();
    }
}
