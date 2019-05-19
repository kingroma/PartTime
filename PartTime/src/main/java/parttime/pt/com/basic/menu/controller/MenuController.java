package parttime.pt.com.basic.menu.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import parttime.pt.com.basic.menu.model.MenuVO;
import parttime.pt.com.basic.menu.service.MenuService;

@Controller
@RequestMapping("/menu/*")
public class MenuController {
	@Autowired
	MenuService menuService;
	
	@RequestMapping(value = "/menu.do", method = RequestMethod.POST)
	public String login(MenuVO menuVO , Model model){
		
		return "pt/basic/menu/menu";
	}
	
	@ResponseBody
	@RequestMapping(value = "/list.do", method = RequestMethod.POST)
	public List<Map<String,String>> ajaxList(MenuVO menuVO , Model model){
		List<Map<String,String>> list = null;
		list = menuService.list(menuVO);
		
		return list ;
	}
}
