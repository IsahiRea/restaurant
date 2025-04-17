import { menuArray } from "./data.js";

const order = []
renderMenu(menuArray)

document.addEventListener('click', function (e) {

    e.preventDefault()
    
    if (e.target.dataset.add) {
        order.push(e.target.dataset.add)
        renderCart()
    }

    if (e.target.dataset.remove) {
        order.splice(order.indexOf(e.target.dataset.id), 1)
        renderCart()
    }

    if(order.length === 0){
        document.getElementById("order-container").style.display = "none"
    }

    if (e.target.id === "complete") {
        document.getElementById("modal").style.display = "block"
    }

    if (e.target.id === "submit") {
        const formData = new FormData(document.getElementById("customer-form"))
        renderConfirmation(formData)
    }

    // Close modal when clicking outside of it and clear fields
    const modal = document.getElementById("modal");
    if (modal.style.display === "block" && !modal.contains(e.target) && e.target.id !== "complete") {
        modal.style.display = "none";

        clearFields()
    }
})

function renderConfirmation(formData) {
    const name = formData.get("name")

    const confirmationEl = document.getElementById("confirmation")
    confirmationEl.style.display = "block"

    document.getElementById("modal").style.display = "none"
    document.getElementById("order-container").style.display = "none"
    clearFields()
    
    order.length = 0
    confirmationEl.innerHTML = `<p>Thanks, ${name}! Your order is on its way</p>`
    
    setTimeout(() => {
        confirmationEl.innerHTML = ""
        confirmationEl.style.display = "none"
    }, 5000)

}

function renderCart() {

    if(order.length > 0){
        document.getElementById("order-container").style.display = "block"
    }

    const orderEl = document.getElementById("order-items")
    const totalPriceEl = document.getElementById("totals")

    const orderHtml = order.map(itemId => {
        const item = menuArray.find(item => {
            return Number(itemId) === item.id
        })

        return `
            <div class="items">
                <p class="item-name">${item.name}<span class="remove-item" data-remove="${item.id}">remove</span></p>
                <p class="price">$${item.price}</p>
            </div>`
    }).join("")

    orderEl.innerHTML = orderHtml

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

function clearFields() {
    const inputs = document.querySelectorAll("#customer-form input")
    inputs.forEach(input => input.value = "")
}
