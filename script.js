let stadiums = [];

const saveStadium = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = parseFloat(document.getElementById("price").value);
    const type = document.getElementById("type").value;

    const stadium = {
        name: name,
        description: description,
        price: price,
        type: type
    };

    stadiums.push(stadium);
    displayStadiums();
};

function sortByPrice() {
    stadiums.sort((a, b) => a.price - b.price);
    displayStadiums();
}

function displayStadiums(stadiumsToDisplay = stadiums) {
    const stadiumList = document.getElementById("stadiumList");
    stadiumList.innerHTML = "";

    stadiumsToDisplay.forEach((stadium, index) => {
        const stadiumInfo = document.createElement("div");
        stadiumInfo.classList.add("stadium-info");

        stadiumInfo.innerHTML = `
            <h3>${stadium.name}</h3>
            <p><strong>Description:</strong> ${stadium.description}</p>
            <p><strong>Price:</strong> ${stadium.price}</p>
            <p><strong>Type:</strong> ${stadium.type}</p>
            <button type="button" class="deleteButton" onclick="deleteStadium(${index})">Delete</button>
        `;

        stadiumList.appendChild(stadiumInfo);
    });
}

function calculateTotalPrice() {
    let totalPrice = 0;

    stadiums.forEach((stadium) => {
        totalPrice += stadium.price;
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}

function findStadium() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    const searchResults = stadiums.filter((stadium) => {
        return stadium.name.toLowerCase().includes(findInput);
    });

    displayStadiums(searchResults);
}

function cancelSearch() {
    document.getElementById("find_input").value = "";
    displayStadiums();
}

function deleteStadium(index) {
    stadiums.splice(index, 1);
    displayStadiums();
}

function toggleAside() {
    const animalAside = document.getElementById("stadiumAside");
    animalAside.classList.toggle("hidden");
}