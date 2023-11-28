document.addEventListener("DOMContentLoaded", function () {
    const plantList = document.getElementById("plant-list");

    // Sample plant data
    const plants = [
        { name: "Snake Plant", price: 20, image: "snake_plant.jpeg" },
        { name: "Peace Lily", price: 25, image: "peace_lily.jpeg" },
        // Add more plant data as needed
    ];

    // Display plants on the page
    plants.forEach(plant => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = plant.image;
        image.alt = plant.name;

        const name = document.createElement("h2");
        name.textContent = plant.name;

        const price = document.createElement("p");
        price.textContent = `$${plant.price}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(addToCartButton);

        plantList.appendChild(card);
    });
});
