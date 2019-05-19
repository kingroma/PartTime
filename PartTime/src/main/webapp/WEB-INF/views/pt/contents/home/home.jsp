
<div class='homeDiv'>
	<div id='videoContents'>
	</div>
</div>

<script>
	$('#document').ready(function(){
		if(contentsTarget == 'home'){
			fn_getHomeListVideo();
		}
	});
	var homePage = '0';
	function fn_getHomeListVideo(){
		var param = {
			'homePage':homePage 
		}
		var r = goAjax('/home/listVideo.do',param);
		if ( r != null && r != '' && r != undefined ){
			for ( var i = 0 ; i < r.length ; i ++){
				var vo = r[i];
				if ( vo != null && vo != '' && vo != undefined ){
					fn_addHomeVideo( vo );	
				}
			}
		}
	}
	
	function fn_addHomeVideo(param){
		var t = $('#videoContents');
		
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
			video.attr("poster",poster);
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
		contentDiv.attr("onclick",'fn_homeVideoOnClickListener("'+videoId+'")')
		
		t.append(contentDiv)
		
	}
	
	function fn_homeVideoOnClickListener(videoId){
		console.dir(videoId);
		fn_openHomeDetailDiv();
		fn_getHomeDetailVideo(videoId);
	}
</script>