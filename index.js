import { menuArray } from "./data.js";

const content = document.getElementById("content");

function renderMenu(itemsArr) {
    const menuItemsHtml = itemsArr.map(item => {
        return `
            <section class="choice">
                <div class="product-container">
                    <p class="emoji">${item.emoji}</p>
                </div> 
                <div class="button-container">
                    <button class="add-btn">+</button>
                </div>
            </section>
        ` 
    }).join("")

    document.getElementById("content").innerHTML = menuItemsHtml
}

renderMenu(menuArray)

// content.innerHTML = `
//     <section class="choice-container">
//         ${menuArray.map(item => `
//             <div class="choice">
//                 <div class="product-container">
//                     <p class="emoji">${item.emoji}</p>
//                     <div class="details-container">
//                         <h2 class="product-name">${item.name}</h2>
//                         <p class="ingredients">${item.ingredients.join(", ")}</p>
//                         <p class="price">$${item.price}</p>
//                     </div>
//                 </div>
//                 <div class="button-container">
//                     <p class="add-btn" id="add-${item.id}">+</p>
//                 </div>
//             </div>
//         `).join("")}
//     </section>
// `;

// // Add button event listeners
// menuArray.forEach(item => {
//     const addBtn = document.getElementById(`add-${item.id}`);
//     addBtn.addEventListener("click", function () {
//         console.log(`clicked ${item.name}`);
//     });
// });