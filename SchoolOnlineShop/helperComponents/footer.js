const loadFooter=()=>{
    $('footer')
    .append(`<div class="footer__categories">
                <div>
                    <h4>LOCATION</h4>
                    <span>Tirana , Albania</span>
                </div>
                <div>
                    <h4>Contact</h4>
                    <span>
                        Tel number : 0672233112
                    </span>
                </div>
                <div>
                    <a class="about" href="${pageLocation}/aboutUs/aboutUs.html"><h4>ABOUT</h4></a>
                    <span>This is shopping web page</span>
                </div>
            </div>`)
    .append(`<div class="footer__copyright">Copyright at Online Shop © 2021</div>`)
}