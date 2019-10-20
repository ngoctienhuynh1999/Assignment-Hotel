var slides = document.querySelectorAll('.slideshow-container .mySlides');
var currentSlide = 0;
var slideInterval;

function nextSlide(){
    if (currentSlide > slides.length-1) {currentSlide = 1}


    slides[currentSlide].className = 'mySlides';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'mySlides showing';
}

function prevSlide(){
    slides[currentSlide].className = 'mySlides';
    if (currentSlide < 1) {currentSlide = slides.length-1}
        else{currentSlide = (currentSlide-1)%slides.length;}

    slides[currentSlide].className = 'mySlides showing';
}

var playing = false;

function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

function auto(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};
