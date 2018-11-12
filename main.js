 let item = document.querySelector('.item');
 let field = document.getElementById('field');
 let ourList = document.getElementById('ourList');

 item.addEventListener('submit', (e) => {
   e.preventDefault()
   createItem(field.value);
 })

 function createItem(x) {
   let ourHTML = `<li>${x}<button id="listBtn" onclick='deleteItem(this)'>Delete</button></li>`;
   ourList.insertAdjacentHTML('beforeend', ourHTML)
   //  delete input after submission
   field.value = '';
 }

 function deleteItem(deleteElement) {
    deleteElement.parentElement.remove();
 }