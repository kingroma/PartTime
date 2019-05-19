package parttime.pt.com.contents.home.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import parttime.pt.com.contents.home.mapper.HomeMapper;
import parttime.pt.com.contents.home.model.HomeVO;

@Component
public class HomeService {
	@Autowired
	public HomeMapper homeMapper ;
	
	public List<HomeVO> listVideo (HomeVO entity){
		return homeMapper.listVideo(entity);
	}
	public HomeVO viewVideo(HomeVO entity) {
		return homeMapper.viewVideo(entity);
	}
}