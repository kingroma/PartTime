package parttime.pt.com.basic.menu.model;

import parttime.pt.com.model.CommonVO;

public class MenuVO extends CommonVO{
	private static final long serialVersionUID = -4338009053230005260L;
	
	private String menuId = "";
	private String menuNm = "";
	private String menuImageUrl = "";
	private String menuLevel = "";
	private String menuSortSn = "";
	private String menuUrl = "";
	
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	public String getMenuNm() {
		return menuNm;
	}
	public void setMenuNm(String menuNm) {
		this.menuNm = menuNm;
	}
	public String getMenuImageUrl() {
		return menuImageUrl;
	}
	public void setMenuImageUrl(String menuImageUrl) {
		this.menuImageUrl = menuImageUrl;
	}
	public String getMenuLevel() {
		return menuLevel;
	}
	public void setMenuLevel(String menuLevel) {
		this.menuLevel = menuLevel;
	}
	public String getMenuSortSn() {
		return menuSortSn;
	}
	public void setMenuSortSn(String menuSortSn) {
		this.menuSortSn = menuSortSn;
	}
	public String getMenuUrl() {
		return menuUrl;
	}
	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}
	
	
}
