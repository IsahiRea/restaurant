import { menuArray } from "./data.js";

const order = []

document.addEventListener('click', function (e) {
    
    
    if (e.target.dataset.add) {
        order.push(e.target.dataset.add)

        const itemId = e.target.dataset.add
        addToCart(itemId)
    }

    //TODO: add remove from cart functionality
    if (e.target.dataset.remove) {
        order.splice(order.indexOf(e.target.dataset.id), 1)

        const itemId = e.target.dataset.id
        removeFromCart(itemId)
    }

    if(order.length === 0){
        document.getElementById("order").style.display = "none"
    }
})


function addToCart(itemId) {

    if(order.length > 0){
        document.getElementById("order-container").style.display = "block"
    }

    const orderEl = document.getElementById("order-items")
    const totalPriceEl = document.getElementById("totals")

    console.log(orderEl)

    const item = menuArray.find(item => {
        return Number(itemId) === item.id
    })

    const orderItemHtml = `
        <div class="items">
            <p class="item-name">${item.name}<span class="remove-item">remove</span></p>
            <p class="price">${item.price}</p>
        </div>`

    orderEl.innerHTML += orderItemHtml    
    totalPriceEl.textContent = `Total: $${order.reduce((acc, itemId) => {
        const item = menuArray.find(item => item.id == itemId)
        return acc + item.price
    }
    , 0)}`
}

function renderMenu(itemsArr) {
    const menuItemsHtml = itemsArr.map(item => {
        return `
            <section class="choice">
                <div class="product-container">
                    <p class="emoji">${item.emoji}</p>
                    <div class="details-container">
                        <h2 class="product-name">${item.name}</h2>
                        <p class="ingredients">${item.ingredients.join(", ")}</p>
                        <p class="price">$${item.price}</p>
                    </div>
                </div> 
                <div class="button-container">
                    <button class="add-btn" data-add="${item.id}">+</button>
                </div>
            </section>
        ` 
    }).join("")

    document.getElementById("content").innerHTML = menuItemsHtml
}

renderMenu(menuArray)