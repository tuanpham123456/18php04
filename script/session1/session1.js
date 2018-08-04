var a = 5;
var b = 6;
var tatol = a + b;
document.write("2 tổng a+b =" + tatol + "<br>");
document.write("hiệu của a-b =");
document.write(a - b + "<br>");
document.write("a * b =" + (a * b) + "<br>");
document.write("a / b =" + (a / b) + "<br>");
document.write("a % b =" + (a % b) + "<br>");
document.getElementById('session1').innerHTML = 'hello';

var phone = "0932505372";

var userName = "tuan";
var namSinh = 1998;
if (namSinh % 2 == 0) {
    document.write("bạn sinh năm chẵn");
}
else {
    document.write("bạn sinh năm lẻ");

}
document.writeln("" + "<br>");
// var test;
// test = (namSinh % 2 == 0) ? "bạn sinh năm chẵn" : "bạn sinh năm lẻ";
// document.write(test);
var i = 0;
// for (i = 0; i < 100; i++) {
//     if (i % 15 == 0) {
//         document.write("chia hết cho 15:" + "<br>");

//     } else if (i % 3 == 0) {
//         document.write("chia hết cho 3: " + i + "<br>")
//     } else if (i % 5 == 0) {
//         document.write("chia hết cho 5: " + i + "<br>")

//     }
// }

var i = 10;
// while (i > 0){
//     document.write(i);
//     i--;
// }


do {
    document.write(i + "<br>");
    i--;
}
while (i > 0)

var today = 9;
switch (today) {
    case 2: {
        document.write("t2");
        break;
    }
    case 3: {
        document.write("t2");
        break;
    }
    case 4: {
        document.write("t2");
        break;
    }
    case 5: {
        document.write("t2");
        break;
    }
    case 6: {
        document.write("t2");
        break;
    }
    case 7: {
        document.write("t2");
        break;
    }
    case 8: {
        document.write("t2");
        break;
    }
    default:
    {
        document.write("cn");
        break;
    }

}
