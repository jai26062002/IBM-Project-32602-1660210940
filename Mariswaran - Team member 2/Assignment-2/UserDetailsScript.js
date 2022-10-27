document.getElementById("loginButton").onclick = function () {
    window.location.replace("Login.html");
};

document.getElementById("submitButton").onclick = function () {
    if(document.getElementById("psd").value){
        var x = document.getElementById("psd").value;
        var y = document.getElementById("cpsd").value;
        var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var num = /[1234567890]/;
        var cap = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
        if(x.length>8 && format.test(x) && num.test(x) && cap.test(x)){
            if(y === x){
                window.location.replace("Home.html");
                return false;
            }
            else{
                alert("Re-enter Password Correctly");
                document.getElementById("cpsd").value = "";
                return false;
            }
        }
        else{
            alert("Wrong Password\r\nPassword length greaster than 8 and must contains atleast:\r\n1.One Upppercase Letter\r\n2.One Number\r\n3.One Symbol");
            document.getElementById("psd").value = "";
            document.getElementById("cpsd").value = "";
            return false;
        }
    }
};