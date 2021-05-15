const redirectToShopBySearch=()=>{
    const search=document.getElementById("header-main-search");
    window.location.href=addUrlParams(`${pageLocation}/shopItems/shopItems.html`,[`search=${search?search.value:null}`])
}
const loadHeader=async ()=>{
    const valueOfInput=new URLSearchParams(windowUrl.search).get("search");
    await $('header').append(`<a class="logo" href="${pageLocation}/homepage/homepage.html"><img src="${imageLocation}/logo.png"/></a>`).append(
        `<div>
                <div>
                    <span class="input">
                        <input id="header-main-search"  type="text" value="${valueOfInput || ""}" />
                        <img onclick="redirectToShopBySearch()" src="${imageLocation}/search.svg"/>
                    </span>
                    <span class="icons">
                        <a><i class="fab fa-facebook-f"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                    </span>
                </div>
                <div class="navbar" ></div>
            </div>`
    )
    if(!window.location.href.includes('login/login.html')){
        await AddLoginButton();
        await fillNav('.container .navbar',categoryList);
    }
}

const AddLoginButton=()=>{
    const notLoggedButton=$(`<div class="dropdown tooltip"><i class="fas fa-sign-in-alt"></i><span class="content">Login or Register</span></div>`)
const loggedButton=`<div class="dropdown">
                            <span class="dropdown__button"><i class="far fa-user"></i></span>
                            <span class="content">LOGIN</span>
                        </div>`

notLoggedButton.click(()=>{
  window.location.replace(`${pageLocation}/login/login.html`);
})
$(".container header .icons").prepend(isLoggedIn? loggedButton:notLoggedButton);
}