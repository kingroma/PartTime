package parttime.pt.com.basic.login.model;

import parttime.pt.com.model.CommonVO;

public class LoginVO extends CommonVO{
	private static final long serialVersionUID = 5627981987701506596L;

	private String userNick = "";
	private String rm = "";
	
	public String getUserNick() {
		return userNick;
	}
	public void setUserNick(String userNick) {
		this.userNick = userNick;
	}
	public String getRm() {
		return rm;
	}
	public void setRm(String rm) {
		this.rm = rm;
	}
	
	
}
