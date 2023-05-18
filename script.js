function confpw() 
{
    let x=document.forms["signup"]["password"].value;
    let y=document.forms["signup"]["confpassword"].value;
    if((x!=y)&&(x!="")&&(y!="")) 
    {
        console.log("object");
        confpassword.setCustomValidity("Please make sure both passwords are matching.");
        confpassword.reportValidity();
        return false;
    }
    else if(y=="")
    {
        console.log("object");
        confpassword.setCustomValidity("Please confirm password.");
        confpassword.reportValidity();
        return false;
    }
}

function checkpw()
{
    let x=document.forms["signup"]["password"].value;
    let y=document.forms["signup"]["confpassword"].value;
    if((x==y)&&(x!="")&&(y!="")) 
    {
        document.getElementById("password").style.borderColor="#51C998";
        document.getElementById("confpassword").style.borderColor="#51C998";   
    }
    if((x!=y)) 
    {
        document.getElementById("password").style.borderColor="red";
        document.getElementById("confpassword").style.borderColor="red";   
    }
}

function hyper1hover() 
{
    document.getElementById("hyper").className="hyper2";
    document.getElementById("hyper").style="transform: scale(2);";
}

function hyper2hover() 
{
    document.getElementById("hyper").className="hyper1";
}

function validatePassword()
{
    if(!password.value.match(""))
    {
        console.log("object");
        password.setCustomValidity("btuh");
        password.reportValidity();
    }
    else if((!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)))
    {
        console.log("object");
        password.setCustomValidity("Password must contain at least one number, one uppercase letter, one special character, and be between 8 and 15 characters long");
        password.reportValidity();
    }
}

document.getElementById("hyper").addEventListener("mouseover",()=>hyper1hover());
document.getElementById("hyper").addEventListener("mouseout",()=>hyper2hover());
document.getElementById("password").addEventListener("click",()=>checkpw());
document.getElementById("confpassword").addEventListener("click",()=>checkpw());
document.getElementById("password").addEventListener("keyup",()=>checkpw());
document.getElementById("confpassword").addEventListener("keyup",()=>checkpw());
document.getElementById("signUp").onclick = function(){return confpw()};
document.getElementById("signUp").addEventListener("click",()=>validatePassword());