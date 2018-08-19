var x = "hello php 04";
document.write(x.length);

//thay thế chuỗi ký tự trong chuỗi
document.write("<br>");
var newX;
newX = x.replace('class', 'new');
document.write("<br>");
document.write(newX);
document.write("<br>");
var posX;
posX = x.indexOf('o');
document.write(posX);
document.write("<br>");
var posXlast;
posXlast = x.lastIndexOf('e');
document.write(posXlast);
document.write("<br>");

var newXslice = x.slice(3, 8);
document.write(newXslice);
document.write("<br>");

var newXslice = x.substring(3, 8);
document.write(newXslice);

document.write("<br>");

var newXUppcase = x.toUpperCase();
document.write(newXUppcase)