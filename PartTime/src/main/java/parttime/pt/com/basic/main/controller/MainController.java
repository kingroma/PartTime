package parttime.pt.com.basic.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import parttime.pt.com.basic.main.service.MainService;

@Controller
public class MainController {

	@Autowired
	MainService mainService;
	
}
