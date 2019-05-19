<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!-- homeDetail -->
<div id='homeDetailDiv' class='homeDetailDiv'>
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
		}
	}
	
	function fn_getHomeDetailVideo(videoId){
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
		
		// title and text info 
		var info = $('<div></div>').css("padding",'3px');
		
		var title = $('<div></div>').addClass('videoTitle').append(videoNm);
		var text = $('<div></div>').addClass('videoText').append(videoCn);
		var last = $('<div></div>').addClass('videoLast').append('watched&nbsp;').append(videoCnt).append('</br>').append(rgsDe);
		info.append(title).append(text).append(last);
		
		contentDiv.append(video);
		contentDiv.append(info);
		// contentDiv.attr("onclick",'fn_homeVideoOnClickListener("'+videoId+'")')
		
		t.append(contentDiv)
		
	}
</script>