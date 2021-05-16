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
                    <span class="icons"></span>
                </div>
                <div class="navbar" ></div>
            </div>`
    )
    if(!window.location.href.includes('login/login.html')){
        await AddLoginButton();
        await fillNav('.container .navbar',categoryList);
        await AddCartIcon();
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

const AddCartIcon=()=>{
    let totalItems=0;
    let totalPrice=0;
    itemsInCart.forEach((item)=>{
        totalItems+=item.quantity
        totalPrice+=(item.quantity*item.price)
    })
    $(".container header .icons .Shop").remove();
    const cart=$(`<div class="dropdown Shop">
                    <span class="dropdown__button"><div class="shopCart">
                        <div>
                            <i class="fal fa-shopping-cart"></i> 
                            <div class="shopCart__quantity">
                                ${totalItems >= 1 ? `<span>${totalItems}</span>`:""}
                            </div>
                        </div>
                    </div>
                    </span>
                    <span class="content">
                        ${itemsInCart.map((item)=>{
                            return `<div class="cart_item">
                                        <img src="${imageLocation}/${item.imgSrc}"/>
                                        <span><b>${item.quantity}</b> x <b>${item.price} €</b></span>
                                    </div>`
                        }).join("")}
                        ${totalPrice ?`<div class="Total">
                                        <span>Price </span>
                                        <span>${totalPrice} €</span>
                                     </div>`: ""}
                    <button>GO TO CHECKOUT</button>
                    </span>
                </div>`)
    $(".container header .icons").prepend(cart);
}