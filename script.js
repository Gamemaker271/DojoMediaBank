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
      i.innerHTML = '<p class="item-id">0</p>';
      i.innerHTML += '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png">';
      i.innerHTML += '<p>Title</p>';
      i.innerHTML += '<label>1/1/2000</label>';
      i.innerHTML += "<button onclick="Edit()">Edit Item</button><button onclick="Delete()">Delete Item</button>"l;
    });
  }
  else{
    ITEMS.forEach(i => {
      i.style.borderColor = 'black';
      i.innerHTML = '<p class="item-id">0</p>';
      i.innerHTML += '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png">';
      i.innerHTML += '<p>Title</p>';
      i.innerHTML += '<label>1/1/2000</label>';
    });
  }
}

function Edit(){
  
}

function Delete(){
  
}
