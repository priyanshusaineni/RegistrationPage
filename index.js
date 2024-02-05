var pname=$("#valid-name").hide();
var proll=$("#valid-roll").hide();
var pemail=$("#valid-email").hide();
var pnum=$("#valid-num").hide();


var uname= $("#uname");
var nameReg=/^[a-zA-Z]*$/;

var uid=$("#uid");
var regId=/^[\w]{10}$/;

var email=$("#email");
var regEmail=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;

var unum=$("#unum");
var regPhone=/^[\d]{10}$/;

$("button").on("click",function(){

    if(uname.val().match(nameReg))
    {
        pname.hide();
        if(uid.val().match(regId))
        {
            proll.hide();
            if(email.val().match(regEmail))
            {
                pemail.hide();
                if(unum.val().match(regPhone))
                {
                    pnum.hide();
                    alert("Response Submitted");
                }
                else
                {
                    pnum.show();
                }
            }
            else
            {
                pemail.show();
            }
        }
        else
        {
            proll.show();
        } 
    }
    else
    {
        pname.show();
    }
});