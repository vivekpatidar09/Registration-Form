function validation(){
    if(document.formfill.Username.value == ""){
    document.getElementById("result").innerHTML="Enter Username"
    return false;}

    else if(document.formfill.Username.value.length <6){
        document.getElementById("result").innerHTML="Atleast six letter"
        return false;}

    else if(document.formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password"
        return false;
    }

    else if(document.formfill.cPassword.value!==document.formfill.Password.value){
        document.getElementById("result").innerHTML="Password dosen't match"
        return false;
    }

    else if(document.formfill.Password.value == document.formfill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}

var popup = document.getElementById('popup');