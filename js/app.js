$(document).ready(function(){
	$('#newLi').submit(function(e){
		e.preventDefault();
		if( $('#textbox').val().length === 0 ){return false}
		$('ul').append('<li>' + '<input type="checkbox"><span>' + $('.textbox').val() + '</span><button class="x" type="button">x</button>');
		$('.textbox').val('');
	})
	//click on li element, allows you to edit
	$('#toDoList').click(function(e){
		if(e.target.tagName === 'SPAN'){	
			var thisLi = e.target;
			$(thisLi).attr('contenteditable', true)
		}
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
	})
	
})

