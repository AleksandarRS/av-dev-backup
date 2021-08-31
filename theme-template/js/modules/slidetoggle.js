/*Lessons items toglle slide down*/
var slideOpen = true;
var heightChecked = false;
var initHeight = 0;
var intval = null;

function slideToggle() {

    window.clearInterval(intval);

    var toggleArrow = document.getElementById("toggle-btn");
    toggleArrow.classList.toggle("arrow-switch");

    var mdiv = document.getElementById('toggle-element');
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
			}, 0.001
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
			}, 0.001
		);
    }
}


/*Classes toggle slide above the toggle triger*/
var linkToggle = document.querySelectorAll('.classes-show-more-toggle');

for(i = 0; i < linkToggle.length; i++){

  linkToggle[i].addEventListener('click', function(event){

    event.preventDefault();

    var container = document.getElementById(this.dataset.container);

    if (!container.classList.contains('active')) {
      
      
      container.classList.add('active');
      container.style.height = 'auto';

      var height = container.clientHeight + 'px';

      container.style.height = '0px';

      setTimeout(function () {
        // linkToggle.innerHTML = "Swapped text!";
        container.style.height = height;
      }, 0);
      
    } else {
      
      container.style.height = '0px';
      
      container.addEventListener('transitionend', function () {
        // linkToggle.innerHTML = "Show more";
        container.classList.remove('active');
      }, {
        once: true
      });
      
    }
    event.target.textContent == 'Show more' ? event.target.textContent = 'Show less' : event.target.textContent = 'Show more';
    
  });

}