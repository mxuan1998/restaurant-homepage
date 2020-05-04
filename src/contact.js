const contactContainer = document.querySelector("#content");

const createTableData = (data) => {
    const tableData = document.createElement("td");
    tableData.innerHTML = date;
    return tableData;
}

const createTableHeading = (heading) => {
    const tableHeading = document.createElement("th");
    tableHeading.innerHTML = heading;
    return tableHeading;
}

const createTableRow = (heading, data) => {
    const tableRow = document.createElement("tr");
    tableRow.appendChild(createTableHeading(heading));
    tableRow.appendChild(createTableData(data));
    return tableRow;
}

const createTable = () => {
    const table = document.createElement("table");
    table.classList.add("contact-table");
    table.appendChild(createTableRow("Email", "yourname@email.com"));
    table.appendChild(createTableRow("Phone number", "123-456-789"));
    table.appendChild(createTableRow("Address", "1 Building, 1 Road, 1 Corner, United States"));
    return table;
}

const createTitle = (text) => {
    const title = document.createElement("h2");
    title.textContent = text;
    return title;
}

const createContactDisplay = () => {
    const title = createTitle("Contact us");
    const infoTable = createTable();

    contactContainer.classList.add("backdrop");
    contactContainer.innerHTML = "";
    contactContainer.appendChild(title);
    contactContainer.appendChild(infoTable);
}

export default contact;