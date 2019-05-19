package parttime.pt.com.model;

import java.io.Serializable;

import javax.servlet.http.HttpServletRequest;

import parttime.pt.com.basic.login.model.LoginVO;
import parttime.pt.com.basic.login.service.LoginService;

public class CommonVO implements Serializable {
	private static final long serialVersionUID = 806045106577821407L;
	
	private String userId = "";
	private String userPw = "";
	private String userNm = "";
	private String userNick = "";
	private String rm = "";
	
	private String rgsDe = "";
	private String rgsUserId = "";
	private String updDe = "";
	private String updUserId = "";
	private String loginDe = "";
	// session 
	private String suserId = "";
	private String suserNm = "";
	private String suserNick = "";
	private String srm = "";
	
	private String ack = "";
	
	
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
	public String getSuserNm() {
		return suserNm;
	}
	public void setSuserNm(String suserNm) {
		this.suserNm = suserNm;
	}
	public String getSuserNick() {
		return suserNick;
	}
	public void setSuserNick(String suserNick) {
		this.suserNick = suserNick;
	}
	public String getSrm() {
		return srm;
	}
	public void setSrm(String srm) {
		this.srm = srm;
	}
	public String getAck() {
		return ack;
	}
	public void setAck(String ack) {
		this.ack = ack;
	}
	public String getLoginDe() {
		return loginDe;
	}
	public void setLoginDe(String loginDe) {
		this.loginDe = loginDe;
	}
	
	public void setSuserInfo(LoginService loginService, HttpServletRequest request){
		if( loginService != null && request != null ){
			LoginVO loginVO = loginService.getLoginInformation(request);
			
			this.setLoginDe(loginVO.getLoginDe());
			this.setSuserId(loginVO.getSuserId());
			this.setSuserNm(loginVO.getSuserNm());
			this.setSuserNick(loginVO.getSuserNick());
			this.setSrm(loginVO.getSrm());
		}
	}
	
}
