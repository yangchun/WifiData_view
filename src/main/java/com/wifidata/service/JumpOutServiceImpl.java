package com.wifidata.service;

import com.wifidata.dao.JumpOutDao;
import com.wifidata.dao.StopTimeDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by yangchun on 2017/5/22.
 */

@Service("jumpOutService")
public class JumpOutServiceImpl implements JumpOutService{

    @Resource
    private JumpOutDao jumpOutDao;


    public List<HashMap<String,Object>> getDatas(){

        return jumpOutDao.getAllDatas();

    }


}
