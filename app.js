// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links);
let a =document.getElementById('main-header');
a.style.border="5px solid black";
const addItemsHeading = document.querySelector('.title');

// Apply styles to make it bold and green
addItemsHeading.style.fontWeight = 'bold';
addItemsHeading.style.color = 'green';
 var items=document.getElementsByClassName("list-group-item");
 items[2].style.backgroundColor="green";
 for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
 }