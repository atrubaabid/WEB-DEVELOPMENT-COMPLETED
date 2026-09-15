const products = [
    {
        "id": 1,
        "name": "Laptop",
        "category": "Computers",
        "brand": "ExampleBrand",
        "price": 999.99,
        "stock": 50,
        "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
        "image": "../images/lapi.png"
    },
    {
        "id": 2,
        "name": "Smartphone",
        "category": "Mobiles",
        "brand": "TechGadget",
        "price": 499.99,
        "stock": 100,
        "image": "../images/iphone.png",
        "description": "Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."
    },
    {
        "id": 3,
        "name": "Wireless Headphones",
        "category": "Audio",
        "brand": "SoundBeats",
        "price": 149.99,
        "stock": 30,
        "image": "../images/headphone.png",
        "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
        "id": 4,
        "name": "Watches",
        "category": "Wearables",
        "brand": "FitTech",
        "price": 199.99,
        "stock": 20,
        "image": "../images/watch.png",
        "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
    },
    {
        "id": 5,
        "name": "Speakers",
        "category": "Audio",
        "brand": "SoundBeats",
        "price": 149.99,
        "stock": 30,
        "image": "../images/speakers.png",
        "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
        "id": 6,
        "name": "Television",
        "category": "Video",
        "brand": "Samsung",
        "price": 199.99,
        "stock": 20,
        "image": "../images/tv.png",
        "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
    }, {
        "id": 7,
        "name": "Laptop",
        "category": "Computers",
        "brand": "ExampleBrand",
        "price": 999.99,
        "stock": 50,
        "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
        "image": "../images/lapi.png"
    },
    {
        "id": 8,
        "name": "Smartphone",
        "category": "Mobiles",
        "brand": "TechGadget",
        "price": 499.99,
        "stock": 100,
        "image": "../images/iphone.png",
        "description": "Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."
    },
    {
        "id": 9,
        "name": "Wireless Headphones",
        "category": "Audio",
        "brand": "SoundBeats",
        "price": 149.99,
        "stock": 30,
        "image": "../images/headphone.png",
        "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
        "id": 10,
        "name": "Watches",
        "category": "Wearables",
        "brand": "FitTech",
        "price": 199.99,
        "stock": 20,
        "image": "../images/watch.png",
        "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
    },
    {
        "id": 11,
        "name": "Speakers",
        "category": "Audio",
        "brand": "SoundBeats",
        "price": 149.99,
        "stock": 30,
        "image": "../images/speakers.png",
        "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
        "id": 12,
        "name": "Television",
        "category": "Video",
        "brand": "Samsung",
        "price": 199.99,
        "stock": 20,
        "image": "../images/tv.png",
        "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
    }
]

// UPDATE-CART-VALUE
let updatecartValue = (data) => {
    let CartValue = document.querySelector("#cart");
    return CartValue.innerHTML = data.length;
}


// GET-LS-DATA
let getLSData = () => {
    let getLSCardsdata = localStorage.getItem("addtocartsData");
    if (!getLSCardsdata) {
        return [];
    }
    getLSCardsdata = JSON.parse(getLSCardsdata);

    // update cart value
    updatecartValue(getLSCardsdata)

    return getLSCardsdata;
}

getLSData()

// SHOW-TOTAL-PRICE
let showtotalprice = () => {

    let lsData = getLSData()

    let TotalPrice = lsData.reduce((acc, cur) => {
        let productPrice = cur.price || 0;
        return acc += productPrice;
    }, 0)

    TotalPrice = Number(TotalPrice.toFixed(2))

    document.querySelector(".sub-total-price").innerHTML = `Rs ${TotalPrice}`;
    document.querySelector(".final-total-price").innerHTML = `Rs ${TotalPrice + 50}`;




}

showtotalprice()


// TOAST
let showToast = (operation, id) => {

    let div = document.createElement("div");
    div.classList.add("toast")
    div.innerHTML = `Product with ID ${id} has been ${operation}`

    document.body.append(div);
}










// SHOW-CART-PRODUCTS

let showCartProducts = () => {

    let LSdata = getLSData();

    let cartproductsShowCon = document.querySelector(".cart-products-show")
    let productTemplate = document.querySelector(".cart-product");

    // LS-CARD-DATA-SHOW
    LSdata.forEach((curProd) => {

        let productClone = document.importNode(productTemplate.content, true);
        let { id, quantity, price } = curProd;

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
        productClone.querySelector(".price").textContent = price
        productClone.querySelector(".product-piece").textContent = quantity;

        let copyCard = products.filter((allprods) => {
            return allprods.id === id
        })

        // ORIGINAL-CARD-DATA-SHOW
        copyCard.forEach((orignalProds) => {

            let { name, category, image, stock, price } = orignalProds;

            let originalPrice = price

            productClone.querySelector(".name").textContent = name;
            productClone.querySelector(".title").textContent = category;
            productClone.querySelector(".cartProd-img").src = image;

            // UPDATE CART INCREMENT-DECREMENT PRICE & QUANTITY
            productClone.querySelector(".pieces").addEventListener("click", (event) => {

                let selectedCard = document.querySelector(`#card${id}`);
                let priceCard = selectedCard.querySelector(".price");
                let QuantityCard = selectedCard.querySelector(".product-piece");
                let quantity = Number(QuantityCard.innerHTML);

                if (event.target.className == "increment") {
                    if (quantity < stock) {
                        quantity += 1
                    } else if (quantity == stock) {
                        quantity = stock
                    }

                } else if (event.target.className == "decrement") {
                    if (quantity > 1) {
                        quantity -= 1
                    }
                }


                let totalPrice = Number(originalPrice) * Number(quantity);
                price = Number(totalPrice.toFixed(2));



                let updateCart = { id, price, quantity };


                LSdata = LSdata.map((curProd) => {
                    return curProd.id === id ? updateCart : curProd;
                })

                localStorage.setItem("addtocartsData", JSON.stringify(LSdata));

                priceCard.innerHTML = price
                QuantityCard.innerHTML = quantity;


                showtotalprice()

            })


        })

        // REMOVE-EVENT
        productClone.querySelector(".remove-cart-prods").addEventListener("click", (event) => {

            // after delete the item update LS data
            LSdata = LSdata.filter((curProd) => {
                return curProd.id !== id;
            })

            localStorage.setItem("addtocartsData", JSON.stringify(LSdata));


            // remove selected div from dom
            let removeDiv = document.querySelector(`#card${id}`);
            removeDiv.remove();

            // update cart value
            updatecartValue(LSdata);

            // toast
            showToast("removed", id)






        })

        cartproductsShowCon.append(productClone)


    })





}


showCartProducts()