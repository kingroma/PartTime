package parttime.pt.com.basic.main.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import parttime.pt.com.basic.login.model.LoginVO;
import parttime.pt.com.basic.login.service.LoginService;
import parttime.pt.com.basic.main.model.MainVO;
import parttime.pt.com.basic.main.service.MainService;

@Controller
public class MainController {

	@Autowired
	MainService mainService;
	
	@Autowired
	LoginService loginService;
	
	@RequestMapping(value = "/main.do", method = RequestMethod.POST)
	public String login(MainVO mainVO , Model model, HttpServletRequest request, ModelMap modelMap){
		mainVO.setSuserInfo(loginService, request);
		return "pt/basic/main/main";
	}
}
