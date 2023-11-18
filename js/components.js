function addHeader() {
    document.write(`
    <header>
    <div class="header-web">
        <h2 class="logo">Furnishity.</h2>
        <div class="navigation">
            <ul class="navigation-list">
                <li id="home" onclick="CheckSectionDisplay(0)"><a href="#" >Home</a></li>
                <li id="products" onclick="CheckSectionDisplay(1)"><a href="#">Products</a></li>
                <li id="reviews" onclick="CheckSectionDisplay(2)"><a href="#" >Reviews</a></li>
                <li id="blog" onclick="CheckSectionDisplay()"><a href="#" >Blog</a></li>
                <li id="about us" onclick="CheckSectionDisplay(3)"><a href="#">About us</a></li>
            </ul>
        </div>
        <div class="button-search">
            <i class="button ti-search"></i>
        </div>
        <div class="button-cart">
            <i class="button ti-shopping-cart" id = "cart" onclick="CheckSectionDisplay(4)"></i>
        </div>
    </div>
</header>
    `)
}
function addFooter() {
    document.write(
        `
        <footer>
        <div class="footer-web">
            <div class="footer-row">
                <div class="footer-part a">
                    <h2>Furnishity</h2>
                    <p>We sell over 3000+ branded products since 2018</p>
                    <ul class="footer-a">
                        <li>
                            <a href="">
                                <i class="ti-mobile"></i>
                                0987654321
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-location-pin"></i>
                                University of Information and Technology
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-world"></i>
                                www.furnishity.com
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="footer-part b">
                    <h2>Menu</h2>
                    <ul class="footer-b">
                        <li>
                            <a href="">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="">
                                About us
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="footer-part c">
                    <h2>Stay Connected</h2>
                    <ul class="footer-a">
                        <li>
                            <a href="">
                                <i class="ti-facebook"></i>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-instagram"></i>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-twitter-alt"></i>
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="footer-part d">
                    <h2>Stay Updated</h2>
                    <ul>
                        <li>
                            <a href="">Enter your email</a>
                        </li>
                        <i class="ti-check"></i>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    `
    )
}