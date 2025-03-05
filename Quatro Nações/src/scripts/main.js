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
        
        nationImages[0].src = "./src/images/water_tribe/water_tribe_temple.png";
        nationImages[1].src = "./src/images/water_tribe/water_tribe_people.jpg";
        nationImages[2].src = "./src/images/water_tribe/water_tribe_bending.jpg";
        nationImages.forEach((img) => {
            img.style.display = "block";
        });

        philosofy.style.display = "flex";

        philosophyDescription.innerText = "A filosofia da Tribo da Água gira em torno do equilíbrio e da cura. Os membros dessa nação acreditam que, assim como a água, a vida flui e se adapta, e é essa flexibilidade que lhes permite enfrentar desafios e manter a paz. Atribuem grande importância à união e à ajuda mútua, com um forte senso de comunidade e solidariedade.";


        bendingsDiv.style.display = "flex";
        nationBendings[0].src = "./src/images/water_tribe/heal_bending.png";
        nationBendings[1].src = "./src/images/water_tribe/ice_bending.png";
        nationBendings[2].src = "./src/images/water_tribe/blood_bending.png";

        nationDiv.scrollIntoView({
            behavior: 'smooth'
        });
    }

    if(nation === "air") {
        const element = document.getElementById("air");
        element.classList.add("active");

        nationName.innerText = "Nômades do ar";
        nationDescription.innerHTML = "O ar é o elemento da liberdade.";

        nationDiv.classList.add("air");
        
        nationImages[0].src = "./src/images/water_tribe/water_tribe_temple.png";
        nationImages[1].src = "./src/images/water_tribe/water_tribe_people.jpg";
        nationImages[2].src = "./src/images/water_tribe/water_tribe_bending.jpg";
        nationImages.forEach((img) => {
            img.style.display = "block";
        });

        philosofy.style.display = "flex";

        philosophyDescription.innerText = "Os Nômades do Ar acreditam que a verdadeira harmonia vem do desprendimento e do equilíbrio espiritual. Para eles, a vida deve ser guiada pela compaixão, pela conexão com o mundo e pela busca da paz. Vivendo em monastérios isolados, seguem uma filosofia pacifista, evitando a violência sempre que possível. A dobra de ar reflete essa visão, permitindo que seus praticantes se movam com leveza, desviando-se dos obstáculos ao invés de enfrentá-los diretamente.";


        bendingsDiv.style.display = "flex";
        nationBendings[0].src = "./src/images/water_tribe/heal_bending.png";
        nationBendings[1].src = "./src/images/water_tribe/ice_bending.png";
        nationBendings[2].src = "./src/images/water_tribe/blood_bending.png";

        nationDiv.scrollIntoView({
            behavior: 'smooth'
        });
    }
    if(nation === "fire") {
        const element = document.getElementById("fire");
        element.classList.add("active");

        nationName.innerText = "Nação do fogo";
        nationDescription.innerHTML = "O fogo é o elemento do poder";

        nationDiv.classList.add("fire");
        
        nationImages[0].src = "./src/images/water_tribe/water_tribe_temple.png";
        nationImages[1].src = "./src/images/water_tribe/water_tribe_people.jpg";
        nationImages[2].src = "./src/images/water_tribe/water_tribe_bending.jpg";
        nationImages.forEach((img) => {
            img.style.display = "block";
        });

        philosofy.style.display = "flex";

        philosophyDescription.innerText = "A filosofia da Nação do Fogo é centrada no poder, força e disciplina. Seus membros acreditam que o fogo simboliza a paixão e a determinação necessárias para alcançar grandes conquistas. Valorizam o autocontrole, pois sabem que, quando descontrolado, o fogo pode destruir. A busca pela força é guiada pela responsabilidade e equilíbrio.";


        bendingsDiv.style.display = "flex";
        nationBendings[0].src = "./src/images/water_tribe/heal_bending.png";
        nationBendings[1].src = "./src/images/water_tribe/ice_bending.png";
        nationBendings[2].src = "./src/images/water_tribe/blood_bending.png";

        nationDiv.scrollIntoView({
            behavior: 'smooth'
        });
    }

    if(nation === "earth") {
        const element = document.getElementById("earth");
        element.classList.add("active");

        nationName.innerText = "Reino da terra";
        nationDescription.innerHTML = "A terra é o elemento da substância";

        nationDiv.classList.add("earth");
        
        nationImages[0].src = "./src/images/water_tribe/water_tribe_temple.png";
        nationImages[1].src = "./src/images/water_tribe/water_tribe_people.jpg";
        nationImages[2].src = "./src/images/water_tribe/water_tribe_bending.jpg";
        nationImages.forEach((img) => {
            img.style.display = "block";
        });

        philosofy.style.display = "flex";

        philosophyDescription.innerText = "A filosofia da Nação da Terra é baseada na força, resistência e estabilidade. Seus membros acreditam que a terra representa a firmeza e a conexão com o mundo físico, sendo essencial ter raízes profundas para enfrentar as adversidades. Valorizam a perseverança, a lealdade e o trabalho árduo, mantendo-se firmes em seus princípios. A dobra de terra reflete essa filosofia, permitindo que seus praticantes manipulem o solo com grande poder, criando defesas impenetráveis e obstáculos para seus inimigos. Para os membros da Nação da Terra, a força vem da paciência e da determinação.";


        bendingsDiv.style.display = "flex";
        nationBendings[0].src = "./src/images/water_tribe/heal_bending.png";
        nationBendings[1].src = "./src/images/water_tribe/ice_bending.png";
        nationBendings[2].src = "./src/images/water_tribe/blood_bending.png";

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