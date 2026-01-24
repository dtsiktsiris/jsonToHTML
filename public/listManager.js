class ListItem {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

let listItems = [
  new ListItem("first Request", "https://jsonplaceholder.typicode.com/todos"),
  new ListItem("second Request", "test"),
];

const generateListElements = () => {
  let listItemCards = [];
  let tempCard;
  for (let i = 0; i < listItems.length; i++) {
    tempCard = document.createElement("div");
    tempCard.setAttribute("class", "listItemCard");
    tempCard.innerText = listItems[i].name;
    listItemCards.push(tempCard);
  }
  document.getElementById("listContainer").append(...listItemCards);
};
