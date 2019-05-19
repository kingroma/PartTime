package parttime.pt.com.basic.menu.mapper;

import java.util.List;
import java.util.Map;

import parttime.pt.com.basic.menu.model.MenuVO;

public interface MenuMapper {
	public List<Map<String,String>> list(MenuVO entity);
}
