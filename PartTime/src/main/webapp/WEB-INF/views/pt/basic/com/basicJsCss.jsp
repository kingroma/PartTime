<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt"       uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"     	  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring"    uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form"      uri="http://www.springframework.org/tags/form" %> 

<script type="text/javascript"> var contextPath = "<c:url value='/' />";</script>

<%-- <%@include file="/WEB-INF/views/pt/basic/com/basicJsCss.jsp" %> --%>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/bootstrap.css'/>" />
<link type="text/css" rel="stylesheet" href="<c:url value='/css/my.css'/>" />

<script type="text/javascript" src="<c:url value='/js/jquery/jquery-1.11.3.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/jquery/jquery-ui.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/jquery/jquery.form.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/my.js'/>"></script>

<link href="https://vjs.zencdn.net/7.5.4/video-js.css" rel="stylesheet">

<!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
<script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
<script src='https://vjs.zencdn.net/7.5.4/video.js'></script>

<script>
	var alertMessage = '<c:out value="${alertMessage}"/>';
	if ( alertMessage != '' && alertMessage != null ){
		alert(alertMessage);
	}
</script>