const data = {
    cards: [
        {
            imageSrc: ["https://upload.wikimedia.org/wikipedia/commons/e/e5/Saab_900_GLE_%282%29_%28crop%29.jpg"],
            Description: "Card Description 1",
            Title: "Card Title 1",
            Content: "hi"
        }
    ]
};

function createMiniCard(id, imageSrc, cardDescription, cardTitle) {
    let miniCard = `
        <div class="mini_card" id="${id}">
                <div class="image">
                        <img src="${imageSrc}" alt="placeholder">
                </div>
                <div class="info">
                        <p class="data playfair-display">${cardDescription}</p>
                        <h2 class="playfair-display">${cardTitle}</h2>
                </div>
        </div>
    `;
    
    let aside = document.querySelector('aside.browse');
    aside.innerHTML += miniCard;
};

data.cards.forEach((card, index) => {
    createMiniCard(index ,card.imageSrc[0], card.Description, card.Title);
});