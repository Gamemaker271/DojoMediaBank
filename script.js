var items = [
  {
    id: 0,
    image: "a.png",
    name: "photo",
    date: "1/1/2026"
  },
  {
    id: 1,
    image: "b.png",
    name: "photo 2",
    date: "1/1/2000"
  }
];
const ITEMS = document.querySelectorAll('.item');

var selectMode = false;

var selected = 0;

function SelectThis(_id){
  
}

function Add(){
  
}

function Select(){
  if(selectMode){
    selectMode = false;
  }
  else{
    selectMode = true;
  }
  if(selectMode){
    ITEMS.forEach(i => {
      i.style.borderColor = 'blue';
      i.innerHTML += '<button onclick="Edit()">Edit Item</button><button onclick="Delete()">Delete Item</button>'
    });
  }
  else{
    ITEMS.forEach(i => {
      i.style.borderColor = 'black';
      i.innerHTML -= '<button onclick="Edit()">Edit Item</button><button onclick="Delete()">Delete Item</button>'
    });
  }
}

function Edit(){
  
}

function Delete(){
  
}
