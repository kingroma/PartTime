package parttime.pt.com.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import parttime.pt.com.mapper.UserInfoMapper;
import parttime.pt.com.model.UserInfoVO;

@Component
public class UserInfoService {
	@Autowired
	public UserInfoMapper userInfoMapper;
	
	public List<Map<String,String>> getUserList(){
		return userInfoMapper.getUserList();
	}
}
