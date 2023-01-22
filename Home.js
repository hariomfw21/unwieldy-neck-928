function openDropdownM() {
    document.getElementById("dropdown").style.width = "95%";
    document.getElementById("dropdown").innerHTML = `
    <div id="dropdown-row1">
    <div>
           <ul>
                <li>
                    <a href="" style="color: rgb(253, 247, 247)"><b>Smartphones</b></a>
                </li>
                <br />
                <li><a href="" class="li-color">Top selling Smartwatches</a></li>
                <li><a href="" class="li-color">Apple Price Drops</a></li>
                <li><a href="" class="li-color">Accessories</a></li>
                <li><a href="" class="li-color">Tablet Accessories</a></li>
                <li><a href="" class="li-color">Mobile Accessories</a></li>
                <li><a href="" class="li-color">Mobile Grips </a></li>
                <li><a href="" class="li-color">Car Mobile Holders </a></li>
                <li><a href="" class="li-color">Memory Card </a></li>
                <li><a href="" class="li-color">Cables & Cords </a></li>
                <li><a href="" class="li-color">Chargers & Cords</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <a href="" style="color: rgb(248, 242, 242)"><b>Headphones & Headsets</b></a>
                </li>
                <br />
                <li><a href="" class="li-color">Tablets & ereaders</a></li>
                <li><a href="" class="li-color">Every day use tablet</a></li>
                <li><a href="" class="li-color">premium Tablets</a></li>
                <li><a href="" class="li-color">Power Banks</a></li>
            </ul>
        </div>
        </div>
    `
}
function openDropdownT(){
    document.getElementById("dropdown").style.width = "95%";
    document.getElementById("dropdown").innerHTML = `
    <div id="dropdown-row1">
    <div>
            <ul>
                <li><a href="" style="color: rgb(248, 242, 242);"><b>Televisions</b></a></li>
                <br>
                <li><a href="" class="li-color">Smart TVs</a></li>
                <li><a href="" class="li-color">32 Inch TVs</a></li>
                <li><a href="" class="li-color">43 Inch TVs</a></li>
                <li><a href="" class="li-color">55 Inch TVs</a></li>
                <li><a href="" class="li-color">Android TVs</a></li>

            </ul>
        </div>
        <div>
            <ul>
                <li><a href="" style="color: rgb(248, 242, 242)"><b>Gaming</b></a></li>
                <br>
                <li><a href="" class="li-color">Gaming Consoles</a></li>
                <li><a href="" class="li-color">Router</a></li>
                <li><a href="" class="li-color">Projectors</a></li>
                <li><a href="" class="li-color">Projectors-on wall</a></li>
                <li><a href="" class="li-color">Streaming Devices</a></li>
            </ul>
        </div>
        </div>
    `
}

function openDropdownA(){
    document.getElementById("dropdown").style.width = "95%";
    document.getElementById("dropdown").innerHTML=`
    <div id="dropdown-row1">
        <div>
            <ul>
                <li><a href="" style="color: rgb(248, 242, 242);"><b>Headphones & Headsets</b></a>
                </li>
                <li><a href="" class="li-color">True Wireless</a></li>
                <li><a href="" class="li-color">Bluetooth </a></li>
                <li><a href="" class="li-color">Wired Earphones</a></li>
                <li><a href="" class="li-color">On Ear Headphones</a></li>
                <li><a href="" class="li-color">Noise Cancelling Headphones</a></li>

            </ul>
        </div>
        <div>
            <ul>
                <li><a href="" class="li-color" style="color: rgb(248, 242, 242);"><b>Bluetooth & Wifi
                            Speakers</b></a>
                </li>


            </ul>
        </div>

    </div>
    <div id="dropdown-row2">
        <div>
            <ul>
                <li><a href="" class="li-color" style="color: rgb(248, 242, 242)"><b>TV Speakers & Soundbars</b></a>
                </li>
                <br>
                <li><a href="" class="li-color">Soundbars</a></li>
                <li><a href="" class="li-color">Home Theater</a></li>
                <li><a href="" class="li-color">Party Speakers</a></li>
                <li><a href="" class="li-color">Multimedia</a></li>

            </ul>
        </div>
        <div>
            <ul>
                <li><a href="" class="li-color" style="color: rgb(248, 242, 242)"><b>TV Speakers & Soundbars</b></a>
                </li>
                <br>
                <li><a href="" class="li-color">Soundbars</a></li>
                <li><a href="" class="li-color">Home Theater</a></li>
                <li><a href="" class="li-color">Party Speakers</a></li>
                <li><a href="" class="li-color">Multimedia</a></li>

            </ul>
        </div>
        
    </div>
    `
}

 function closeNev() {
    document.getElementById("dropdown").style.width = "0";
 }

 let user_login = localStorage.getItem("user_login") || false;
 if (user_login) {
     let a = localStorage.getItem("fName")||localStorage.getItem("againName");
     document.querySelector("#user_name").innerText = "Hi, " + a;
     document.getElementById("logout_btn").style.display="flex"
 }

 let user_logout = document.getElementById("logout_btn");
     user_logout.addEventListener("click",()=>{
     localStorage.removeItem("user_login");
     localStorage.removeItem("fName");
      document.querySelector("#user_name").innerText = localStorage.getItem("loginIcon");
     document.getElementById("logout_btn").style.display="none"
     document.querySelector("#user_name").innerHTML = `<img src="./image/account.png"}>Login`
      window.location.href="Home.html"
 });

