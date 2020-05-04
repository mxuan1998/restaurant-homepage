const homeContainer = document.querySelector("#content");

const createDescription = (text) => {
    const description = document.createElement("h2");
    description.innerHTML = text;
    return description;
}

const createQuote = (text) => {
    const quote = document.createElement("p");
    quote.textContent = text;
    return quote;
}

const createHomeDisplay = () => {
    const description = createDescription("Welcome to Xuan's restaurant<br>the best restaurant in the world!");
    const quote = createQuote('"Amazing experience at this restaurant!" - J');
    homeContainer.innerHTML = "";
    homeContainer.classList.remove("backdrop");
    homeContainer.appendChild(description);
    homeContainer.appendChild(quote);
}

export default homepage;