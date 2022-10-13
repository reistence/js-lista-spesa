/*
Consegna:
Data una lista della spesa, stampare sulla pagina 
(anche brutalmente, basta che si vedano) gli elementi della 
lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di 
    contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di
 inserire una condizione di uscita, all'interno ciclo while
*/

let grocery = ["apple", "oranges", "milk", "beef", "chicken", "beer"];
console.log(grocery);
const list = document.getElementById("list");
// const itemFieldInput = document.getElementById("item-field");

// const addBtn = document.getElementById("add");
// const removeBtn = document.getElementById("remove");

// addBtn.addEventListener("click", function () {
//   const itemField = itemFieldInput.value;

//   grocery.push(itemField);

//   console.log(itemField);
//   console.log(grocery);
// });

// console.log(grocery);

let i = 0;

while (i <= grocery.length) {
  const thisItem = grocery[i];
  list.innerHTML += ` <li class="item">${thisItem}</li>`;
  i++;
}
