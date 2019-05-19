<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<%@include file="/WEB-INF/views/pt/basic/com/basicJsCss.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>

<body>
	<div>
		<form name="form1" id="form1" method="post" class="form-signin loginForm">
		</form>
	</div>
</body>
</html>

<script type="text/javascript">
	fn_pageMove();
	alert('hello')
	function fn_pageMove(){
		goAction('<c:out value="${pageMoveUrl}"/>');
	}
</script>
