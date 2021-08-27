var slideOpen = true;
var heightChecked = false;
var initHeight = 0;
var intval = null;

function slideToggle() {

    window.clearInterval(intval);

    var toggleArrow = document.getElementById("mbtn");
    toggleArrow.classList.toggle("arrow-switch");

    var mdiv = document.getElementById('mdiv');
    mdiv.classList.toggle("overflow-rule");

    if(!heightChecked) {
        initHeight = mdiv.offsetHeight;
        heightChecked = true;
    }
    if(slideOpen) {
        var h = initHeight;
        slideOpen = false;
        intval = setInterval(function(){
			h--;
			mdiv.style.height = h + 'px';
			if(h <= 0)
				window.clearInterval(intval);
			}, 1
		);
    }
    else {
        var h = 0;
        slideOpen = true;
	    intval = setInterval(function(){
			h++;
			mdiv.style.height = h + 'px';
			if(h >= initHeight)
				window.clearInterval(intval);
			}, 1
		);
    }
}