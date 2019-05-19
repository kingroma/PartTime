package parttime.pt.com;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import parttime.pt.com.mapper.UserInfoMapper;
import parttime.pt.com.model.UserInfoVO;
import parttime.pt.com.service.UserInfoService;

@Controller
public class Home2Controller {
	
	
	@Autowired
	UserInfoService userInfoService;
	
	@Autowired
	UserInfoMapper userInfoMapper;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		List<Map<String,String>> list = userInfoMapper.getUserList();
		
		System.out.println("list >> for");
		if( list != null ){
			for ( Map<String,String> map : list){
				System.out.println(map.keySet().size());
				for(String key : map.keySet()){
					System.out.println(key + " / " + map.get(key));
				}
			}
		}
		
		UserInfoVO userInfoVO = new UserInfoVO();
		userInfoVO.setId("myId");
		
		model.addAttribute("userInfoVO",userInfoVO);
		
		return "home";
	}
	
}
