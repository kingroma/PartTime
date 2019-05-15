package parttime.pt.com.basic.login.model;

import parttime.pt.com.model.CommonVO;

public class LoginVO extends CommonVO{
	private static final long serialVersionUID = 5627981987701506596L;
	
	
	private String loginCode = "";
	private String loginMsg = "";
	
	public String getLoginCode() {
		return loginCode;
	}
	public void setLoginCode(String loginCode) {
		this.loginCode = loginCode;
	}
	public String getLoginMsg() {
		return loginMsg;
	}
	public void setLoginMsg(String loginMsg) {
		this.loginMsg = loginMsg;
	}
	
	
	
}
