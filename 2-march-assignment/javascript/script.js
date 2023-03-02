
const button = document.getElementById("submit")

let itemDetails={
    itemName:"",
    itemPrice:""
};
const getItemDetails = () =>{
    let itemName=document.getElementById("itemName").value;
    let itemPrice=document.getElementById("itemPrice").value;
    itemDetails.itemName=itemName;
    itemDetails.itemPrice=itemPrice;
    return itemDetails;
}

const getIncrementValue = () =>{
    const priceIncrease = Number(prompt("Enter the price to be increased"));
    return priceIncrease;
}
function displayItemDetails(event) {
    event.preventDefault();
    itemDetails=getItemDetails();
    let incrementValue = getIncrementValue();
    let displayItemDetails=`The item Name is ${itemDetails.itemName.toUpperCase()} and the item price is ${Number(itemDetails.itemPrice) + incrementValue} `;
    const form= document.querySelector('form');
    form.innerHTML=displayItemDetails;
    
}

button.addEventListener("click", displayItemDetails);


