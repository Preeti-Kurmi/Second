// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links);
// let a =document.getElementById('main-header');
// a.style.border="5px solid black";
// const addItemsHeading = document.querySelector('.title');

// // Apply styles to make it bold and green
// addItemsHeading.style.fontWeight = 'bold';
// addItemsHeading.style.color = 'green';
//  var items=document.getElementsByClassName("list-group-item");
//  items[2].style.backgroundColor="green";
//  for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
//  }
 // Select the new <li> element by its ID
//const newItem = document.getElementById('new-item');

// Modify the content of the new <li> element
//newItem.textContent = 'Edited New Item (Updated)';

// Use getElementsByClassName to select all elements with class "list-group-item"
//const itemsWithClassName = document.getElementsByClassName('list-group-item');

// Modify the content of the first element with this class
// if (itemsWithClassName.length > 0) {
//   itemsWithClassName[0].textContent = 'Edited Item 1';
// }

// Use getElementsByTagName to select all <li> elements
//const allListItems = document.getElementsByTagName('li');

// Modify the content of the second <li> element
// if (allListItems.length >= 2) {
//   allListItems[1].textContent = 'Edited Item 2';
// }
const secondItem = document.querySelector('#items li:nth-child(2)');
secondItem.style.color = 'green';

// Select all the odd elements and make their background green
const oddItems = document.querySelectorAll('#items li:nth-child(2)');
oddItems.forEach(item => {
  item.style.backgroundColor = 'green';
});

