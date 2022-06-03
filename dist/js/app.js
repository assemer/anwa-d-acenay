
audio = $("audio")[0];
rdm = 0;
btRD = 0;

clicked = false;
function starGame() 
{


	clicked = false;
	rdm = Math.floor(Math.random() * data.length);

	musicsRDM = data[rdm];

	audio.src = "dist/media/audio/" + musicsRDM["Musicfile"];
	audio.play();

	btns = $(".z-btn");
	btRD = Math.floor(Math.random() * btns.length);
	for (var i = 0; i < btns.length; i++) {
		rdChoose = Math.floor(Math.random() * data.length);
		musicsChoos = data[rdChoose]["author"] + " - " + data[rdChoose]["music"];
		btns[i].innerHTML = musicsChoos;
		btns[i].classList.remove("susces");
		btns[i].classList.remove("fails");

	}
	btns[btRD].innerHTML = data[rdm]["author"] + " - " + data[rdm]["music"];;
	$('.btn-outline-info')[0].remove();

}

function checkIT(btn) 
{
	if (btn === "audio") 
	{
		$(".z-btn")[btRD].classList += " susces";
		if (!clicked) 
		{
			setTimeout(function(){starGame()}, 1300);
		}
	}


	if (btn === $(".z-btn")[btRD] & btn != "audio") 
	{
		if (!clicked) {
		btn.classList += " susces";
		clicked = true;
		setTimeout(function(){starGame()}, 1300);
		}

	}else{
		btn.classList += " fails";
	}
}
