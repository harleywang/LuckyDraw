$('.menu0 li a').on('click', function() {
    $('.btn0').html(this.innerHTML + ' <span class="caret"></span>');
});
$('.menu1 li a').on('click', function() {
    $('.btn1').html(this.innerHTML + ' <span class="caret"></span>');
});
// var person = '<div class="person">\
// 				<p class="personImg"></p>\
// 				<p class="personName"></p>\
// 			  </div>'
// var htm=$('.persons').html() ;
// $('.persons').html(htm+person+person+person+person+person+person);
