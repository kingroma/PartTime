package parttime.pt.com.contents.home.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import parttime.pt.com.contents.home.model.HomeVO;
import parttime.pt.com.contents.home.service.HomeService;

@Controller
@RequestMapping("/home/*")
public class HomeController {
	@Autowired
	HomeService homeService;
	
	@ResponseBody
	@RequestMapping(value = "/listVideo.do", method = RequestMethod.POST )
	public List<HomeVO> listVideo(HomeVO homeVO , Model model){
		List<HomeVO> listVideo = null ; 
		listVideo = homeService.listVideo(homeVO);
		return listVideo ;
	}
	
	@ResponseBody
	@RequestMapping(value = "/viewVideo.do", method = RequestMethod.POST )
	public HomeVO viewVideo(HomeVO homeVO , Model model, HttpServletRequest request){
		HomeVO viewVideo = null ;
		String suserId = (String)request.getSession().getAttribute("suserId");
		homeVO.setSuserId(suserId);
		
		viewVideo = homeService.viewVideo(homeVO);
		return viewVideo ;
	}
	
	@ResponseBody
	@RequestMapping(value = "/insertVideoGoodBad.do", method = RequestMethod.POST )
	public HomeVO insertVideoGoodBad(HomeVO homeVO , Model model, HttpServletRequest request) {
		homeService.insertVideoGoodBad(homeVO);
		return homeVO ;
	}
	
	@ResponseBody
	@RequestMapping(value = "/listVideoReply.do", method = RequestMethod.POST )
	public List<HomeVO> listVideoReply(HomeVO homeVO , Model model){
		List<HomeVO> listVideoReply = null ; 
		listVideoReply = homeService.listVideoReply(homeVO);
		return listVideoReply ;
	}
	
	@ResponseBody
	@RequestMapping(value = "/insertVideoReply.do", method = RequestMethod.POST )
	public HomeVO insertVideoReply(HomeVO entity,  Model model) {
		HomeVO insertVideoReply = null;
		int ret = homeService.insertVideoReply(entity);
		return insertVideoReply;
	}
}
