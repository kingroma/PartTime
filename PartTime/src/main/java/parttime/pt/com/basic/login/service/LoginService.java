package parttime.pt.com.basic.login.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import parttime.pt.com.basic.generic.GenericCode;
import parttime.pt.com.basic.generic.GenericString;
import parttime.pt.com.basic.login.mapper.LoginMapper;
import parttime.pt.com.basic.login.model.LoginVO;
import parttime.pt.com.util.DateUtil;

@Component
public class LoginService {
	@Autowired
	public LoginMapper loginMapper;
	
	public List<Map<String,String>> list (LoginVO entity){
		return loginMapper.list(entity);
	}
	
	public LoginVO view (LoginVO entity){
		return loginMapper.view(entity);
	}
	
	public int insertLog(LoginVO entity) {
		return loginMapper.insertLog(entity);
	}
	
	
	/**
	 * SignIn
	 * Required 
	 * 	>> userId
	 *  >> userPw
	 *   
	 * */
	public int signIn(LoginVO loginVO , HttpServletRequest request) {
		int RETURN_CODE = GenericCode.USER_LOGIN_SUCCESS;
		
		if  ( loginVO != null && 
				loginVO.getUserId() != null && !"".equals(loginVO.getUserId()) && 
				loginVO.getUserPw() != null && !"".equals(loginVO.getUserPw()) )  { 
			
			// login information
			LoginVO vo = this.view(loginVO);
			
			if ( vo != null && vo.getUserId() != null && !"".equals(vo.getUserId()) && vo.getUserId().equals(loginVO.getUserId()) ) {
				if ( vo.getUserPw() != null && !"".equals(vo.getUserPw()) && loginVO.getUserPw().equals(vo.getUserPw())) {
					RETURN_CODE = GenericCode.USER_LOGIN_SUCCESS;
					setLoginSessionInformation(request,vo);
				} else {
					// 비밀번호가 일치하지 않았을 때 
					RETURN_CODE = GenericCode.USER_PW_INCORRECT;
				}
			}else {
				// 사용자 아이디가 확인되지 않을 때 
				RETURN_CODE = GenericCode.USER_ID_NOT_EXIST;
			}
		}else {
			// 데이터가 정상적으로 넘어오지 않았을 
			RETURN_CODE = GenericCode.USER_NOT_DATA;
		}
		
		// log
		if ( loginVO != null ) {
			loginVO.setLoginCode(String.valueOf(RETURN_CODE));
			loginVO.setLoginMsg(GenericString.getMsg(RETURN_CODE));
			this.insertLog(loginVO);
		}
		
		return RETURN_CODE ;
	}
	
	/**
	 * Set Login Information into Server Session 
	 * userVO 
	 * @param loginVO loginService 로 부터 받은 데이터들 
	 * */
	public void setLoginSessionInformation (HttpServletRequest request, LoginVO loginVO) {
		HttpSession session = request.getSession();
		
		// vo 자체를 담고 기본적인 데이터를 session 에 추가해놓음 
		// TODO IP 정보 담는거 
		
		session.setAttribute("loginDe",DateUtil.getNow()); // yyyy-MM-dd HH:mm
		session.setAttribute("loginVO", loginVO); // PK 
		session.setAttribute("suserId", loginVO.getUserId()); // PK
		session.setAttribute("suserNm", loginVO.getUserNm());
		session.setAttribute("suserNick", loginVO.getUserNick());
		session.setAttribute("srm", loginVO.getSrm());
		
	}
	
	public LoginVO getLoginInformation(HttpServletRequest request){
		HttpSession session = request.getSession();
		
		LoginVO loginVO = new LoginVO();
		if ( session != null ){
			String loginDe = (String)session.getAttribute("loginDe");
			String suserId = (String)session.getAttribute("suserId");
			String suserNm = (String)session.getAttribute("suserNm");
			String suserNick = (String)session.getAttribute("suserNick");
			String srm = (String)session.getAttribute("srm");
			
			loginVO.setLoginDe(loginDe);
			loginVO.setSuserId(suserId);
			loginVO.setSuserNm(suserNm);
			loginVO.setSuserNick(suserNick);
			loginVO.setSrm(srm);
		}
		
		return loginVO;
	}
	
	// login check
	public boolean isLogin(HttpServletRequest request) {
		boolean ret = false ; 
		HttpSession session = request.getSession();
		
		if ( session != null ) {
			LoginVO loginVO = (LoginVO) session.getAttribute("loginVO");
			String suserId = (String) session.getAttribute("suserId");
			if ( loginVO != null && suserId != null && !"".equals(suserId)) {
				ret = true ; 
			}
		}
		return ret;
	}
	
	// log out
	public void signOut(HttpServletRequest request) {
		HttpSession session = request.getSession();
		
		if( session != null ) {
			session.setAttribute("loginVO", null);
			session.setAttribute("suserId", null);
		}
	}
}
