let buttonValue = document.getElementById('button').value;
let button = document.getElementById("ItemsDiv");


class MenuItem{
    constructor(name, price,urlimg){
        this.name = name;
        this.price = price;
        this.urlimg = urlimg;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    geturlimg(){
        return this.urlimg;
    }
    setPrice(price){
        this.price = price;
    }
}

//  get modal and btn that closes it
let modal = document.getElementById("popupModal");
let span = document.getElementsByClassName("close")[0];

// Get the parent DIV, add click listener...
document.getElementById("ItemsDiv").addEventListener("click",function(e) {
//  open modal window
    modal.style.display = "block";
// identify the clicked element(btn)
  if (e.target && e.target.matches("button.menuItem")) {
    let value = e.target.value;
    createListItem(value);
}
});

// close when we click on <span>(x)
span.onclick = function() {
    modal.style.display = "none";
// close when we click anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    }

let selectedItemsList = []

//  change alerts to mod screens/or animate to show off item
function createListItem(value){
    if (value == '1'){ 
        let cakeItem = new MenuItem('Cake', 3, "img/cake.png");
        selectedItemsList.push(cakeItem);
        document.getElementById('popupName').innerHTML = "Added cake to the order!" + "<br>";
    }
    else if (value == '2'){
        let coffeeItem = new MenuItem('Coffee', 5, "img/coffee.png");
        selectedItemsList.push(coffeeItem);
        document.getElementById('popupName').innerHTML = "Added coffee to the order!" + "<br>";
    }
    else if (value == '3'){
        let teaItem = new MenuItem('Tea', 3, "img/tea.png");
        selectedItemsList.push(teaItem);
        document.getElementById('popupName').innerHTML = "Added tea to the order!" + "<br>"
    }
    else if (value == '4'){
        let strawberryItem = new MenuItem('Strawberry', 2, "img/berry1.png");
        selectedItemsList.push(strawberryItem);
        document.getElementById('popupName').innerHTML = "Added strawberry to the order!" + "<br>"
    }
    else if (value == '5'){
        let donutItem = new MenuItem('Donut', 2, "img/donut.png");
        selectedItemsList.push(donutItem);
        document.getElementById('popupName').innerHTML = "Added Donut to the order!" + "<br>"
    }
    else if (value == '6'){
        let icecreamItem = new MenuItem('Ice Cream', 4, "img/icecream.png");
        selectedItemsList.push(icecreamItem);
        document.getElementById('popupName').innerHTML = "Added Ice Cream to the order!" + "<br>"
    }
    else if (value == '7'){
        let cookieItem = new MenuItem('Cookie', 2, "img/cookie.png");
        selectedItemsList.push(cookieItem);
        document.getElementById('popupName').innerHTML = "Added Cookie to the order!" + "<br>"
    }
    else if (value == '8'){
        let milkItem = new MenuItem('Milk', 2, "img/milk.png");
        selectedItemsList.push(milkItem);
        document.getElementById('popupName').innerHTML = "Added Milk to the order!" + "<br>"
    }
    else if (value == '9'){
        let burgercomboItem = new MenuItem('Burger Combo', 7, "img/burgercombo.png");
        selectedItemsList.push(burgercomboItem);
        document.getElementById('popupName').innerHTML = "Added Burger Combo to the order!" + "<br>"
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

//  creates a remove button next to the listed name + icon image
function createSpan(i){
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    let span = document.createElement('span');
    let removeBtn = document.createElement('button');
    let urlimg = document.createElement('img');
    //  adding all the info to the remove btn
    removeBtn.textContent = 'x';
    removeBtn.id = 'removeItemBtn';
    removeBtn.value = 'removeItemBtn';
    removeBtn.className = 'removeButton';
    urlimg.src = selectedItemsList[i].urlimg;
    //  create a span with icon and remove btn inside
    ul.appendChild(span);
    span.appendChild(removeBtn);
    span.appendChild(li);
    //  create icon 
    urlimg.width = 50;
    urlimg.height = 50;
    li.appendChild(urlimg);
    span.id = i;
}


//  spits out example: Tea: 2, or there are two teas
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



document.getElementById("list").addEventListener("click",function(b) {
// detect the clicked item
  if (b.target) {
    let id = b.target.id;
    removeItem(id);
	}
}
);


//  this deletes/removes the item from the selected items list/array
function removeItem(){
    let index = document.getElementById("span");
    //if (index.id === "removeItemBtn") {
        selectedItemsList.splice(index,1);
        drawOrder();
      
    //}
}


    
//figure out the price of items and return a total$
function calcTotal(){
    let totalAmount = 0;
    for (let index = 0; index < selectedItemsList.length; index++) {
        let itemPriceNum = selectedItemsList[index].price;
        totalAmount += itemPriceNum;
        console.log(totalAmount);
      }
      return totalAmount;
}

//  total and reset buttons
document.getElementById("calculate").addEventListener("click", drawTotal);
document.getElementById("reset").addEventListener("click", newOrder);


function drawTotal(){
    let cal = calcTotal();
    document.getElementById('totalPrice').innerHTML = "$"+ cal + "<br>";
}

function newOrder(){
    selectedItemsList= [];
    drawFromArray();
}

function drawFromArray(){
    document.getElementById('list').innerHTML = "" + "<br>";
    document.getElementById('totalPrice').innerHTML = ""+ "<br>";
}


//  featue ideas: 
//  select own background and theme
//  create an area to display previous orders, and open them as receipt in a modal window
//  maybe have multiplayer function in the future- chef and server
//  server sends order to chef, chef 'cooks order' and once complete, sends alert to server that it is done!

