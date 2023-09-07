const itemList= document.getElementById('item-list');
const itemInput= document.getElementById('item-input');
const itemForm= document.getElementById('item-form');

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


itemForm.addEventListener('submit', addItem)