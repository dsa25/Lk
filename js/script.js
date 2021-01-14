function mainClock(){
	var date = new Date();
	$('#clock .clock__time').text(date.toLocaleString("ru", {hour: 'numeric',  minute: 'numeric',  second: 'numeric', timeZone: 'Asia/Yekaterinburg'}));
	$('#clock .clock__date').text(date.toLocaleString("ru", {month: 'long',  day: 'numeric'}));
}



var mainClockId = setInterval(mainClock, 1000);

mainClock();


$('body').on('click', '.menu-dashboard a', function() {
	var idboard = $(this).attr('data-idboard');
	if($(this).hasClass('active')){
		$('.board[data-idboard='+idboard+']').removeClass('active');
		if(idboard == 0){$('.board').removeClass('default');}
		$(this).removeClass('active');
	}else{
		$('.board[data-idboard='+idboard+']').addClass('active');
		if(idboard == 0){$('.board').addClass('default');}		
		$(this).addClass('active');
	}
});

$('body').on('click', 'a.board__close', function() {
	var idboard = $(this).closest('.board').attr('data-idboard');
	$('.board[data-idboard="'+idboard+'"]').removeClass('active');
	$('.menu-dashboard a[data-idboard="'+idboard+'"]').removeClass('active');
});


$("#calendar-dashboard").datepicker({
	monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	firstDay: 1,
	dateFormat:'dd.mm.y',
	showOn: "button",
	buttonImage: "/img/calendar_icon.svg",
	buttonImageOnly: true,
	buttonText: "Выбрать дату"
});


$( ".board" ).draggable({
	containment: "html",
	start: function(){
		$('.board[data-idboard="0"]').removeClass('active');
		$('.board').removeClass('default');
	}
});

$('body').on('mousedown', '.ui-draggable:not(.current)', function() {
	$('.ui-draggable').removeClass('current');
	$(this).addClass('current');
});