let Navbar=()=>{
    return `
    <div id="navbar">
        <div id="lhs">
            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                alt="" />
            <h4>TV</h4>
            <h4>Movies</h4>
            <h4>Sports</h4>
            <h4>Disney+</h4>
        </div>
        <div id="rhs">
            <a href="search.html"><button>Search Movies</button></a>
        </div>
        <div id=log>
             <a href="">LOGIN</a>
        </div>
    </div>
    `
}
export {Navbar}

let Footer=()=>{
    return `
    <div id="footer">
    <div class="anchar">
        <a href="">About Disney+ Hotstar</a>
        <a href="">Terms Of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">FAQ</a>
        <a href="">Feedback</a>
        <a href="">Careers</a>
    </div>
    <div id="lastf">
        <div id="para">
            <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos
                are
                service marks of, and <br> all related programming visuals and elements are the property of, Home
                Box
                Office,
                Inc. All rights reserved.</p>
        </div>
        <div id="contact">
            <p>Connect with us</p><br>
            <a class="fb" href="https://www.facebook.com/DisneyPlusHotstar" target="_blank"
                rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/889/889100.png" alt=""> &nbsp;</a>
            <a class="tw" href="https://twitter.com/DisneyPlusHS" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU"
                    alt=""> &nbsp;</a>
        </div>
        <div id="app">
            <p>Disney+ Hotstar App</p>
            <a class="playstore" href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
                target="_blank" rel="noopener noreferrer">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="">
                &nbsp;</a>
            <a class="appstore" href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8" target="_blank"
                rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Download_on_the_App_Store_Badge_IT_RGB_blk.svg/1280px-Download_on_the_App_Store_Badge_IT_RGB_blk.svg.png"
                    alt=""> &nbsp;</a>
        </div>
    </div>

</div>
    `
}
export {Footer}