//links al mapa
$(document).ready(function(){
	//console.log("ready");
	$("#A").click(function(){
		console.log("ready");
		$(location).attr('href','AreaMapa.html?map=A');
	});
	$("#B").click(function(){
		$(location).attr('href','AreaMapa.html?map=B');
	});
	$("#C").click(function(){
		$(location).attr('href','AreaMapa.html?map=C');
	});
	$("#D").click(function(){
		$(location).attr('href','AreaMapa.html?map=D');
	});
	$("#E").click(function(){
		$(location).attr('href','AreaMapa.html?map=E');
	});
});