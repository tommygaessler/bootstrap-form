$(document).on('ready', function(){
  console.log('test');
});

$('form').submit(function(event){
  event.preventDefault();

  var form = $(this).serializeArray();

  console.log(form);

  $('.results').append('<h2>' + form[0].value + '</h2>');
  $('.results').append('<img src=' + form[1].value + '>');
  $('.results').append('<p>' + form[2].value + '</p>');

  $('img').css('width', '100%');
  $('p').css('text-align', 'center');
});

// event or e is an argument that you can pass through a function
