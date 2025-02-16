const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]

const addBtn = document.getElementById(".add-1");
const content = document.getElementById("content");

content.innerHTML = `
    <section class="choice-container">
        ${menuArray.map(item => `
            <div class="choice">
                <div class="product-container">
                    <p class="emoji">${item.emoji}</p>
                    <div class="details-container">
                        <h2 class="product-name">${item.name}</h2>
                        <p class="ingredients">${item.ingredients.join(", ")}</p>
                        <p class="price">$${item.price}</p>
                    </div>
                </div>
                <div class="button-container">
                    <p class="add-btn" id="add">+</p>
                </div>
            </div>
        `).join("")}
    </section>
`;

addBtn.addEventListener("click", function () {
    console.log("clicked");
})