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
// const secondItem = document.querySelector('#items li:nth-child(2)');
// secondItem.style.color = 'green';

// // Select all the odd elements and make their background green
// const oddItems = document.querySelectorAll('#items li:nth-child(2)');
// oddItems.forEach(item => {
//   item.style.backgroundColor = 'green';
// });
// var item=document.querySelector("#items");
// console.log(item.parentNode);
// item.parentNode.style.backgroundColor="pink";
// console.log(item.parentNode.parentNode.parentNode);
//ParentElement
// var item=document.querySelector("#items");
// console.log(item.parentElement);
// item.parentNode.style.backgroundColor="yellow";
// console.log(item.parentElement.parentElement.parentElement);
//Firstchild
//console.log(item.firstChild);
//FirstChildElement
//console.log(item.firstElementChild);
//item.firstElementChild.style.backgroundColor="pink";
//item.firstElementChild.textContent="HEllo World";
//lastchild
//console.log(item.lasChild);
//FirstChildElement
//console.log(item.lastElementChild);
//item.lastElementChild.style.backgroundColor="pink";
//item.lastElementChild.textContent="HEllo World";
//nextsibling
//console.log(item.nextSibling);
//console.log(item.nextElementSibling);
//previous sibling
//console.log(item.previousSibling);
//previous sibling Element
//console.log(item.previousElementSibling);
//item.previousElementSibling.style.color="red";
//new div
//v//ar a = document.createElement('div');
//console.log(a);
// a.className="hello";
// a.id="h";
// a.setAttribute('title','heelo world');
// console.log(a);
// var b=document.createTextNode("Hello word");
// a.append(b);
// console.log(a);
// var container=document.querySelector("header .container");
// var h1=document.querySelector("header h1");
// console.log(a);
// container.insertBefore(a,h1);
// a.style.fontSize="40px";
// // Get the <ul> element with id "items"
// const itemsList = document.getElementById('items');

// Add event listeners to delete buttons
//itemsList.addEventListener('click', function(e) {
 // if (e.target.classList.contains('delete-item')) {
    // Remove the parent <li> of the delete button
   // e.target.parentElement.remove();
  //}
//});

// Add edit button next to the delete icon for each <li>
//const listItems = document.querySelectorAll('li');
//listItems.forEach(function(item) {
  // Create an edit button element
  //const editButton = document.createElement('button');
  //editButton.className = 'btn btn-primary btn-sm ml-2'; // Bootstrap classes
  //editButton.textContent = 'Edit'; // Button text

  // Append the edit button to the <li>
  //item.appendChild(editButton);
//});
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }