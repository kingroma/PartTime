<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<%@include file="/WEB-INF/views/pt/basic/com/basicJsCss.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>PartTime</title>
</head>
<body>
<script>
	var contentsTarget = 'home';
</script>
<%@include file="/WEB-INF/views/pt/basic/com/header.jsp" %>
<div class='mainDiv'>
	<!-- <div>Main</div> -->
	<%@include file="/WEB-INF/views/pt/contents/home/homeDetail.jsp" %>
	<%@include file="/WEB-INF/views/pt/contents/home/home.jsp" %>
</div>
<%@include file="/WEB-INF/views/pt/basic/com/footer.jsp" %>
</body>
	<script>
		function test(){
			var r = goAjax('/menu/list.do');
			console.dir(r);
		}
	</script>
</html>



