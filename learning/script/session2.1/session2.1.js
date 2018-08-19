// function changeImage() {
//     document.getElementById('changeImage').src = '5.jpg';
// }
// function changeImage1() {
//     document.getElementById('changeImage').src = '2.jpg';
// }
// function changeImage2() {
//     document.getElementById('changeImage').src = '3.jpg';
// }
// function changeImage3() {
//     document.getElementById('changeImage').src = '4.jpg';
// }

function changeImage(Image, name, color) {
    document.getElementById('changeImage').src = Image;
    document.getElementById('textDemo').innerHTML = name;
    document.getElementById('textDemo').style.color = color;
    document.getElementById('textDemo1').style.color = color;
}
function getValue() {
    var a;
    a = document.getElementById('number1').value;
    document.getElementById('result').innerHTML = a;
}

function tatol() {
    var a;
    var b;


    a = document.getElementById('number2').value;
    b = document.getElementById('number3').value;

    document.getElementById('result1').innerHTML = parseInt(a) + parseInt(b);
}