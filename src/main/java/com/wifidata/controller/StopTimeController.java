package com.wifidata.controller;

import com.wifidata.service.StopTimeService;
import com.wifidata.util.CommonUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

/**
 * Created by yangchun on 2017/5/19.CommonUtil.java
 */
@Controller
@RequestMapping("stoptime")
public class StopTimeController {
    @Autowired
    private StopTimeService stopTimeService;


    @RequestMapping("get")
    @ResponseBody
    public JSONObject getTest(){
        HashMap<String,Integer> ls=stopTimeService.getStopTimes();
        return CommonUtil.constructHtmlResponse(1,"ok", ls);
    }




}
