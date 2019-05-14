package parttime.pt.com.basic.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import parttime.pt.com.basic.generic.GenericCode;
import parttime.pt.com.basic.login.model.LoginVO;
import parttime.pt.com.basic.login.service.LoginService;


@Controller
public class LoginController {

	@Autowired
	LoginService loginService;
	
	@RequestMapping(value = "/login.do", method = RequestMethod.GET)
	public String login(LoginVO loginVO , Model model){
		
		return "pt/basic/login/login";
	}
	
	@RequestMapping(value = "/signIn.do", method = RequestMethod.POST)
	public String signIn(LoginVO loginVO , Model model, RedirectAttributes ra){
		
		String userId = loginVO.getUserId();
		String userPw = loginVO.getUserPw();
		
		System.out.println(userId + " / " + userPw);
		
		LoginVO entity = loginService.view(loginVO);
		if ( entity != null ){
			System.out.println(entity.getUserId());
			System.out.println(entity.getUserPw());
			System.out.println(entity.getUserNm());
		}
		ra.addFlashAttribute(GenericCode.ALERT_MESSAGE,"hello world!!!");
		return "redirect:/login.do";
	}
}
