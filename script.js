let buttonValue = document.getElementById('button').value;
let button = document.getElementById("ItemsDiv");


class MenuItem{
    constructor(name, price){
        this.name = name;
        this.price = price;
        //add , icon to the constructer parameter
        //this.icon = icon;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getIcon(){
        return this.icon;
    }
    setPrice(price){
        this.price = price;
    }
}

// Get the parent DIV, add click listener...
document.getElementById("ItemsDiv").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("button.menuItem")) {
    //alert("button element clicked!");
    let value = e.target.value;
    createListItem(value);
	}
});


let selectedItemsList = []

//change alerts to mod screens/or animate to show off item
function createListItem(value){
    let image 
    if (value == '1'){ 
        let cakeItem = new MenuItem('Cake', 3);
        selectedItemsList.push(cakeItem);
        alert("Added cake to the order!")
    }
    else if (value == '2'){
        let coffeeItem = new MenuItem('Coffee', 5);
        selectedItemsList.push(coffeeItem);
        alert("Added coffee to the order!")
    }
    else if (value == '3'){
        let teaItem = new MenuItem('Tea', 3);
        selectedItemsList.push(teaItem);
        alert("Added Tea to the order!")
    }
    else if (value == '4'){
        let strawberryItem = new MenuItem('Strawberry', 2);
        selectedItemsList.push(strawberryItem);
        alert("Added strawberry to the order!")
    }
    else if (value == '5'){
        let donutItem = new MenuItem('Donut', 2);
        selectedItemsList.push(donutItem);
        alert("Added Donut to the order!")
    }
    else if (value == '6'){
        let icecreamItem = new MenuItem('Ice Cream', 4);
        selectedItemsList.push(icecreamItem);
        alert("Added Ice Cream to the order!")
    }
    else if (value == '7'){
        let cookieItem = new MenuItem('Cookie', 2);
        selectedItemsList.push(cookieItem);
        alert("Added Cookie to the order!")
    }
    else if (value == '8'){
        let milkItem = new MenuItem('Milk', 2);
        selectedItemsList.push(milkItem);
        alert("Added Milk to the order!")
    }
    else if (value == '9'){
        let burgercomboItem = new MenuItem('Burger Combo', 7);
        selectedItemsList.push(burgercomboItem);
        alert("Added Burger Combo to the order!")
    }
    countItems();
    drawOrder();

}

function drawOrder(){
    let ul = document.getElementById("list");
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

        //creates id for the created span
    for (let i=0; i< selectedItemsList.length; i++){
        createSpan(i);
    }
}


function createSpan(i){
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    let span = document.createElement('span');
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';
    removeBtn.id = 'removeItemBtn';
    removeBtn.value = 'removeItemBtn';
    removeBtn.className = 'removeButton';


    ul.appendChild(span);
    
    span.appendChild(removeBtn);
    span.appendChild(li);
    
    li.innerHTML = selectedItemsList[i].name;
    span.id = i;
}


//spits out example: Tea: 2, or there are two teas
function countItems(){
    let count = {};
    for (let i = 0; i < selectedItemsList.length; i++) {
        const element = selectedItemsList[i].name;
      
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
          
        }
      }
    console.log(count);
}

//document.getElementById("orderItems").addEventListener("click", )
//catch the bubble in the container

document.getElementById("orderItems").addEventListener("click",function(b) {
	// e.target was the clicked element
  if (b.target) {
    let id = b.target.id;
    removeItem(id);
	}
});

function removeItem(){
    let index = document.getElementById("span");
    selectedItemsList.splice(index,1);
    drawOrder();

}
    
// calculate total of duplicates for price in seperate function
//TOTAL BUTTON links to this function first; 
//figures out duplicates, spit out amount of each price item
//example: $2: 1, or one $2 item

function calcTotal(){
    let totalAmount = 0;
    for (let index = 0; index < selectedItemsList.length; index++) {
        let itemPriceNum = selectedItemsList[index].price;
        totalAmount += itemPriceNum;
        console.log(totalAmount);
      }
      return totalAmount;
}

//total and reset buttons
document.getElementById("calculate").addEventListener("click", drawTotal);
document.getElementById("reset").addEventListener("click", newOrder);


function drawTotal(){
    let cal = calcTotal();
    document.getElementById('totalPrice').innerHTML = "$"+ cal + "<br>";
}

function newOrder(){
    let reset = selectedItemsList.splice(0,selectedItemsList.length);
    document.getElementById('totalPrice').innerHTML = reset + "<br>";
}


//function to delete an item from the list

//featues: select own background and theme

//maybe have multiplayer function in the future- chef and server
//server sends order to chef, chef 'cooks order' and once complete, sends alert to server that it is done!


