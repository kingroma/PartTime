package parttime.pt.com.basic.generic;

public class GenericString {
	private static boolean isInit = false;
	private static String msg[] = new String[10000];
	
	private GenericString() {}
	
	public static void init() {
		if(!isInit) {
			msg[GenericCode.USER_LOGIN_SUCCESS] 	= "로그인 성공";
			msg[GenericCode.USER_NOT_DATA] 			= "로그인 데이터가 정상적이지 않습니다.";
			msg[GenericCode.USER_ID_NOT_EXIST]		= "로그인 사용자 아이디가 확인되지 않습니다.";
			msg[GenericCode.USER_PW_INCORRECT]		= "로그인 비밀번호가 확인되지 않습니다.";
		}
		isInit = true ; 
	}
	
	public static String getMsg(int code) {
		init();
		return msg[code];
	}
	
}
