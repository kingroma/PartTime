package parttime.pt.com.model;

import java.io.Serializable;

public class CommonVO implements Serializable {
	private static final long serialVersionUID = 806045106577821407L;
	
	private String userId = "";
	private String userPw = "";
	private String userNm = "";
	
	private String rgsDe = "";
	private String rgsUserId = "";
	private String updDe = "";
	private String updUserId = "";
	
	private String suserId = "";
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPw() {
		return userPw;
	}
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	public String getUserNm() {
		return userNm;
	}
	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}
	public String getRgsDe() {
		return rgsDe;
	}
	public void setRgsDe(String rgsDe) {
		this.rgsDe = rgsDe;
	}
	public String getRgsUserId() {
		return rgsUserId;
	}
	public void setRgsUserId(String rgsUserId) {
		this.rgsUserId = rgsUserId;
	}
	public String getUpdDe() {
		return updDe;
	}
	public void setUpdDe(String updDe) {
		this.updDe = updDe;
	}
	public String getUpdUserId() {
		return updUserId;
	}
	public void setUpdUserId(String updUserId) {
		this.updUserId = updUserId;
	}
	public String getSuserId() {
		return suserId;
	}
	public void setSuserId(String suserId) {
		this.suserId = suserId;
	}
	
	
}
