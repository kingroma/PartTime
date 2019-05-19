package parttime.pt.com.basic.generic;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import parttime.pt.com.util.DateUtil;

public class GenericControllerUtil {

	public static void setDefaultRedirectAttributes(RedirectAttributes ra){
		if ( ra != null ){
			ra.addFlashAttribute("syear", DateUtil.getNowYear());			
			ra.addFlashAttribute("smonth", DateUtil.getNowMonth());
			ra.addFlashAttribute("sday", DateUtil.getNowDay());
			ra.addFlashAttribute("sdate", DateUtil.getNow("yyyy-MM-dd"));
			ra.addFlashAttribute("syyyymm", DateUtil.getNow("yyyy-MM"));
		}
	}
	
	public static String pageMove(String url){
		
		return "";
	}
}
