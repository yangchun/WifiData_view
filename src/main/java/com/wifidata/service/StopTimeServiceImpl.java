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

    HashMap<String,Integer> result=new HashMap<String, Integer>();

    public HashMap<String, Integer> getStopTimes() {
        result.put("first",0);
        result.put("second",0);
        result.put("third",0);
        List<HashMap<String,Object>> ls=stopTimeDao.getStopTimes();
        for (int i = 0; i < ls.size(); i++) {
            HashMap<String,Object> mp=ls.get(i);
            if((Integer)mp.get("num")==0){
                continue;
            }
            int totaltime=(Integer) mp.get("totaltime");
            int num=(Integer)mp.get("num");
            int stoptime=(totaltime*3)/num;
            if(stoptime<600){
                result.put("first",(Integer) result.get("first")+1);
            }
            if(stoptime>600&&stoptime<1800){
                result.put("second",(Integer) result.get("second")+1);
            }
            if(stoptime>1800){
                result.put("third",(Integer) result.get("third")+1);
            }
        }
        return result;
    }
}
