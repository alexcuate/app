

$(document).ready(function(){
	socket.on('signal', function(data){
		var availableLots = document.getElementById(data.area);
		availableLots.innerHTML = data.availability + " lots available";
		
	});
});
