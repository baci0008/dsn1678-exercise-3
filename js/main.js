var sales__1 = $('.sales__1');
var sales__details__1 = $('.sales__details__1');

var buttonClickHandler = function () {
	var currentState = sales__details__1.attr('data-state')
	if (currentState== 'active') {
		sales__details__1.attr('data-state', 'inactive');
	} else {
		sales__details__1.attr('data-state', 'active');
	}
};
sales__1.on('click', buttonClickHandler);


var sales__2 = $('.sales__2');
var sales__details__2 = $('.sales__details__2');

var buttonClickHandler = function () {
	var currentState = sales__details__2.attr('data-state')
	if (currentState== 'active') {
		sales__details__2.attr('data-state', 'inactive');
	} else {
		sales__details__2.attr('data-state', 'active');
	}
};
sales__2.on('click', buttonClickHandler);


