var slideIndex = 1;
slideShow(slideIndex);


function plusSlides(n) {
	slideShow(slideIndex += n)
}

function slideShow(n) {
	var slides = document.getElementsByClassName('slides');
	var i;

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block'
}