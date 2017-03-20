var minRadius = 1,
    maxRadius = 100,
    defaultRadius = 5;
    diffRadius = 1,
    radiusSpan = document.getElementById('radval'),
    decRadius = document.getElementById('decrad'),
    incRadius = document.getElementById('incrad');


var setRadius = function(newRadius) {
	if(newRadius < minRadius) {
		radius = minRadius;
	} else if(newRadius > maxRadius) {
		radius = maxRadius;
	} else {
	    radius = newRadius;
	}
	context.lineWidth = radius*2;
	radval.innerHTML = radius;
}

decrad.addEventListener('click', function() {
	setRadius(radius-diffRadius);
});

incrad.addEventListener('click', function() {
	setRadius(radius+diffRadius);
});

setRadius(defaultRadius);
