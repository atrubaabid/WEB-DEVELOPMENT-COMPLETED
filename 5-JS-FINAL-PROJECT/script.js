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


let productContainer = document.querySelector(".products-cards");
let productTemplate = document.querySelector(".productTemplate")


// INCREMENT & DECREAMENT TOGGLE
let ProductQuantityToggle = (event, id, stock) => {
    let selectedCard = document.querySelector(`#card${id}`);
    let quantityP = selectedCard.querySelector(".product-piece");
    let quantity = Number(quantityP.innerHTML);

    if (event.target.className == "increment") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity == stock) {
            quantity = stock;
        }
    } else if (event.target.className == "decrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }
    quantityP.innerHTML = quantity
}




// UPDATE CART VALUE

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

// TOAST
let showToast = (operation, id) => {

    let div = document.createElement("div");
    div.classList.add("toast")
    div.innerHTML = `Product with ID ${id} has been ${operation}`

    document.body.append(div);
}






// ADD TO CART

let addToCart = (event, id) => {

    let localStoragedata = getLSData();

    let selectedCard = document.querySelector(`#card${id}`);
    let price = selectedCard.querySelector(".original-price").innerHTML;
    let quantity = selectedCard.querySelector(".product-piece").innerHTML;

    price = price.replace("Rs ", "");

    let existingProd = localStoragedata.find((curProd) => curProd.id == id)

    if (existingProd && quantity >= 1) {
        quantity = Number(existingProd.quantity) + Number(quantity)
        price = Number(price * quantity);

        let updateCart = { id, price, quantity };


        localStoragedata = localStoragedata.map((curProd) => {
            return curProd.id === id ? updateCart : curProd
        })

        localStorage.setItem("addtocartsData", JSON.stringify(localStoragedata));

        // toast
        showToast("Added", id)



    }


    if (existingProd) {
        return false
    }

    quantity = Number(quantity);
    price = Number(price * quantity);

    localStoragedata.push({ id, price, quantity });

    localStorage.setItem("addtocartsData", JSON.stringify(localStoragedata));

    updatecartValue(localStoragedata)

    // Toast
    showToast("Added", id)


}





// SHOW PRODUCTS
let showProductContainer = (products) => {

    if (!products) {
        return false;
    }


    products.forEach((curProd) => {

        let { id, name, category, brand, price, stock, image, description } = curProd;

        let productClone = document.importNode(productTemplate.content, true);


        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".p-name").textContent = name;
        productClone.querySelector(".product-img").src = image;
        productClone.querySelector(".product-img").alt = name;
        productClone.querySelector(".description").textContent = description;
        productClone.querySelector(".original-price").textContent = `Rs ${price}`;
        productClone.querySelector(".productfake-price").textContent = `Rs ${price * 4}`;
        productClone.querySelector(".p-stock").textContent = stock;

        productClone.querySelector(".Quantity").addEventListener("click", (event) => {
            ProductQuantityToggle(event, id, stock)
        })

        productClone.querySelector(".AddtoCart").addEventListener("click", (event) => {
            addToCart(event, id)
        })





        productContainer.append(productClone);

    })
}

showProductContainer(products)


