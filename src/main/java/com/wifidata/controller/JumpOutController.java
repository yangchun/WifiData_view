package com.wifidata.controller;

import com.wifidata.service.JumpOutService;
import com.wifidata.util.CommonUtil;
import netscape.javascript.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import net.sf.json.JSONObject;
import java.util.HashMap;
import java.util.List;

/**
 * Created by yangchun on 2017/5/22.
 */

@Controller
@RequestMapping("jumpout")
public class JumpOutController {


    @Autowired
    private JumpOutService jumpOutService;

    @RequestMapping("get")
    @ResponseBody
    public JSONObject getAllDatas(){
        List<HashMap<String,Object>> datas=jumpOutService.getDatas();
        for(HashMap<String,Object> mp:datas){
           mp.put("jumpout",(Double)mp.get("jumpout")*100);
           mp.put("deepview",(Double)mp.get("deepview")*100);
        }
        return CommonUtil.constructHtmlResponse(1,"ok",datas);

    }




}
