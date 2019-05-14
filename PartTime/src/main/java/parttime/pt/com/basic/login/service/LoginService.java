package parttime.pt.com.basic.login.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import parttime.pt.com.basic.login.mapper.LoginMapper;
import parttime.pt.com.basic.login.model.LoginVO;

@Component
public class LoginService {
	@Autowired
	public LoginMapper loginMapper;
	
	public List<Map<String,String>> list (LoginVO entity){
		return loginMapper.list(entity);
	}
	
	public LoginVO view (LoginVO entity){
		return loginMapper.view(entity);
	}
}
