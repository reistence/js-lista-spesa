// Create grocery list
let grocery = ["apple", "oranges", "milk", "beef", "chicken", "beer"];
console.log(grocery);
// grab elements from dom
const list = document.getElementById("list");
const itemFieldInput = document.getElementById("item-field");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");

// add item
addBtn.addEventListener("click", function () {
  //grab input value
  let itemField = itemFieldInput.value;

  if (itemField != "") {
    //push input.value to grocery
    grocery.push(itemField);
    // add item to list
    list.innerHTML += ` <li class="item">${itemField}</li>`;
    // clean input field
    itemFieldInput.value = "";
  }
});

//remove btn
removeBtn.addEventListener("click", function () {
  if (grocery.length > 0) {
    //remove last item from grocery
    grocery.pop();
    //remove list last itme
    list.removeChild(list.lastElementChild);
  }
});

let i = 0;
while (i < grocery.length) {
  const thisItem = grocery[i];
  // on each iteration add in list li
  list.innerHTML += ` <li class="item">${thisItem}</li>`;
  // increse i
  i++;
}
