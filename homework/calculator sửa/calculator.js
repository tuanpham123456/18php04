var a;
a = 5;
a = a + 4;
//document.write(a);
//
//document.write("<br>");
var b;
b = 5;
b += 4;
//document.write(b);
//
//document.write("<br>");
var c;
c = 5;
c *= 4; // c = c * 4;
//document.write(c);
//
var x;
x = eval('9/3');

//document.write(x);
///
// Ham de noi gia tri cua gia tri so vao ket qua
function cal(number){
	// lay noi dung ket qua
	var result = document.getElementById('result').textContent;
	result += number;
	// noi noi dung cua gia tri vua chon vao ket qua
	document.getElementById('result').innerHTML = result;
}
// tinh ket qua cua toan bo phep tinh va gan vao ket qua
function resultCal(){
	// lay noi dung cua ket qua
	var result = document.getElementById('result').textContent;
	// tinh phep toan cua noi dung ket qua va gan vao ket qua
	document.getElementById('result').innerHTML = eval(result);
}
// reset lai toan bo phep tinh
function resetCal(){
	// Gan noi dung ket qua bang ''
	document.getElementById('result').innerHTML = '';
}
// xoa 1 ky tu cuoi cung trong ket qua
function backCal(){
	var result = document.getElementById('result').textContent;
	var resultLeng = result.length;
	result = result.substring(0, resultLeng-1);
	// noi noi dung cua gia tri vua chon vao ket qua
	document.getElementById('result').innerHTML = result;
}
