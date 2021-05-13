const loginButton=$('#loginWrapper__controller-login')
const signUpButton=$('#loginWrapper__controller-sign')

const loadSignInForm=()=>{
    $('.loginWrapper__form').empty();
    $('.loginWrapper__form')
    .append(`<div class="input">
                ${SignUpFormTemplate.emailInput}
                ${SignUpFormTemplate.passwordInput}
            </div>`)
    .append(LoginFormTemplate.submitButton)
    .append(`<span class="input__forget-password">Forget Password ? </span>`)
    signUpButton.removeClass("active")
    loginButton.addClass("active")
}
const loadSignUpForm=()=>{
    $('.loginWrapper__form').empty();
    $('.loginWrapper__form')
    .append(`<div class="input">
                ${SignUpFormTemplate.nameInput}
                ${SignUpFormTemplate.emailInput}
                ${SignUpFormTemplate.passwordInput}
                ${SignUpFormTemplate.confirmPasswordInput}
            </div>`)
    .append(SignUpFormTemplate.submitButton)
    loginButton.removeClass("active")
    signUpButton.addClass("active")
}

const loadLogin=async()=>{
    await loadHeader();
    await loadFooter();
    await loadSignInForm();
}

loadLogin();

loginButton.click(loadSignInForm)

signUpButton.click(loadSignUpForm)