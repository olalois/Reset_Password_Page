// javaScript

// .....................for the alert message when both passwords are not same.......................
function validatePassword()  {
    let Password =
    document.querySelector(".newPassword").value;
    let confirm =
    document.querySelector(".confirmPassword").value;

        if (Password !== confirm)
        //.........This comes as an alert, shows at the top of the screen,thats why i didnot use it...........
        // {
        //     alert("oops passwords don't match");
        //     return false;
        // }
        // return true;
        //............ an extension (sweetalert2 library)............... 
        Swal.fire({
            title: 'Error!',
            text: 'passwords do not match ',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
    }

    //...........................to see and unsee passwords................................

    // let passwordInput = document.querySelector(".newPassword");
    // let showPasswordCheckbox = document.querySelector(".showPassword");
    // showPasswordCheckbox.addEventListener("change", function(){
    //     passwordInput.type = 
    //     showPasswordCheckbox.checked ? "text" : "password";
    // });

    // let passwordInput2 = document.querySelector(".confirmPassword");
    // let showPasswordCheckbox2 = document.querySelector(".showPassword2");
    // showPasswordCheckbox2.addEventListener("change", function(){
    //     passwordInput2.type = 
    //     showPasswordCheckbox2.checked ? "text" : "password";
    // });

    // ..................Conggratulatory Message.....................................
    function submitForm() {
        let pass = document.querySelector(".newPassword").value;
        let corn = document.querySelector(".confirmPassword").value;
        if (pass == corn){
            function showingCongratulationsPopup(){
                document.querySelector(".overlay").style.display = "block";
             }
        }
        setTimeout(showingCongratulationsPopup, 1000);
    }
     function closePopup(){
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".myForm").reset();
     }

    //................ to see and unsee password ............................
    
    // for new password
    function togglePasswordVisibility() {
        let passwordInput = document.querySelector(".newPassword");
        let eyeIcon = document.querySelector(".toggle-password");
    
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          eyeIcon.classList.remove("fa-eye");
          eyeIcon.classList.add("fa-eye-slash");
        } else {
          passwordInput.type = "password";
          eyeIcon.classList.remove("fa-eye-slash");
          eyeIcon.classList.add("fa-eye");
        }
      }

    //   for confirm password
      function togglePasswordVisibility2() {
        let passwordInput2 = document.querySelector(".confirmPassword");
        let eyeIcon = document.querySelector(".toggle-password2");
    
        if (passwordInput2.type === "password") {
          passwordInput2.type = "text";
          eyeIcon.classList.remove("fa-eye");
          eyeIcon.classList.add("fa-eye-slash");
        } else {
          passwordInput2.type = "password";
          eyeIcon.classList.remove("fa-eye-slash");
          eyeIcon.classList.add("fa-eye");
        }
      }