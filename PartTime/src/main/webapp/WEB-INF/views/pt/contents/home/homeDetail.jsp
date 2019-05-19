<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!-- homeDetail -->
<div id='homeDetailDiv' class='homeDetailDiv'>
	
	<div id='homeCloseDiv'>
		<a href='javascript:fn_openHomeDetailDiv()' >close</a>
	</div>
	<div id='homeDetailVideoDiv'>
		
	</div>
	<div id='homeReplyTextDiv'>
		<input type='text' id='replyText' /><a href='javascript:fn_insertReply()'>send</a>
	</div>
	<div id='hoemDetailVideoReplyDiv' style='overflow-y:hidden'>
		<div id='homeDetailVideoReply'>
		
		</div>
	</div>
	
</div>


<script>
	var isHomeDetailOpen = false;
	function fn_openHomeDetailDiv(){
		var target = $('#homeDetailDiv');
		
		if(!isHomeDetailOpen){
			isHomeDetailOpen = true ; 
			target.slideDown();
			fn_loadReply();
		}else {
			isHomeDetailOpen = false ; 
			// target.css('min-height','10%');
			target.slideUp();
			// target.animate( { height:"10%" }, { queue:false, duration:500 });
		}
		
	}
	
	function fn_resizeDetail(){
		var height = $('#homeDiv').height() - $('#homeDetailVideoDiv').height() - $('#homeReplyTextDiv').height() - $('#homeCloseDiv').height()
		
		$('#hoemDetailVideoReplyDiv').css('height',height+'px').css("overflow-y",'auto')
		console
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
		
		var contentDiv = $('<div></div>').css("padding-top",'10px').css("padding-bottom",'10px');;
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
			.attr("onclick",'fn_homeDetailOnClickGoodBad("'+videoId+'","good",this)');
		var badA = $('<a></a>').append('bad').attr("badAt",badAt)
			.attr("onclick",'fn_homeDetailOnClickGoodBad("'+videoId+'","bad",this)');
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
		
		t.append(contentDiv)
		
	}
	
	function fn_homeDetailOnClickGoodBad(videoId,atNm,obj){
		var goodAt = '';
		var badAt = '';
		var userId = suserId;
		var g = $(obj).attr("goodAt");
		var b = $(obj).attr("badAt");
		
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
	
	function fn_loadReply(){
		var target = $('#homeDetailVideoReply');
		target.empty();
		var videoId = $('#videoId').val();
		var param = {
			"videoId":videoId
		}
		
		var r = goAjax('/home/listVideoReply.do',param);
		if ( r != null && r != '' && r != undefined ) {
			for( var i = 0 ; i < r.length ; i ++ ) {
				var vo = r[i]; 
					
				fn_addReply(vo);
			}
		}
	}

	function fn_addReply(vo){
		var target = $('#homeDetailVideoReply');
		
		var videoId = vo.videoId;
		var replyId = vo.replyId;
		var userId = vo.userId;
		var userNm = vo.userNm;
		var userNick = vo.userNick;
		var replyText = vo.replyText;
		var rgsDe = vo.rgsDe;
		
		var replyDiv = $('<div></div>');
		var d1 = $('<div></div>');
		var d2 = $('<div></div>');
		var b = $('<b></b>');
		b.append(userNick + '['+userId+']')
		d1.append(b);
		d1.append(rgsDe);
		d2.append(replyText);
		
		
		replyDiv.append(d1);
		replyDiv.append(d2);
		target.prepend(replyDiv);
	}
	
	function fn_insertReply(){
		var target = $('#replyText');
		var replyText = target.val();
		var userId = suserId ;
		var param = {
				'userId' : userId ,
				'userNm' : suserNm , 
				'userNick' : suserNick ,
				'videoId':$('#videoId').val() ,
				'replyText' : replyText , 
				'rgsDe' : 'now'	
		}
		if ( replyText != ''){
			target.val('');
			var r = goAjax('/home/insertVideoReply.do',param);	
			fn_addReply(param);
		}else {
			alert('plz text')
		}
	}
</script>