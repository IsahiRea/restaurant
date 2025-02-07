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

const content = document.getElementById("content");

content.innerHTML = `
    <h1>Menu</h1>
    <section class="choice-container">
        ${menuArray.map(item => `
            <div class="details-container">
                <h2>${item.name} ${item.emoji}</h2>
                <p>${item.ingredients.join(", ")}</p>
                <p>Price: $${item.price}</p>
            </div>
        `).join("")}
    </section>
`;