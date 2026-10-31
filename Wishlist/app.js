
function createCard(item) {
    let categoryClass = "";

    if (item.category === "books") {
        categoryClass = "book-card";
    } else if (item.category === "board-games") {
        categoryClass = "board-game-card";
    } else {
        categoryClass = "other-card";
    }

    return `
        <article class="item-card ${categoryClass}">

            <div class="card-inner">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                <div class="card-content">

                    <h2>${item.title}</h2>

                    <p class="category">
                        ${item.category}
                    </p>

                    <p>${item.description}</p>

                    <div class="card-footer">

                        ${item.links.map((link, index) => `
                            <a href="${link}" target="_blank" rel="noopener noreferrer">
                                ${item.linksdescription[index]}
                            </a>
                        `).join("")}

                    </div>
                </div>
            </div>

            <div class="gold-ribbon"></div>
        </article>
    `;
}


function displayItems(itemsToDisplay) {

    // Find the container in the HTML
    const container = document.getElementById("wishlist-grid");

    // Clear anything currently inside it
    container.innerHTML = "";

    // Create a card for every item
    itemsToDisplay.forEach(item => {

        // Generate the HTML for this item
        const cardHTML = createCard(item);

        // Add it to the webpage
        container.innerHTML += cardHTML;

    });
}


// Display all the items
displayItems(items);
