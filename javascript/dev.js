$(document).ready(function(){ 
	//招聘各个职位切换效果
	$("#employ_content li").find('a').on('click', function(){
		$('#employ_content li').find('a').removeClass('current');
		$(this).addClass('current');
	});
	$('#employ_content .cpjl').click(function() {
		$('.e-content').hide();
		$('.cpjl-content').show();
	});
	$('#employ_content .rjcs').click(function() {
		$('.e-content').hide();
		$('.rjcs-content').show();
	});
	$('#employ_content .sqjszc').click(function() {
		$('.e-content').hide();
		$('.sqjszc-content').show();
	});
	$('#employ_content .qdkf').click(function() {
		$('.e-content').hide();
		$('.qdkf-content').show();
	});
	$('#employ_content .java').click(function() {
		$('.e-content').hide();
		$('.java-content').show();
	});
	$('#employ_content .rjssgc').click(function() {
		$('.e-content').hide();
		$('.rjssgc-content').show();
	});
}); 