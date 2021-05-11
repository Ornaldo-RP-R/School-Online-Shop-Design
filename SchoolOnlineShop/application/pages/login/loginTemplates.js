const getInputTemplate=(name,type)=>{
    return `<div class="loginWrapper__input">
                    <span>${name}</span>
                   <span class="input simple">
                        <input name="${name}" type="${type}"/>
                    </span>
            </div>`
}

const getButtonTemplate=(buttonName)=>{
    return `<div class="loginWrapper__button">
                <button class="btn">${buttonName}</button>
            </div>`
}

const LoginFormTemplate={
    emailInput:getInputTemplate("Email","text"),
    passwordInput:getInputTemplate("Password","password"),
    submitButton: getButtonTemplate("Login")
}

const SignUpFormTemplate={
    nameInput:getInputTemplate("Name","text"),
     emailInput:getInputTemplate("Email","text"),
    passwordInput:getInputTemplate("Password","password"),
     confirmPasswordInput:getInputTemplate("Confirm Password","password"),
    submitButton: getButtonTemplate("Sign Up")
}