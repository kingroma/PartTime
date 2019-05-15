package parttime.pt.com.basic.login.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import parttime.pt.com.basic.generic.GenericCode;
import parttime.pt.com.basic.generic.GenericString;
import parttime.pt.com.basic.login.model.LoginVO;
import parttime.pt.com.basic.login.service.LoginService;
import parttime.pt.com.util.DateUtil;


@Controller
public class LoginController {

	@Autowired
	LoginService loginService;
	
	@RequestMapping(value = "/login.do", method = RequestMethod.GET)
	public String login(LoginVO loginVO , Model model){
		
		return "pt/basic/login/login";
	}
	
	@RequestMapping(value = "/signIn.do", method = RequestMethod.POST)
	public String signIn(LoginVO loginVO , Model model, RedirectAttributes ra, HttpServletRequest request){
		if( loginVO != null ) {
			String userId = loginVO.getUserId();
			String userPw = loginVO.getUserPw();
			System.out.println("[ Sign In ] " + DateUtil.getNow());
			System.out.println(userId + " / " + userPw);
			ra.addFlashAttribute("userId",userId);
		}

		// login sign in check
		
		int RETURN_CODE = loginService.signIn(loginVO, request);
		String RETURN_MESSAGE = GenericString.getMsg(RETURN_CODE);
		System.out.println("[["+RETURN_CODE+"]]" + RETURN_MESSAGE);
		if ( RETURN_CODE == GenericCode.USER_LOGIN_SUCCESS ) {
			return "redirect:/main.do";
		}else {
			ra.addFlashAttribute(GenericCode.LOGIN_MESSAGE,RETURN_MESSAGE);
			return "redirect:/login.do";
		}

	}
}
