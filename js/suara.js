$(document).ready(function(){
	//---------------menampilkan gambar------------------
	//----burung
	$("div.hantu").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/hantu.jpg")',
		});
	});
	$("div.merak").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/merak.jpg")',
		});
	});
	$("div.pipit").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/pipit.jpg")',
		});
	});

	//-----hewan buas
	$("div.harimau").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/harimau.jpg")',
		});
	});
	$("div.jaguar").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/jaguar.jpg")',
		});
	});
	$("div.serigala").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/serigala.jpg")',
		});
	});

	//-----hewan ternak
	$("div.sapi").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/sapi.jpg")',
		});
	});
	$("div.kambing").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/kambing.jpg")',
		});
	});
	$("div.ayam").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/ayam.jpg")',
		});
	});
	//---------------menampilkan suara------------------
	//----suara burung
	$("div.hantu").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-burung-hantu.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	$("div.merak").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-burung-merak.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	$("div.pipit").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-burung-pipit.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	
	//----suara hewan buas
	$("div.harimau").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-harimau.mp3',
		   'volume' : '0,5',
		   'autoplay' : 'autoplay',

		}).appendTo("div");
	});
	$("div.jaguar").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-jaguar.mp3',
		   'volume' : '0,5',
		   'autoplay' : 'autoplay',

		}).appendTo("div");
	});
	$("div.serigala").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-serigala.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});

	//----suara hewan ternak
	$("div.sapi").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-sapi.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	$("div.kambing").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-kambing.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	$("div.ayam").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-ayam.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
});
