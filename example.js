var nightmares = false;

function changetext() {
	nightmares = !nightmares;
	document.getElementById("changeme").innerHTML = nightmares ? "nightmares!" : "dreams!";
	document.getElementById("changesrc").src = nightmares ? "nightmare_email_feature.png" : "good_code.png";
}