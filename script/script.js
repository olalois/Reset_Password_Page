// javaScript

// .....................for the alert message when both passwords are not same.......................
function validatePassword()  {
    let Password =
    document.querySelector(".newPassword").value;
    let confirm =
    document.querySelector(".confirmPassword").value;

        if (Password !== confirm)
        {
            alert("oops passwords don't match");
            return false;
        }
        return true;
    }

    //...........................to see and unsee passwords................................
    let passwordInput = document.querySelector(".newPassword");
    let showPasswordCheckbox = document.querySelector(".showPassword");
    showPasswordCheckbox.addEventListener("change", function(){
        passwordInput.type = 
        showPasswordCheckbox.checked ? "text" : "password";
    });

    let passwordInput2 = document.querySelector(".confirmPassword");
    let showPasswordCheckbox2 = document.querySelector(".showPassword2");
    showPasswordCheckbox2.addEventListener("change", function(){
        passwordInput2.type = 
        showPasswordCheckbox2.checked ? "text" : "password";
    });

    // ..................Conggratulatory Message.....................................
    function submitForm() {
        setTimeout(showingCongratulationsPopup, 1000);
    }
     function showingCongratulationsPopup(){
        document.querySelector(".overlay").style.display = "block";
     }
     function closePopup(){
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".myForm").reset();
     }