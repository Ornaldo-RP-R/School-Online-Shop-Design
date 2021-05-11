const loadHeader=()=>{
    $('header').append(`<a class="logo" href="${pageLocation}/homepage/homepage.html"><img src="${imageLocation}/logo.png"/></a>`).append(
        `<div>
                <div>
                    <span class="input">
                        <input type="text" />
                        <img src="${imageLocation}/search.svg"/>
                    </span>
                    <span class="icons">
                        <a><i class="fab fa-facebook-f"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                    </span>
                </div>
                <div class="navbar" ></div>
            </div>`
    )
}