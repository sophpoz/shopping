$(document).ready(function(){
	$('#submit').on('click', function(){
		$('ul').append('<li>' + '<input type="checkbox">' + $('.textbox').val() + ' <button class="x" type="button">x</button>');
		$('.x').on('click',function() {
			$(this).parent('li').remove();
		})
		$('input:checkbox').on('change', function(){
		var input = $(this).parent('li');
		if (this.checked){
			$(input).css({
				'textDecoration': 'line-through',
				'color': 'grey'
			});
		} else {
			$(input).css({
				'textDecoration': 'none',
				'color' : 'black'
			});
		}
		})
		$('.textbox').val('');

	})
});
$(document).keypress(function(e){
	if(e.which === 13) {
		$('ul').append('<li>' + '<input type="checkbox">' + $('.textbox').val() + ' <button class="x" type="button">x</button>');
		$('.x').on('click',function() {
			$(this).parent('li').remove();
		})
		$('input:checkbox').on('change', function(){
		var input = $(this).parent('li');
		if (this.checked){
			$(input).css({
				'textDecoration': 'line-through',
				'color': 'grey'
			});
		} else {
			$(input).css({
				'textDecoration': 'none',
				'color' : 'black'
			});
		}
		})
		$('.textbox').val('');
	}
	// if('#textbox').val().length() === 0 ){return false}
})