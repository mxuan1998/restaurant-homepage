const menuContainer = document.querySelector("#content");

const MENUS = [
    ["Stir fried beef", "minced beef, celery, salt, cumin, soy sauce"],
    ["Egg fried rice", "eggs, rice, soy sauce, salt"],
    ["Boiled broccoli", "broccoli, water, salt"],
    ["Fried potato", "potato, cumin, salt"],
    ["Fried tomato & eggs", "eggs, tomato, salt"],
    ["Beef stew", "beef cubes, radish, water, salt"],
    ["Fried chicken", "chicken, cumin, salt"]
];

const createTableData = (menuData) => {
    const tableData = document.createElement("td");
    tableData.textContent = menuData;
    return tableData;
}

const createTableRow = (menu) => {
    const tableRow = document.createElement("tr");
    tableRow.appendChild(createTableData(menu[0]));
    tableRow.appendChild(createTableData(menu[1]));
    return tableRow;
}

const fillMenuItems = menuTable => {
    MENUS.forEach(menu => {
        menuTable.appendChild(createTableRow(menu));
    });
}

const createMenuHeadings = (menuTable) => {
    const tableRow = document.createElement("tr");
    const tableHeadingMenu = document.createElement("th");
    const tableHeadingIngredients = document.createElement("th");
    
    tableHeadingMenu.textContent = "Menu";
    tableHeadingIngredients.textContent = "Ingredients";

    tableRow.appendChild(tableHeadingMenu);
    tableRow.appendChild(tableHeadingIngredients);

    menuTable.appendChild(tableRow);
}

const createMenuTable = () => {
    const menuTable = document.createElement("table");
    menuTable.classList.add("menu-table");
    createMenuHeadings(menuTable);
    fillMenuItems(menuTable);
    return menuTable;
}

const createMenuImg = () => {
    const img = document.createElement("img");
    img.setAttribute("src", "assets/food.png");
    return img;
}

const menu = () => {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const menuTable = createMenuTable();
    const menuIgm = createMenuImg();
    container.appendChild(menuIgm);
    container.appendChild(menuTable);

    menuContainer.classList.add("backdrop");
    menuContainer.innerHTML = "";
    menuContainer.appendChild(container);
}

export default menu;