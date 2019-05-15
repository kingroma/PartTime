package parttime.pt.com.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import parttime.pt.com.basic.login.service.LoginService;

public class MyInterceptor implements HandlerInterceptor{
	@Autowired
	LoginService loginService;
	
	// view까지 처리가 끝난 후에 처리됨
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception e)
			throws Exception {
		
	}

	// controller의 handler가 끝나면 처리됨
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView mav)
			throws Exception {
		String url = request.getRequestURI();
		System.out.println("[interceptor]" + DateUtil.getNow() + url);
		setDefaultData(mav);
	}
	
	// controller로 보내기 전에 처리하는 인터셉터
	// 반환이 false라면 controller로 요청을 안함
	// 매개변수 Object는 핸들러 정보를 의미한다. ( RequestMapping , DefaultServletHandler )
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String url = request.getRequestURI();
		
		boolean isLogin = loginService.isLogin(request);
		// 로그인 중 
		if(isLogin) {
			
		}
		// 로그인이 안됨
		else {
			// 로그인 페이지 이동 현재 로그인 페이지 인지 확인  
			if ( url != null && !url.endsWith("login.do")) {
				System.out.println(request.getContextPath());
			}
		}
		
		
		return true;
	}

	
	// set default init data 
	private ModelAndView setDefaultData(ModelAndView mav){
		if(mav!=null) {
			mav.addObject("syear", DateUtil.getNowYear());			
			mav.addObject("smonth", DateUtil.getNowMonth());
			mav.addObject("sday", DateUtil.getNowDay());
			mav.addObject("sdate", DateUtil.getNow("yyyy-MM-dd"));
			mav.addObject("syyyymm", DateUtil.getNow("yyyy-MM"));
		}
		return mav;
	}
}
