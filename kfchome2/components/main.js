function navbar(){
    return `<div id="menuSection">
    <div><img src="./images/kfcLogo.492728c6.svg" id="ram"></div>
    <div><a href="/kfcclonewebsite/menukfc/menu.html">Menu</a></div>
    <div><a href="/kfcclonewebsite/my kfc project/kfc2/deals.html">Deals</a></div>
</div>
<div id="accountSection">
    <div><a><img src="./images/Account_Icon.svg"></a></div>
    <div><a href="details.html">Account</a></div>
    <div class="vl"></div>
    <div><P id="rupee">&#x20b9; 0</P></div>
    <div id="bucket"><p id="noOfItem">0</p></div>
</div>`
}

function footer()
{
    return `<div id="offersanddeals">
    <div><h2 style="font-size:xx-large;">OFFERS & DEALS</h2></div>
    <div><a href="#">View All Deals &#8594</a></div>
</div>
<div id="allsection">
    <div><a href="#"><img src="./images/KFC_Logo.svg"></a></div>
    <div>
        <ul>
            <li>KFC Food</li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Order Lookup</a></li>
            <li><a href="#">Gift Card</a></li>
        </ul>
    </div>
    <div>
        <ul>
            <li>Support</li>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">KFC Feedback</a></li>
        </ul>
    </div>
    <div>
        <ul>
            <li>Legal</li>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Caution Notice</a></li>
        </ul>
    </div>
    <div>
        <ul>
            <li>KFC India</li>
            <li><a href="#">About KFC</a></li>
            <li><a href="#">KFC Care</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Our Golden Past</a></li>
        </ul>
    </div>
    <div><i id="location" class="fa-solid fa-location-dot"></i>
        <a>Find a KFC</a>
    </div>
    <div><img src="./images/google_play.svg"></div>
    <div><a><img src="./images/apple.svg"></a></div>
</div>
<div id="end">
    <div><h5>Copyright © KFC Corporation 2021 All Rights Reserved</h5></div>
    <div id="social">
        <a><img src="./images/Social_Insta_White.svg"></a>
        <a><img src="./images/Social_Facebook_White.svg"></a>
        <a><img src="./images/Social_Twitter_White.svg"></a>
    </div>
</div>`
}

export {navbar,footer};