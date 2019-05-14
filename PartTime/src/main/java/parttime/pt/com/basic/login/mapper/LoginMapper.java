package parttime.pt.com.basic.login.mapper;

import java.util.List;
import java.util.Map;

import parttime.pt.com.basic.login.model.LoginVO;

public interface LoginMapper {
	public List<Map<String,String>> list (LoginVO entity);
	
	public LoginVO view (LoginVO entity);
}
