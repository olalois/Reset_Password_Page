function validatePassword()  {
    let newPassword =
    document.querySelector(".newPassword").value;
    let confirmPassword =
    document.querySelector(".confirmPassword").value;

        if (newPassword !== confirmPassword)
        {
            alert("passwords do not match");
            return false;
        }
        return true;
}