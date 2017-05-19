package com.wifidata.controller;

import com.wifidata.service.StopTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

/**
 * Created by yangchun on 2017/5/19.
 */
@Controller
@RequestMapping("stoptime")
public class StopTimeController {
    @Autowired
    private StopTimeService stopTimeService;


    @RequestMapping("get")
    @ResponseBody
    public List<HashMap<String,String>> getTest(){
        System.out.println(stopTimeService.getStopTimes());
        return stopTimeService.getStopTimes();
    }




}
