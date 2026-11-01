let currentItems = [];
let isRandomView = false;

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
    currentItems = [...itemsToDisplay];

    // Find the container in the HTML
    const container = document.getElementById("wishlist-grid");

    container.innerHTML = currentItems.map(createCard).join("");

    // // Clear anything currently inside it
    // container.innerHTML = "";

    // // Create a card for every item
    // itemsToDisplay.forEach(item => {

    //     // Generate the HTML for this item
    //     const cardHTML = createCard(item);

    //     // Add it to the webpage
    //     container.innerHTML += cardHTML;

    // });
}

function showMenu() {
    document.getElementById("splash-screen").style.display = "flex";
    document.getElementById("wishlist-screen").style.display = "none";
}

function showWishlist() {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("wishlist-screen").style.display = "block";
}

function showAll() {
    isRandomView = false;
    document.getElementById("shuffle-button").textContent = "Shuffle";
    showWishlist();
    displayItems(items);
}

function showBooks() {
    isRandomView = false;
    document.getElementById("shuffle-button").textContent = "Shuffle";
    showWishlist();
    displayItems(items.filter(item => item.category === "books"));
}

function showBoardGames() {
    isRandomView = false;
    document.getElementById("shuffle-button").textContent = "Shuffle";
    showWishlist();
    displayItems(items.filter(item => item.category === "board-games"));
}

function showOther() {
    isRandomView = false;
    document.getElementById("shuffle-button").textContent = "Shuffle";
    showWishlist();
    displayItems(items.filter(item => item.category === "other"));
}

function handleShuffle() {
    if (isRandomView) {
        showRandomCurrentItem();
    } else {
        shuffleCurrentItems();
    }
}

function shuffleCurrentItems() {
    const shuffled = [...currentItems];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    displayItems(shuffled);
}

function showRandomOrder() {
    showAll();
    shuffleCurrentItems();
}

function showRandomCurrentItem() {
    if (currentItems.length === 0) return;
    isRandomView = true;
    document.getElementById("shuffle-button").textContent = "Next Random Item";
    
    currentItems = items;
    shuffleCurrentItems();
    showWishlist();
    
    displayItems([currentItems[0]]);
}

// Display all the items
displayItems(items);
