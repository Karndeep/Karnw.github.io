/**
 * Created by karn on 2016-08-23.
 */

function validateFormOnSubmit()
{
    var errorString = "";
    var errorCounter = 0;

    var name = document.getElementById('txtName').value;
    var email = document.getElementById('txtEmail').value;
    var company = document.getElementById('txtCompany').value;
    var message = document.getElementById('txtMessage').value;


    document.getElementById("errorName").style.color = "#ff0000";
    document.getElementById("errorEmail").style.color = "#ff0000";
    document.getElementById("errorMessage").style.color = "#ff0000";

    if(name == "" || name.length < 2)
    {
        errorString += "Please Enter A Valid Name" + "\n";
        document.getElementById("lblName").style.color = "#ff0000";
        document.getElementById("errorName").innerHTML= "Please enter name";

        if(errorCounter == 0)
        {
            errorCounter++;
            document.getElementById("lblName").focus();
        }

    }
    else
    {
        document.getElementById("errorName").innerHTML= "";
        document.getElementById("lblName").style.color = "#777777";
    }
    if(email == "" || !validEmail(email))
    {
        errorString += "Please Enter A Valid Email" + "\n";
        document.getElementById("lblEmail").style.color = "#ff0000";
        document.getElementById("errorEmail").innerHTML= "Please enter a email (example@mail.com)";

        if(errorCounter == 0)
        {
            errorCounter++;
            document.getElementById("txtEmail").focus();
        }

    }
    else
    {
        document.getElementById("errorEmail").innerHTML="";
        document.getElementById("lblEmail").style.color = "#777777";
    }
    if(message == "" || message.length < 5)
    {
        errorString += "Please Enter A Valid Message" + "\n";
        document.getElementById("lblMessage").style.color = "#ff0000";
        document.getElementById("errorMessage").innerHTML= "Please enter a Message";

        if(errorCounter == 0)
        {
            document.getElementById("txtMessage").focus();
        }

    }
    else
    {
        document.getElementById("errorMessage").innerHTML="";
        document.getElementById("lblMessage").style.color = "#777777";
    }

    if(errorString == "")
    {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../PHP/mail.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("txtName=" + document.getElementById('txtName').value + "&txtEmail=" + document.getElementById('txtEmail').value + "&txtCompany=" + document.getElementById('txtCompany').value + "&txtMessage=" + document.getElementById('txtMessage').value);
        document.getElementById("contactForm").submit();
        document.getElementById("sentMessage").innerHTML="Message Sent!";
        document.getElementById("sentMessage").style.color = "#00ff00";
        return false;
    }
    else
    {
        // alert(errorString);
        return false;
    }
}

function validEmail(Vemail)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(Vemail);
}


jQuery(document).ready(function() {
    
    // backstretch jquery slider
    $('#home').backstretch([
        "img/backgrounds/background slide 1.jpg"
        , "img/backgrounds/background slide 2.jpg"
        , "img/backgrounds/background slide 3.jpg"
    ], {duration: 3000, fade: 750});

    // Typing function
    $("#typed").typed({
        strings: ["Web Development", "Networking", "Design", "Software Development"],
        typeSpeed: 100,
        startDelay: 100,
        backSpeed: 100,
        backDelay: 500,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: 'html'
    });
    
    // Animation function
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){
                window.location.hash = hash;
            });
        }
    });

});
