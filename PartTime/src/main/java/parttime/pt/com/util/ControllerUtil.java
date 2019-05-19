package parttime.pt.com.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import parttime.pt.com.basic.generic.GenericCode;

public class ControllerUtil {
	public static String redirectPost(HttpServletRequest request, RedirectAttributes ra, String url) {
		request.setAttribute(GenericCode.PAGE_MOVE_VAL, url);
		return "pt/basic/com/pageMove";
	}
}
