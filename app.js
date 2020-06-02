const gdpr = document.querySelector('#gdprBanner');
const gdprBtn = document.querySelector('#okBtn');

window.onload = function() {
	gdprBtn.addEventListener('click', function() {
		gdpr.style.display = 'none';
	});
};
