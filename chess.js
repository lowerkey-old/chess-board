/*
  chess.js
  Joshua Marshall Moore
  January 19th, 2016

  http://blog.teamtreehouse.com/implementing-native-drag-and-drop
*/

var dragged;


document.addEventListener('dragstart', function(event){
  dragged = event.target;
  event.target.style.opacity = 0.5;
  console.log(event.target);
  
}, true);

document.addEventListener('dragend', function(event){
  event.target.style.opacity = '';
}, true);

document.addEventListener('dragover', function(event){
  event.preventDefault();

  if(event.target.children.length > 1){
     dragged.style.offset.left = '2px';
     dragged.style.offset.top = '2px';
  };
}, true);

document.addEventListener('dragenter', function(event){
  if(event.target.className == 'field'){
    event.target.style.background = 'purple';
  }
}, true);

document.addEventListener('dragleave', function(event){
  if(event.target.className == 'field'){
     event.target.style.background = '';
     dragged.parentNode.removeChild(dragged);
     // event.target.appendChild( dragged );
  }
}, true);

document.addEventListener('drop', function(event){
  //  event.stopImmediatePropagation();
  if(event.target.className == 'piece'){
    event.stopImmediatePropagation();
    return;
  }else{
    event.target.appendChild( dragged );
  }
}, true);

document.addEventListener('dragend', function(event){
  delete dragged;
}, true);

document.querySelector('.piece').addEventListener('DOMNodeInserted', function(event){
  var child = event.target.querySelector('img')[0]; 
  event.target.parentNode.appendChild(child);
  event.target.removeChild(child);
}, false);

