let bgContanerEl = document.createElement('div');
bgContanerEl.classList.add('bg-container');
document.body.appendChild(bgContanerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContanerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContanerEl.appendChild(listContainerEl);

let groceryItems = ["Milk","Peanut Butter","Choco Chips","Tomato Sauce","Cup Cakes","Noodles"];
for (let groceryItem of groceryItems) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listContainerEl.appendChild(listItemEl);
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "deliveryMode";
bgContanerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContanerEl.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContanerEl.appendChild(breakEl);

let btnEl = document.createElement("button");
btnEl.classList.add("btn","btn-primary");
btnEl.textContent = "Proceed To Pay";
bgContanerEl.appendChild(btnEl);