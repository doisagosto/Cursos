
const BASE_URL = 'https://randomfox.ca/floof/';

const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.image; //image foi retirado da url acima(BASE_URL) utilizada acima para buscar as imagens
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();