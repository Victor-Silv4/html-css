const nationName = document.querySelector(".nation-name");
const nationDescription = document.querySelector(".nation-description");
const nationDiv = document.querySelector(".nation");
const nationImages = [
    document.getElementById("image-1"),
    document.getElementById("image-2"),
    document.getElementById("image-3")
];

const philosofy = document.querySelector(".nation-philosophy");
const philosophyDescription = document.querySelector(".nation-philosophy-description");

const bendingsDiv = document.querySelector(".subbending-field");

let nationBendings = [
    document.getElementById("bending-1"),
    document.getElementById("bending-2"),
    document.getElementById("bending-3")
]



const changeNations = (nation) => {

    clearElements();

    if(nation === "water") {
        const element = document.getElementById("water");
        element.classList.add("active");

        nationName.innerText = "Tribo da água";
        nationDescription.innerHTML = "A água é o elemento da mudança";

        nationDiv.classList.add("water");
        
        nationImages[0].src = "../src/images/water_tribe/water_tribe_temple.png";
        nationImages[1].src = "../src/images/water_tribe/water_tribe_people.jpg";
        nationImages[2].src = "../src/images/water_tribe/water_tribe_bending.jpg";
        nationImages.forEach((img) => {
            img.style.display = "block";
        });

        philosofy.style.display = "flex";

        philosophyDescription.innerText = "A filosofia da Tribo da Água gira em torno do equilíbrio e da cura. Os membros dessa nação acreditam que, assim como a água, a vida flui e se adapta, e é essa flexibilidade que lhes permite enfrentar desafios e manter a paz. Atribuem grande importância à união e à ajuda mútua, com um forte senso de comunidade e solidariedade.";


        bendingsDiv.style.display = "flex";
        nationBendings[0].src = "../src/images/water_tribe/heal_bending.png";
        nationBendings[1].src = "../src/images/water_tribe/ice_bending.png";
        nationBendings[2].src = "../src/images/water_tribe/blood_bending.png";

        nationDiv.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
};

const clearElements = () => {
    const element = document.querySelectorAll(".slide");
    element.forEach((slide) => slide.classList.remove("active"));

    nationName.innerText = "";
    nationDescription.innerHTML = "";

    nationDiv.classList.remove("water", "air", "fire", "earth");

    nationImages.forEach((img) => {
        img.style.display = "none";
    });

    philosofy.style.display = "none";

    philosophyDescription.classList.remove("water", "air", "fire", "earth");

    philosophyDescription.innerText = "";

    bendingsDiv.style.display = "none";

};