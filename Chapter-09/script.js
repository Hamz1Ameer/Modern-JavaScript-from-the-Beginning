const itemList = document.getElementById("item-list");
const itemInput = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

const addItem = (event) => {
  event.preventDefault();
  let newItem = itemInput.value;

  if (newItem == "") {
    alert("Please add an Item");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  // console.log(li);

  const createButton = (classes) => {
    const button = document.createElement("button");
    button.className = classes;
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
  };
  const createIcon = (classes) => {
    const icon = document.createElement("i");
    icon.className = classes;
    // console.log(icon);
    return icon;
  };

  const button = createButton("remove-item btn-link text-red");
  // console.log(button);
  li.appendChild(button);

  itemList.appendChild(li);
  checkUI();
  itemInput.value = "";
};

const removeItem = (event) => {
  if (event.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      event.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
};

const filterItem = (e) => {
  const items = document.querySelectorAll("li");
  const text = e.target.value.toLowerCase();
  // console.log(e.target.value);
  items.forEach((item) => {
    const itemName=item.firstChild.textContent.toLowerCase();
    if(itemName.indexOf(text)!=-1){
        item.style.display= 'flex'
    }
    else{
        item.style.display='none'
    }
  });
};

const clearItem = () => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
};

function checkUI() {
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItem);
itemFilter.addEventListener("input", filterItem);
checkUI();
