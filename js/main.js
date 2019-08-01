
let toDo = [];



$('button').on('click', function(e) {
    e.preventDefault()
    var input = $('input').val();
    $('.list').append(` <li><button class="remove"></button>${input}</li>`);
    $("#input-item").val('');
});


$('ul.list').on('click', 'button', function() {
    $(this).closest('li').fadeOut(1000, function(){
        $(this).remove();
    });
  });
