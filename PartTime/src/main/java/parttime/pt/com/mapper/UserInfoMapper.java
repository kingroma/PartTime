package parttime.pt.com.mapper;

import java.util.List;
import java.util.Map;

import parttime.pt.com.model.UserInfoVO;

public interface UserInfoMapper {
	public List<Map<String,String>> getUserList();
}
