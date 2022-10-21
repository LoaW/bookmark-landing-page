const formError = document.querySelector('.contactUs__form__email__textError')
let emailCheck;



function validation (email) {
    let formValue = document.getElementById('email').value;
    
    const regex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email);
    console.log(regex, email)

    if (validation(formValue)) {
        console.log("email valide")
    }else{
        console.log("email non valide")
    }
}

