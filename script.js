let buttonValue = document.getElementById('button').value;
let button = document.getElementById("ItemsDiv");


class MenuItem{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
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


function createListItem(value){
    if (value == '1'){
        let cakeItem = new MenuItem('Cake', 3);
        selectedItemsList.push(cakeItem);
        printlist();
        alert("Added cake to the order!")
    }
    else if (value == '2'){
        let coffeeItem = new MenuItem('Coffee', 5);
        selectedItemsList.push(coffeeItem);
        printlist();
        alert("Added coffee to the order!")
    }
    else if (value == '3'){
        let teaItem = new MenuItem('Tea', 3);
        selectedItemsList.push(teaItem);
        printlist();
        alert("Added Tea to the order!")
    }
    else if (value == '4'){
        let strawberryItem = new MenuItem('Strawberry', 2);
        selectedItemsList.push(strawberryItem);
        printlist();
        alert("Added strawberry to the order!")
    }

}


function printlist(){
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    ul.appendChild(li);
    for (let i=0; i< selectedItemsList.length; i++){
        li.innerHTML = selectedItemsList[i].name + "<br>";
    }
}




// create a new function to detect duplicates in the array, then count the duplicates
// 
// calculate total of duplicates for price in seperate function

//function to delete an item from the list

//featues: select own background and theme

//maybe have multiplayer function in the future- chef and server
//server sends order to chef, chef 'cooks order' and once complete, sends alert to server that it is done!


