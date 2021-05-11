const notLoggedButton=$(`<div class="dropdown tooltip"><i class="fas fa-sign-in-alt"></i><span class="content">Login or Register</span></div>`)
const loggedButton=`<div class="dropdown">
                            <span class="dropdown__button"><i class="far fa-user"></i></span>
                            <span class="content">LOGIN</span>
                        </div>`

notLoggedButton.click(()=>{
  window.location.replace(`${pageLocation}/login/login.html`);
})
$(".container header .icons").prepend(isLoggedIn? loggedButton:notLoggedButton);