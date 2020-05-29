function docReady(fn) {
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(fn, 1);
	}
	else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

docReady(function() {
	console.log(checkCookie('gdpr-accepted'));
	if (checkCookie('gdpr-accepted') === false) {
		document.getElementById('gdpr-popup').style.display = 'flex';
	}
});

function acceptGDPR() {
	setCookie('gdpr-accepted', true, 28);
	document.getElementById('gdpr-popup').style.display = 'none';
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function checkCookie(cname) {
	var accepted = getCookie(cname);
	if (accepted != '') {
		return true;
	}
	return false;
}
