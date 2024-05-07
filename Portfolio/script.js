const filePath = './siteContent.json';

let data = [];

fetch(filePath)
    .then(Response => Response.json())
    .then(data => {
        data.forEach((e, index) => {
            createMiniCard(index ,e.imageSrc[0], e.Description, e.Title);
        });

        document.querySelectorAll('.mini_card').forEach(card => {
            card.addEventListener('click', () => {
                changeMainContent(card.id);
            });
        });

        this.data = data;
});

function createMiniCard(id, imageSrc, cardDescription, cardTitle) {
    let miniCard = `
        <div class="mini_card" id="${id}">
            <div class="image">
                <img src="${imageSrc}" alt="placeholder">
            </div>
            <div class="info">
                <p class="data ubuntu-medium-italic">${cardDescription}</p>
                <h2 class="ubuntu-bold">${cardTitle}</h2>
            </div>
        </div>
    `;
    
    let aside = document.querySelector('aside.browse');
    aside.innerHTML += miniCard;
};

function changeMainContent(id) {
    console.log(id);
    document.querySelector('.imageCarousel').innerHTML = '';
    this.data[id].imageSrc.forEach((src, index) => {
        document.querySelector('.imageCarousel').innerHTML+=`<img src="${src}" alt="placeholder">`;
    });
    document.querySelector('main .title').innerHTML = this.data[id].Title;
    document.querySelector('main .description').innerHTML = this.data[id].Description;
    document.querySelector('main .content').innerHTML = this.data[id].Content;
}


