<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!-- homeDetail -->
<div id='homeDetailDiv' class='homeDetailDiv'>
	<div>
		<a href='javascript:fn_openHomeDetailDiv()' >close</a>
		<c:out value="${suserId }"/>
	</div>
	<div id='homeDetailVideoDiv'>
	
	</div>
	<div id='homeDetailVideoReply'>
	
	</div>
</div>


<script>
	var isHomeDetailOpen = false;
	function fn_openHomeDetailDiv(){
		var target = $('#homeDetailDiv');
		
		if(!isHomeDetailOpen){
			isHomeDetailOpen = true ; 
			target.slideDown();
		}else {
			isHomeDetailOpen = false ; 
			// target.css('min-height','10%');
			target.slideUp();
			// target.animate( { height:"10%" }, { queue:false, duration:500 });
			
		}
	}
	
	function fn_getHomeDetailVideo(videoId){
		$('#homeDetailVideoDiv').empty();
		var param = {
				'videoId':videoId
		}
		var r = goAjax('/home/viewVideo.do',param);
		if ( r != null && r != '' && r != undefined ){
			fn_setHomeDetailVideo( r );	
		}
	}
	
	function fn_setHomeDetailVideo(param){
		var t = $('#homeDetailVideoDiv');
		
		var contentDiv = $('<div></div>').css("margin-top",'10px').css("margin-bottom",'10px');;
		var poster = param.videoImage;
		var sourceVideo = param.videoUrl;
		var videoId = param.videoId;
		var videoNm = param.videoNm;
		var videoCn = param.videoCn;
		var videoCnt = param.videoCnt;
		var rgsDe = param.rgsDe;
		var goodAt = param.goodAt;
		var badAt = param.badAt;
		
		var video = $('<video></video>');
		video.attr("width","100%");
		video.attr("controls", "controls");
		if ( poster != undefined && poster != null && poster != '' ){
			// video.attr("poster",poster);
		}
		
		var source = $('<source></source>');
		source.attr("src",sourceVideo);
		source.attr("type",'video/mp4');
		// video.append(source);
		
		var goodBadDiv = $('<div></div>');
		var goodA = $('<a></a>').append('good').attr("goodAt",goodAt)
			.attr("onclick",'fn_homeDetailOnClickGoodBad("'+videoId+'","good")');
		var badA = $('<a></a>').append('bad').attr("badAt",badAt)
			.attr("onclick",'fn_homeDetailOnClickGoodBad("'+videoId+'","bad")');
		goodBadDiv.append(goodA).append('&nbsp;').append(badA);
		
		// title and text info 
		var info = $('<div></div>').css("padding",'3px');
		
		var title = $('<div></div>').addClass('videoTitle').append(videoNm);
		var text = $('<div></div>').addClass('videoText').append(videoCn);
		var last = $('<div></div>').addClass('videoLast').append('watched&nbsp;').append(videoCnt).append('</br>').append(rgsDe);
		info.append(title).append(text).append(last);
		
		contentDiv.append(video);
		contentDiv.append(goodBadDiv);
		contentDiv.append(info);
		// contentDiv.attr("onclick",'fn_homeVideoOnClickListener("'+videoId+'")')
		
		t.append(contentDiv)
		
	}
	
	function fn_homeDetailOnClickGoodBad(videoId,atNm){
		var goodAt = '';
		var badAt = '';
		var userId = '<c:out value="${session.suserId}"/>';
		
		if ( atNm == 'good' ){
			goodAt = 'Y';
			badAt = '';
		}else {
			goodAt = '';
			badAt = 'Y';
		}
		
		var param = {
				'videoId':videoId,
				'userId':userId,
				'goodAt':goodAt ,
				'badAt':badAt
		}
		var r = goAjax('/home/insertVideoGoodBad.do',param);
	}
	function fn_homeDetailDivOnClickEvent(){
		
	}	
</script>