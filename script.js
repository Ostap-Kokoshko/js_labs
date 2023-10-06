let stadiums = [];
let searchResults = stadiums.slice();
let sortByPriceFlag = false;
let editingIndex = -1;

function generateUniqueId() {
    const timestamp = Date.now();
    const randomValue = Math.random();

    const uniqueId = `${timestamp}-${randomValue}`;

    return uniqueId;
}

const saveStadium = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = parseFloat(document.getElementById("price").value);
    const type = document.getElementById("type").value;

    if (name.trim() === "" || description.trim() === "" || isNaN(price) || type.trim() === "") {
        alert("Будь ласка, заповніть всі поля перед збереженням стадіону.");
        return;
    }

    const isDuplicate = stadiums.some((stadium) => {
        return (
            stadium.name === name &&
            stadium.description === description &&
            stadium.price === price &&
            stadium.type === type
        );
    });

    if (isDuplicate) {
        alert("Цей стадіон вже існує. Введіть унікальні дані.");
        return; // Не зберігати дублікат
    }

    const stadium = {
        id: generateUniqueId(),
        name: name,
        description: description,
        price: price,
        type: type
    };

    stadiums.push(stadium);

    const findInput = document.getElementById("find_input").value.toLowerCase();

    if (findInput.trim() === "") {
        searchResults = stadiums.slice();
    } else {
        searchResults = stadiums.filter((stadium) => {
            return stadium.name.toLowerCase().includes(findInput);
        });
    }

    displayStadiums(searchResults);
};

function sortByPrice() {
    sortByPriceFlag = !sortByPriceFlag;

    if (sortByPriceFlag) {
        searchResults.sort((a, b) => a.price - b.price);
    } else {
        searchResults.sort((a, b) => b.price - a.price);
    }

    displayStadiums(searchResults);
}

function displayStadiums(stadiumsToDisplay = stadiums) {
    const stadiumList = document.getElementById("stadiumList");
    stadiumList.innerHTML = "";

    stadiumsToDisplay.forEach((stadium, id) => {
        const stadiumInfo = document.createElement("div");
        stadiumInfo.classList.add("stadium-info");

        stadiumInfo.innerHTML = `
            <h3>${stadium.name}</h3>
            <p><strong>Description:</strong> ${stadium.description}</p>
            <p><strong>Price:</strong> ${stadium.price}</p>
            <p><strong>Type:</strong> ${stadium.type}</p>
            <button type="button" class="deleteButton" onclick="deleteStadium(${id})">Delete</button>
            <button type="button"  class="editStadium" onclick="editStadium(${id})">Edit</button>
        `;

        stadiumList.appendChild(stadiumInfo);
    });
}

function calculateTotalPrice() {
    let totalPrice = 0;

    const stadiumListToCalculate = searchResults.length > 0 ? searchResults : stadiums;

    stadiumListToCalculate.forEach((stadium) => {
        totalPrice += stadium.price;
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}

function findStadium() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    if (findInput.trim() === "") {
        searchResults = stadiums.slice();
    } else {
        searchResults = stadiums.filter((stadium) => {
            return stadium.name.toLowerCase().includes(findInput);
        });
    }

    sortByPrice(searchResults);
    calculateTotalPrice();

    displayStadiums(searchResults);
}

function cancelSearch() {
    document.getElementById("find_input").value = "";
    searchResults = stadiums.slice();

    sortByPrice();
    calculateTotalPrice();

    displayStadiums(searchResults);
}

function deleteStadium(id) {
    stadiums.splice(id, 1);
    searchResults = stadiums.slice();
    displayStadiums(searchResults);
}

function toggleAside() {
    const stadiumAside = document.getElementById("stadiumAside");
    stadiumAside.classList.toggle("hidden");
}

function editStadium(id) {
    const editMenu = document.getElementById("editStadiumMenu");
    const stadiumToEdit = stadiums[id];

    document.getElementById("editName").value = stadiumToEdit.name;
    document.getElementById("editDescription").value = stadiumToEdit.description;
    document.getElementById("editPrice").value = stadiumToEdit.price;
    document.getElementById("editType").value = stadiumToEdit.type;

    editMenu.classList.remove("hidden");

    editingIndex = id;
}

function confirmEdit() {
    const editedStadium = {
        name: document.getElementById("editName").value,
        description: document.getElementById("editDescription").value,
        price: parseFloat(document.getElementById("editPrice").value),
        type: document.getElementById("editType").value
    };

    if (editedStadium.name.trim() === "" || editedStadium.description.trim() === "" || isNaN(editedStadium.price) || editedStadium.type.trim() === "") {
        alert("Будь ласка, заповніть всі поля перед збереженням змін.");
        return;
    }

    const isDuplicate = stadiums.some((stadium, index) => {
        return (
            index !== editingIndex &&
            stadium.name === editedStadium.name &&
            stadium.description === editedStadium.description &&
            stadium.price === editedStadium.price &&
            stadium.type === editedStadium.type
        );
    });

    if (isDuplicate) {
        alert("Цей стадіон вже існує. Введіть унікальні дані.");
        return;
    }

    if (editingIndex >= 0 && editingIndex < stadiums.length) {
        stadiums[editingIndex] = editedStadium;
    }

    const editMenu = document.getElementById("editStadiumMenu");
    editMenu.classList.add("hidden");

    const findInput = document.getElementById("find_input").value.toLowerCase();

    if (findInput.trim() === "") {
        searchResults = stadiums.slice();
    } else {
        searchResults = stadiums.filter((stadium) => {
            return stadium.name.toLowerCase().includes(findInput);
        });
    }

    displayStadiums(searchResults);
}

function cancelEdit() {
    const editMenu = document.getElementById("editStadiumMenu");
    editMenu.classList.add("hidden");
    displayStadiums();
}