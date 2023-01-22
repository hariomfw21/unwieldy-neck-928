let url = "http://localhost:4400/post";
let data2 = [];

async function FetchedAllData() {
    try {
        let api_data = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await api_data.json();
        data2=[...data];
        displayCards(data);
    } catch (error) {
        alert("something went wrong.")
    }
}
FetchedAllData();

// display all our data...
let cartItems = JSON.parse(localStorage.getItem("apan_e-store_cartproduct")) || [];
function displayCards(data) {
    let container = document.querySelector("#append-div");
    container.innerHTML = "";
    data.forEach(element => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.avatar);
        img.addEventListener("click", function () {
            localStorage.setItem("product_details", JSON.stringify(element))
            window.location.href = "product.html"
        });
        let discription = document.createElement("p");
        let str = element.discription
        discription.innerText = `${str.substring(0, 50)}...`;
        let price = document.createElement("h4");
        price.innerHTML = `<h4>&#8377; ${element.price}</h4>`;
        let offer = document.createElement("p");
        offer.innerText = "OFFER AVAILABLE";
        let cart_btn = document.createElement("button");
        cart_btn.innerText = "Add To Cart";
        cart_btn.addEventListener("click", function () {
            if (cartItems.includes(element)) {
                alert("Already Existing Item in Cart")
            } else {
                cartItems.push(element);
                localStorage.setItem("apan_e-store_cartproduct", JSON.stringify(cartItems));
            }

        })
        div.append(img, discription, price, offer, cart_btn);
        document.querySelector("#append-div").append(div);
    });
}







var checkbox = document.querySelector("#Laptop");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    let q = document.querySelector("#Laptop").value;
    let newData=data2.filter(function(ele){
        return ele.category.toLowerCase().includes(q.toLowerCase()) || ele.category.toLowerCase().includes(q.toLowerCase());
    })

    displayCards(newData);
  } else {
    console.log("Checkbox is not checked..");
    displayCards(data2)
  }
});


var checkbox2 = document.querySelector("#Mobile");

checkbox2.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    let q = document.querySelector("#Mobile").value;
    let newData=data2.filter(function(ele){
        return ele.category.toLowerCase().includes(q.toLowerCase()) || ele.category.toLowerCase().includes(q.toLowerCase());
    })

    displayCards(newData);
  } else {
    console.log("Checkbox is not checked..");
    displayCards(data2)
  }
});


var checkbox3 = document.querySelector("#Tv");

checkbox3.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    let q = document.querySelector("#Tv").value;
    let newData=data2.filter(function(ele){
        return ele.category.toLowerCase().includes(q.toLowerCase()) || ele.category.toLowerCase().includes(q.toLowerCase());
    })

    displayCards(newData);
  } else {
    console.log("Checkbox is not checked..");
    displayCards(data2)
  }
});

var checkbox4 = document.querySelector("#Apple");

checkbox4.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked.. by brand");
    let q = document.querySelector("#Apple").value;
    let newData=data2.filter(function(ele){
        return ele.brand.toLowerCase().includes(q.toLowerCase()) || ele.brand.toLowerCase().includes(q.toLowerCase());
    })
    displayCards(newData);
  } else {
    console.log("Checkbox is not checked..");
    displayCards(data2)
  }
});


var LowPrice = document.querySelector("#low-price")

LowPrice.addEventListener('click',function() {
    let sortedData = data2.sort((a, b) => a.price - b.price);
    displayCards(sortedData);
})

var HighPrice = document.querySelector("#High-price")

HighPrice.addEventListener('click',function() {
    let sortedData = data2.sort((a, b) => b.price - a.price);
    displayCards(sortedData);
})















