package com.wifidata.service;

import com.wifidata.dao.CustomerTimeDao;
import com.wifidata.dao.RealTimeDao;
import com.wifidata.dao.StopTimeDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by yangchun on 2017/5/19.
 */

@Service("RealTimeService")
public class RealTimeServiceImpl implements RealTimeService {

    @Resource
    private RealTimeDao realTimeDao;
    @Resource
    private CustomerTimeDao customerTimeDao;

    HashMap<Integer,String> result=new HashMap<Integer, String>();


    public HashMap<String, Object> getRealTimeFlow() {
        return realTimeDao.getRealTimeFlow();
    }

    public List<HashMap<String, Object>> getRealTimeCustomer() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("HH:mm");
        SimpleDateFormat simpleDateFormat2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.MINUTE,-1);
        List<HashMap<String, Object>> customerTimeInfoList = customerTimeDao.getCustomerTimeInfo();//在每日维护的用户表中查询实时的用户是否为新老客户
        List<String> realTimeCustomerList = realTimeDao.getRealCustomer(simpleDateFormat.format(calendar.getTime()));

        HashMap<String, Object> map = null;
        List<HashMap<String, Object>> resultList = new ArrayList<HashMap<String, Object>>();
        boolean b = false;
        for(int i =0;i<realTimeCustomerList.size();i++){
            for(int j=0;j<customerTimeInfoList.size();j++){
                if(customerTimeInfoList.get(j).get("mac").equals(realTimeCustomerList.get(i))){
                    b = true;
                    map = new HashMap<String, Object>();
                    map.put("mac",realTimeCustomerList.get(i));
                    map.put("time",simpleDateFormat2.format(new Date(Long.parseLong(customerTimeInfoList.get(j).get("lasttime").toString()))));
                    map.put("ctype","1");
                    resultList.add(map);
                }
            }
            if(b == false){
                map = new HashMap<String, Object>();
                map.put("mac",realTimeCustomerList.get(i));
                map.put("time","Na");
                map.put("ctype","0");
                resultList.add(map);
            }else{
                b = false;
            }
        }
        return resultList;
    }

    public List<Integer> getOlderFlow() {
        return realTimeDao.getOlderFlow();
    }
}
