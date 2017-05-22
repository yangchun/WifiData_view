package com.wifidata.controller;

import com.wifidata.service.FlowService;
import com.wifidata.service.JumpOutService;
import com.wifidata.util.CommonUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

/**
 * Created by yin on 2017-05-22.
 */

@Controller
@RequestMapping("flow")
public class FlowController {
    @Autowired
    private FlowService flowService;

    @RequestMapping(value = "entered/day/{time}")
    @ResponseBody
    public JSONObject getEnteredCountByDay(@PathVariable String time) {
        HashMap<String, Object> data = flowService.getEnteredCountByDay(time);
        return CommonUtil.constructHtmlResponse(1, "ok", data);
    }

    @RequestMapping(value = "notenter/day/{time}")
    @ResponseBody
    public JSONObject getNotEnterCountByDay(@PathVariable String time) {
        HashMap<String, Object> data = flowService.getNotEnterCountByDay(time);
        return CommonUtil.constructHtmlResponse(1, "ok", data);
    }

}