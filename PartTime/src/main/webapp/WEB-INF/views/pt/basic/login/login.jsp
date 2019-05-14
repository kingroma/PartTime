<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@include file="/WEB-INF/views/pt/basic/com/basicJsCss.jsp" %>

<html>
	<head>
		<title>PartTime</title>
	</head>
	<body class='loginBody'>
		<h1>
			Hello World!
		</h1>
		<form:form commandName="loginVO" name="form1" id="form1" method="post" cssClass="form-signin loginForm">
			<div class='loginDiv'>
				<div class='form-div'>
					<input type="text" id="userId" name='userId' class="form-input" required="required" placeholder="아이디">
				</div>
				<div class='form-div'>
					<input type="password" id="userPw" name='userPw' class="form-input" required="required" placeholder="비밀번호">
				</div>
				<div class='form-div' style='padding-top:20px;'>
					<!-- <a href='javascript:fn_save()' class="btn btn-primary" style='width:50%;max-width:300px;'>로그인</a> -->
					<button onclick='javascript:fn_save()' class="btn btn-primary" style='width:50%;max-width:300px;'>로그인</button>
				</div>
			</div>
			<div>
				
			</div>
		</form:form>
	</body>
</html>

<script>
	$(document).ready(function(){
		
	});
	
	function fn_initValidation(){
		$('input').each(function(){
			if ( $(this).prop("required") ) {
				
			}  
		}) 
	}
	
	function fn_save(){
		var msg = '';
		var flag = '';
		var userId = $('#userId').val();
		var userPw = $('#userPw').val();
		if( userId != '' && userPw != '' ) {
			goAction('/signIn.do');
		}else {
			//alert('something empty')
		}
	}		
</script>
