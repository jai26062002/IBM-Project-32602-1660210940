document.getElementById("detailsButton").onclick = function () {
    window.location.replace("UserDetails.html");
};

document.getElementById("submitButton").onclick = function () {
    if(document.getElementById("username").value){
        if(document.getElementById("psd").value){
            var x = document.getElementById("psd").value;
            var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            var num = /[1234567890]/;
            var cap = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
            if(x.length>8 && format.test(x) && num.test(x) && cap.test(x)){
                window.location.replace("Home.html");
                return false;
            }
            else{
                alert("Wrong Password\r\nPassword length greaster than 8 and must contains atleast:\r\n1.One Upppercase Letter\r\n2.One Number\r\n3.One Symbol");
                document.getElementById("psd").value = "";
                return false;
            }
        }
    }
    else{
        alert("Enter Username...")
    }
};