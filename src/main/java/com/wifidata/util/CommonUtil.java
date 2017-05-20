package com.wifidata.util;

import net.sf.json.JSONObject;



public class CommonUtil {

	public static JSONObject constructHtmlResponse(int code, String msg,
			Object data) {
		JSONObject jo = new JSONObject();
		jo.put("code", code);
		jo.put("msg", msg);
		jo.put("data", data);
		return jo;
	}
}
