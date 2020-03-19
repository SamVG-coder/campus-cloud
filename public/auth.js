function validate(checker){
    checker=parseInt(checker);
    switch(checker){
        case 1 : 
        var fname=document.getElementById("fname").value;
        RegExp1= /^[a-zA-Z]{1,20}$/;
        if(!RegExp1.test(fname)){
            document.getElementById("error").innerHTML="Error : Invalid First name.";
            document.getElementById("error").style.visibility="visible";
        return false;
        }
        else
            document.getElementById("error").style.visibility="hidden";	
        break;
    case 2 : 
        var lname=document.getElementById("lname").value;
        RegExp2= /^[a-zA-Z]{1,30}$/;
        if(!RegExp2.test(lname)){
            document.getElementById("error").innerHTML="Error : Invalid Last name.";
            document.getElementById("error").style.visibility="visible";
            return false;
        }
        else
            document.getElementById("error").style.visibility="hidden";	
        break;
    case 3 :
        var usn=document.getElementById("usn").value;
        RegExp3=/2SD[1-2][4-9]CS[0-1][0-9][0-9]$/;
        if(!RegExp3.test(usn)){
            document.getElementById("error").innerHTML="Error : Invalid USN. (Use Format : 2SD**CS***";
            document.getElementById("error").style.visibility="visible";
            return false;
    }
    else
    {
        document.getElementById("error").style.visibility="hidden";	
    } 
        break;
    case 4:
        var mobile=document.getElementById("phone").value;
        RegExp4=/[6-9][0-9]{9}$/;
        if(!RegExp4.test(mobile)){
            document.getElementById("error").innerHTML="Error : Invalid Phone number.";
            document.getElementById("error").style.visibility="visible";
            return false;
        }else
        {
            document.getElementById("error").style.visibility="hidden";
        }
        break;
    }
    return true;
}
function validateAll(){
    for (let i = 1; i <=4; i++) {
        var result=validate(i);
        if(result==false){
            alert("Please fill Valid Deatails");
            return false;
        }
    }
    return true;
}
function validatePass(){
    if(document.getElementById("new_pass").value!=document.getElementById("confirm_pass").value){
        document.getElementById("mismatch").style.visibility="visible";
        return false;
    }else{
        document.getElementById("mismatch").style.visibility="hidden";
        return true;
    }
}