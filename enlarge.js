const pillowContainer = document.querySelector('.pillowContainer');
const pillowPic = document.querySelector('#pillow');
const pillowContainer1 = document.querySelector('.pillowContainer1');
const pillowPic1 = document.querySelector('.pillow1');
const pillowContainer2 = document.querySelector('.pillowContainer2');
const pillowPic2 = document.querySelector('.pillow2');
const pillowContainer3 = document.querySelector('.pillowContainer3');
const pillowPic3 = document.querySelector('.pillow3');
const pillowContainer4 = document.querySelector('.pillowContainer4');
const pillowPic4 = document.querySelector('.pillow4');

pillowContainer1.addEventListener('mouseover', function() {
	pillowPic1.style.width = '80%';
});

pillowContainer1.addEventListener('mouseout', function() {
	pillowPic1.style.width = '40%';
});

pillowContainer2.addEventListener('mouseover', function() {
	pillowPic2.style.width = '80%';
});

pillowContainer2.addEventListener('mouseout', function() {
	pillowPic2.style.width = '40%';
});

pillowContainer3.addEventListener('mouseover', function() {
	pillowPic3.style.width = '80%';
});

pillowContainer3.addEventListener('mouseout', function() {
	pillowPic3.style.width = '40%';
});

pillowContainer4.addEventListener('mouseover', function() {
	pillowPic4.style.width = '80%';
});

pillowContainer4.addEventListener('mouseout', function() {
	pillowPic4.style.width = '40%';
});
