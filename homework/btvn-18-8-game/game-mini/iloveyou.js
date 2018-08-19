$('#demo1').click(function () {
    $('#game1').show();
    $('#depth').show();
});
$('#demo2').click(function(){
    $('#game2').show();
})
$('p a').click(function () {
    $('#demo1').hide(1000);
    $('#demo2').hide(1000);
    $('#demo3').hide(1000);

});
$('#back').click(function () {
    $('#demo1').show('slow');
    $('#demo2').show('slow');
    $('#demo3').show('slow');
    $('#depth').remove();
    $('#game1').hide();
    $('#game2').hide();

}); 
$('#home').click(function(){
    
});
$('.question #yes').click(function () {
    $("input:text").val("Anh yêu em");
});
$('.question').each(function () {
    $('.question #no').hover(function () {
        $('#no').text("CŨNG LÀ YES");
        $('#no').click(function () {
            $("input:text").val("ANH BIẾT MÀ =)))");
        });
    });
    $('.question').mouseout(function(){
        $('#no').text("NO");

    });

});



