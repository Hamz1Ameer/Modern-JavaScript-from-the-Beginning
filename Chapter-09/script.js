const itemList= document.getElementById('item-list');
const itemInput= document.getElementById('item-input');
const itemForm= document.getElementById('item-form');
const clearBtn= document.getElementById('clear');

const addItem=(event)=>{
    event.preventDefault();
    let newItem= itemInput.value;

    if(newItem ==''){
        alert('Please add an Item');
        return;
    }

    const li= document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    // console.log(li);
    
    const createButton=(classes)=>{
        const button = document.createElement("button");
        button.className=classes;
        const icon= createIcon("fa-solid fa-xmark")
        button.appendChild(icon)
        return button;
    }
    const createIcon=(classes)=>{
        const icon = document.createElement("i");
        icon.className=classes;
        // console.log(icon);
        return icon;    
    }

    const button =createButton("remove-item btn-link text-red");
    // console.log(button);
    li.appendChild(button);

    itemList.appendChild(li)
    itemInput.value ='';
}

const removeItem=(event)=>{
console.log(event.target.parentElement.classList)
if(event.target.parentElement.classList.contains('remove-item')){
       event.target.parentElement.parentElement.remove()
}
}

const clearItem=()=>{
    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }

}
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItem)