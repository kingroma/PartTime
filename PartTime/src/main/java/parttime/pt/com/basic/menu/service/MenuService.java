package parttime.pt.com.basic.menu.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import parttime.pt.com.basic.menu.mapper.MenuMapper;
import parttime.pt.com.basic.menu.model.MenuVO;

@Component
public class MenuService{
	@Autowired
	public MenuMapper menuMapper;

	public List<Map<String, String>> list(MenuVO entity) {
		return menuMapper.list(entity);
	}
	
	
}
