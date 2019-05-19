package parttime.pt.com.contents.home.controller;

import java.util.List;
import java.util.Map;

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
	public HomeVO viewVideo(HomeVO homeVO , Model model){
		HomeVO viewVideo = null ; 
		viewVideo = homeService.viewVideo(homeVO);
		return viewVideo ;
	}
}
