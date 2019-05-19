package parttime.pt.com.contents.home.mapper;

import java.util.List;
import java.util.Map;

import parttime.pt.com.contents.home.model.HomeVO;

public interface HomeMapper {
	public List<HomeVO> listVideo (HomeVO entity);
	public HomeVO viewVideo(HomeVO entity);
	
	public HomeVO viewVideoGoodBad(HomeVO entity);
	public void insertVideoGoodBad(HomeVO entity);
	public void updateVideoGoodBad(HomeVO entity);
	public void deleteVideoGoodBad(HomeVO entity);
	
	public List<HomeVO> listVideoReply (HomeVO entity);
	public int insertVideoReply(HomeVO entity);
	
}
