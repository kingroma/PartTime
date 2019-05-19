-- USER
INSERT INTO TB_CO_USER VALUES('kingroma','4235','김정진','김새우','나',now(),'',now(),'');


-- MENU
-- HOME
INSERT INTO TB_CO_MENU 	( MENU_ID, MENU_NM, MENU_IMAGE_URL, MENU_LEVEL, MENU_SORT_SN, MENU_URL ) VALUES	( 'MENU_0001', 'HOME',  '',	'1', '1', '/home.do');

-- VIDEO 
INSERT INTO TB_CT_VIDEO (
VIDEO_ID , VIDEO_NM ,VIDEO_CN ,VIDEO_IMAGE ,VIDEO_URL , 
VIDEO_MINI_URL , VIDEO_CNT ,RGS_DT , UPD_DT ) VALUES (
'VDEO_0001','샘플 비디오','샘플비디오입니다요 ~','/videos/sample/sampleImage.png','/videos/sample/sampleVideo.mp4',
'','0',NOW(),NOW() );

