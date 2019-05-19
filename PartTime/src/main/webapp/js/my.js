$(document).ready(function(){
	
});

/** null 체크 */
function isString(value, init){
	var initval = (init == undefined || init == null || init == "undefined") ?"":init;
	return (value == undefined || value == null || value == "undefined")?initval:value.toString();
}

function getContextPath(){
	var pathLen = contextPath.length;
	if(contextPath.substring(pathLen-1, pathLen) == "/" ){
		return contextPath.substring(0, (contextPath.length-1));
	}else{
		return contextPath;
	}
}

function onLoading(){
	createLoading('viewLoading', '');
}
//로딩바 닫기
function offLoading(){
	$('#viewLoading').dialog("close");
}
/**
* 로딩바 생성
* 다이얼로그를 이용한 로딩바
* @param divId - div id
* @param words - 로딩바 문구
*/
function createLoading(divId, words) {
	divId 	 = (divId == null || divId == "")?"viewLoading":divId;
	var dialogId = "#"+divId;
	$(dialogId).empty();   // 중복방지
	$(dialogId).remove();  // 기존 div ID 존재하면 삭제

	var newDiv = $("<div></div>").attr("id", divId).attr("class", "loadingBar");

	var loadingStr  = "<span><img src='"+getContextPath()+"/images/etc/loading.gif' width='250' border='0' alt='' /></span>";
	if(words != null && words != ""){
		loadingStr += "<br><br><span>"+words+"</span>";
	}
	newDiv.html(loadingStr);

	$('body').append(newDiv);
		$(newDiv).dialog({
		modal:true,
		overlay: {
			opacity: 0.8,
			background: "black"
		},
		open: function() {
			$('.ui-widget-header').remove();  			// 상단 타이틀 제거
			$('.ui-resizable-handle').remove();			// 모달 제거(크기조절,..)
			$(newDiv).parent().removeClass('ui-widget-content');		// 배경 css제거
		},
		close: function(event, ui) {
			$(dialogId).remove();
		}
	});
}


function goAction(path, formId){
	var form = (isString(formId) == "")?"form1":formId;
    var loadAt = true;
    if(loadAt){
    	onLoading();
    }
	$('#'+form).attr("action", getContextPath()+path).submit();
}

function goAjax(path, params, msgAt){
	var result = null;
	msgAt = (isString(msgAt) == "")?"N":msgAt.toUpperCase();
	$.ajaxSettings.traditional = true;  // Array전송시 필요(jquery 1.4 이상)
	$.ajax({
		type: "POST",
		url:  (getContextPath()+path),
		data: params,
		async: false,
		cache: false,
		dataType: "json",
		success: function(data){
			result = data;
			if(msgAt != "N" && result != null && result.message != null && result.message != ""){
				// <br/>을 \n으로 치환
 	   			var re = /<br *\/?>/gi;
 	   			alert((result.message).replace(re, '\n'));
			}
		}, error:function (data, textStatus, jqXHR) {
			ajaxError(data, textStatus, jqXHR);
		}, beforeSend:function(){

	    }, complete:function(){
	    	offLoading();
	    }
	});
	return result;
}
