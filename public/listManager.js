class ListItem {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

let listItems = [
  new ListItem("GET All", "https://jsonplaceholder.typicode.com/todos"),
  new ListItem("GET Single", "https://jsonplaceholder.typicode.com/todos/2"),
];

function listItemCardClicked(url) {
  document.getElementById("urlInput").value = url;
}

const generateListElements = () => {
  let listItemCards = [];
  let tempCard;
  for (let i = 0; i < listItems.length; i++) {
    tempCard = document.createElement("div");
    tempCard.setAttribute("class", "listItemCard");
    tempCard.setAttribute(
      "onClick",
      `listItemCardClicked("${listItems[i].url.toString()}")`,
    );
    tempCard.innerText = listItems[i].name;
    listItemCards.push(tempCard);
  }
  document.getElementById("listContainer").append(...listItemCards);
};
