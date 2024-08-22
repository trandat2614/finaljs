const fruitData = {
  Kiwis: ["kiwi1.jpg", "kiwi2.jpg", "kiwi3.jpg"],
  Lemons: ["lemon1.jpg", "lemon2.jpg"],
  Strawberries: ["strawberry1.jpg", "strawberry2.jpg", "strawberry3.jpg"],
};

if (!localStorage.getItem("fruitData")) {
  localStorage.setItem("fruitData", JSON.stringify(fruitData));
}

function loadFruitList() {
  const fruitList = document.getElementById("fruit-list");
  const fruits = JSON.parse(localStorage.getItem("fruitData"));

  for (let fruit in fruits) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = fruit;
    listItem.setAttribute("data-fruit", fruit);
    fruitList.appendChild(listItem);
  }
}

function loadFruitImages(fruit) {
  const imageDisplay = document.getElementById("image-display");
  imageDisplay.innerHTML = "";

  const fruits = JSON.parse(localStorage.getItem("fruitData"));
  const images = fruits[fruit];

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = `images/${image}`;
    imgElement.alt = fruit;
    imageDisplay.appendChild(imgElement);
  });

  const listItems = document.querySelectorAll("#fruit-list .list-group-item");
  listItems.forEach((item) => {
    if (item.getAttribute("data-fruit") === fruit) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

document.getElementById("fruit-list").addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    const selectedFruit = e.target.getAttribute("data-fruit");
    loadFruitImages(selectedFruit);
  }
});

loadFruitList();
