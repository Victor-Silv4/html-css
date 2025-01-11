const list = document.querySelector(".characters");
const button = document.querySelector(".pagination-button");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

let url = `https://rickandmortyapi.com/api/character`;

async function convertCharacterToObject(character) {
    const char = new Character();
    char.id = character.id;
    char.name = character.name;
    char.status = character.status;
    char.species = character.species;
    char.gender = character.gender;
    char.origin = character.origin.name;
    char.location = character.location.name;
    char.image = character.image;

    convertCharacterToHtml(char);
}

async function convertInfoToObject(info) {
    return {
        next: info.next,
        prev: info.prev,
    };
}

async function convertCharacterToHtml(character) {
    const newListItem =  `<li id="${character.id}" class="character">
                        <div class="image"><img src="${character.image}" alt="${character.name}"></div>

                        <div class="infos">
                            <span class="name">${character.name}</span>
                            <span class="status ${character.status}">${character.status} - ${character.species} - ${character.gender}</span>

                            <div class= "location-box">
                                <span class="topic">Last known location:</span>
                                <span class="location">${character.location}</span>
                            </div>

                            <div class= "origin-box">
                                <span class="topic">Origin:</span>
                                <span class="origin">${character.origin}</span>
                            </div>
                        </div>
                    </li>`;

    list.innerHTML += newListItem;

    const charactersNames = document.querySelectorAll(".name");

    charactersNames.forEach((characterName) => {
        characterName.addEventListener("click", async (event) => {
            const characterElement = event.target.closest("li");
            if (characterElement) {
                const characterId = characterElement.id;
                console.log(`Character ID: ${characterId}`);

                const baseURL = window.location.hostname === "victor-silv4.github.io" ? "/html-css/rickNMorty/" : "../../";
                
                window.location.href = `${baseURL}detail.html?id=${characterId}`;;
            }
        });
    });
}

async function fetchApi(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((characters) => characters.map(convertCharacterToObject));
}

async function getPagination(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.info);
}

nextButton.addEventListener("click", async () => {
    const pages = await getPagination(url);

    const objectPage = await convertInfoToObject(pages);

    if (objectPage.next) {
        url = objectPage.next;
        list.innerHTML = "";
        await fetchApi(url);
    }
});

previousButton.addEventListener("click", async () => {
    const pages = await getPagination(url);

    const objectPage = await convertInfoToObject(pages);

    if (objectPage.prev) {
        url = objectPage.prev;
        list.innerHTML = "";
        await fetchApi(url);
    }
});

fetchApi(url);
