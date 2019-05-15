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

<script>
	var alertMessage = '${msg}';
	if ( alertMessage != '' && alertMessage != null ){
		alert(alertMessage);
	}
</script>