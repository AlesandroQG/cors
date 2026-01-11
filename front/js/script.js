const characterNameInput = document.getElementById("characterName");
const characterInfo = document.getElementById("characterInfo");

function getCharacterInfo() {
    const characterName = characterNameInput.value.toLocaleLowerCase();
    fetch(`http://localhost:3000/characters/${characterName}`)
        .then((response) => response.json())
        .then((data) => {
            const {name, status, species, gender, origin: {name: originName}, image} = data;
            characterInfo.innerHTML = `
                <h2>${name}</h2>
                <p>Status: ${status}</p>
                <p>Species: ${species}</p>
                <p>Gender: ${gender}</p>
                <p>Origin: ${originName}</p>
                <img src="${image}" alt="">
            `;
        })
        .catch(error => {
            characterInfo.innerHTML = `<p>Impossible acceder al pokemon</p>`;
        });
}
