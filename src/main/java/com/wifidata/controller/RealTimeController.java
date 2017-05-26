package com.wifidata.controller;

import com.wifidata.service.FlowService;
import com.wifidata.service.RealTimeService;
import com.wifidata.util.CommonUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

/**
 * Created by yin on 2017-05-22.
 */

@Controller
@RequestMapping("realtime")
public class RealTimeController {
    @Autowired
    private RealTimeService realTimeService;

    @RequestMapping("flow/get")
    @ResponseBody
    public JSONObject getRealTimeFlow() {
        HashMap<String,Object> data = realTimeService.getRealTimeFlow();
        return CommonUtil.constructHtmlResponse(1, "ok", data);
    }


}