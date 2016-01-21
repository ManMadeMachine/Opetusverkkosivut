$(document).ready(function(){
	/*Javaskripti valikon toiminnallisuudelle, koska normilinkit on tylsiä :) */
	$("#navbar>ul>li").on("click", function(event){
		document.location.href = event.target.id + ".html";
	});
	
	/*Esimerkkien toiminnallisuus*/
	$("input[id^='r']").on("click", function(event){
		$("#testi p").css(event.target.name, event.target.value);
	});
	
	/*Piilotetaan virheilmoitukset*/
	$("#yhteydenotto_form").children(".error").hide();
	
	/*Lähetettäessä tarkistetaan lomakkeeseen syötetyt tiedot */
	$("#yhteydenotto_form").on("submit", function(){
		/*Oletetaan, että lomake on validi*/
		var onValidi = true;
		
		//Testataan, onko annettu nimeä
		if ($("#name").val() === ""){
			$("#name-error").show();
			onValidi = false;
		}
		else{
			$("#name-error").hide();
		}
		
		//Testataan sähköpostin oikeellisuus
		var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!email_regex.test($("#email").val())){
			$("#email-error").show();
			onValidi = false;
		}
		else{
			$("#email-error").hide();
		}
		
		//Testataan onko annettu aihetta
		if ($("#topic").val() === ""){
			$("#topic-error").show();
			onValidi = false;
		}
		else{
			$("#topic-error").hide();
		}
		
		//Tarkistetaan, onko annettu palautetta
		if ($("#message").val() === ""){
			$("#message-error").show();
			onValidi = false;
		}
		else{
			$("#message-error").hide();
		}
		
		//Mikäli löytyi puutteita, ei lähetetä lomaketta
		if (onValidi === false)
			event.preventDefault();
		
	});
	
});