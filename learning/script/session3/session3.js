function tatol() {
    var a, b, c, d;
    a = document.getElementById('lcb').value;
    b = document.getElementById('hsl').value;
    c = document.getElementById('pc').value;
    var result;     
    document.getElementById('result').innerHTML = d;

    if (b > 5) {
        result = parseInt(a) * parseInt(b);
    } else {
        result = parseInt(a) * parseInt(b) + parseInt(c);
       
    }
    if (result <5000000){
        document.getElementById('warning').style.color = 'red';
        document.getElementById('warning').innerHTML ='Bạn cần cố gắng hơn'
    }else if (result> 3000000000){
        document.getElementById('warning').style.color = 'blue';
        document.getElementById('warning').innerHTML ='Bạn quá giàu'

    }
    else{
        document.getElementById('warning').innerHTML = " ";
    }
    document.getElementById('result').innerHTML= result;
    

    

    

}
