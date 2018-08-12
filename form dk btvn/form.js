function validate() {
    var checkError = true;
    name = document.getElementById("name").value;
    if (name == "" || name.Length > 20) {
        document.getElementById("erroName").innerHTML = "<br/> The name is not empty and not 20 characters ";
        document.getElementById("name").style.borderColor = "#FA5858";
        document.getElementById("erroName").style.color = "red";
        checkError = (checkError && false);
    }
    else {
        document.getElementById("erroName").innerHTML = "";
        document.getElementById("name").style.borderColor = "#81F7BE";
    }
    // -------------------------------------------------------------
    email = document.getElementById("email").value;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!re.test(email)) {
        document.getElementById("erroEmail").innerHTML = "<br/> Please enter email.Example someone@gmail.com";
        document.getElementById("email").style.borderColor = "#FA5858";
        document.getElementById("erroEmail").style.color = "red";
        checkError = (checkError && false);

    }
    else {
        document.getElementById("erroEmail").innerHTML = "";
        document.getElementById("email").style.borderColor = "#81F7BE";
    }
    // -------------------------------------------------------------
    // address =document.getElementById("address").value;
    // var cAddress;
    // cAddress =(address == "") ? (document.getElementById("erroAddress").innerHTML ="") : (document.getElementById("erroAddress").innerHTML ="Please Enter Address")
    address = document.getElementById("address").value;
    if (address == "") {
        document.getElementById("erroAddress").innerHTML = "Please Enter Address";
        document.getElementById("erroAddress").style.color = "red";
        document.getElementById("address").style.borderColor = "#FA5858";
        checkError = (checkError && false);

    }
    else {
        document.getElementById("erroAddress").innerHTML = "";
        document.getElementById("address").style.borderColor = "#81F7BE";
    }

    // -------------------------------------------------------------
    phone = document.getElementById("phone").value;
    var re1 = /^(0[0-9]{9,10})+$/;
    if (!re1.test(phone)) {
        document.getElementById("errorPhone").innerHTML = "<br/>Please correct your phone format.Example 0xxxxxxxxxx";
        document.getElementById("phone").style.borderColor = "#FA5858";
        document.getElementById("errorPhone").style.color = "red";
        checkError = (checkError && false);

    }
    else {
        document.getElementById("errorPhone").innerHTML = "";
        document.getElementById("phone").style.borderColor = "#81F7BE";
    }
    // ------------------------------------------------------------
    password = document.getElementById("password").value;
    repassword = document.getElementById("repassword").value;
    if ((password == "" && repassword == "")) {
        document.getElementById("erroPass").innerHTML = "Please Enter Pass";
        document.getElementById("erroPass").style.color = "red";
        document.getElementById("password").style.borderColor = "#FA5858";
        document.getElementById("erroRepass").innerHTML = "Please re-enter password";
        document.getElementById("erroRepass").style.color = "red";
        document.getElementById("repassword").style.borderColor = "#FA5858";
        checkError = (checkError && false);

    } else if (password != repassword) {
        document.getElementById("erroPass").innerHTML = "Password and Repassword has not match";
        document.getElementById("erroRepass").innerHTML = "Password and Repassword has not match";
        checkError = (checkError && false);


    } else if (password.Length < 8 && repassword.Length < 8) {
        document.getElementById("erroPass1").innerHTML = "Password must contain at least 8 characters";
        document.getElementById("erroRepass1").innerHTML = "RePassword must contain at least 8 characters";
        checkError = (checkError && false);

    }
    else {
        document.getElementById("erroPass").innerHTML = "";
        document.getElementById("erroRepass").innerHTML = "";
        document.getElementById("password").style.borderColor = "#81F7BE";
        document.getElementById("repassword").style.borderColor = "#81F7BE";
    }
    // var gender = document.forms[0];
    // var txt = "";
    // var i;
    // for (i < 0; gender.length; i++){
    //     if (gender[i].checked)
    //     txt += gender[i].value + "";
    // }
    // document.getElementById("errorGender").innerHTML="error" + txt;
    if (checkError == true) {
        document.getElementById("check").style.display="none";
        document.getElementById("complete").style.display ="block";
        

    }
}   