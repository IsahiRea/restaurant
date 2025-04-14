import { menuArray } from "./data.js";


document.addEventListener('click', function (e) {
    
    if (e.target.dataset.add) {
        const itemId = e.target.dataset.id;
        addToCart(itemId);
    }

    //TODO: add remove from cart functionality
    if (e.target.dataset.remove) {
        const itemId = e.target.dataset.id;
        removeFromCart(itemId);
    }
})


function addToCart(itemId) {
    const item = menuArray.find(item => item.id == itemId);
    console.log(`clicked ${item.name}`);
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
// <!-- TODO: Order section -->
//     <!-- <section class="order">
//         <h2 class="order-header">Your order</h2>
//         <div class="order-items-container">
            
//             <div class="order-items">
//                 <div class="items">
//                     <p class="item-name">Pizza <span class="remove-item">remove</span></p>
//                     <p class="price">$14</p>
//                 </div>

//                 <div class="items">
//                     <p class="item-name">Beer <span class="remove-item">remove</span></p>
//                     <p class="price">$12</p>
//                 </div>
//             </div>

//             <div class="total-order">
//                 <p class="total-price">Total price:</p>
//                 <p class="price">$26</p>
//             </div>

//         </div>
//         <button class="order-btn">Complete order</button>
//     </section> -->



