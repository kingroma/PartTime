package parttime.pt.com.basic.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import parttime.pt.com.basic.main.mapper.MainMapper;

@Component
public class MainService {
	@Autowired
	public MainMapper mainMapper;
	
}
