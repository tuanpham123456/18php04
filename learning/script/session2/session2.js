var myName = "tuan";

function functionName() {
    document.writeln('hello funtion');
}
//goi ham
functionName();
// -------------------------------------
function sumNumber(a, b) {
    document.write(a + b);
}
sumNumber(6, 7);
document.write("<br>");
function sumNumber2(a = 5, b = 4) {
    return a + b;
}
document.write("<br>");
document.write(sumNumber2(6, 7));

// if(sumNumber2(6,4) >12){
//     document.write("tong lon hon 12");
// }

document.write("<br>");

if (sumNumber2(6, 8) > 12) {
    document.write("tong lon hon 12");
}
// -------------------------------------
document.write("<br>");
var b = 5;
if (b > 5) {
    document.write("b lon hon 5");
}
else {
    document.write('b nho hon hoac bang 5');
}
document.write("<br>");
var b = 7;
var c;
c = (b > 5) ? 'b nho hon 5' : 'b nho hon hoac bang 5';
document.write(c);
// -------------------------------------
document.write("<br>");
for (var i = 0; i < 3; i++) {
    document.write(i + "<br>");
}
// -------------------------------------
document.write("<br>");
var j = 3;
var c;
c = ++j + 5;
document.write(c);
// -------------------------------------
document.write("<br>");
var k = 3;
var d;
d = k++ + 5;
document.write(d);
// -------------------------------------
document.write("<br>");
