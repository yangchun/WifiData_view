package com.wifidata.dao;

import org.springframework.stereotype.Component;

import java.util.*;

/**
 * Created by yangchun on 2017/5/22.
 */
@Component
public interface JumpOutDao {

    public List<HashMap<String,Object>> getAllDatas();


}
