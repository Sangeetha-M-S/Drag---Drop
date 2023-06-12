// Get the containers and success message element
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const successMessage = document.getElementById('successMessage');

// Add event listeners to enable dragging and dropping
const items = container1.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('dragstart', dragStart);
}

container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Drag and Drop Functions
let draggedItem = null;

function dragStart(e) {
  draggedItem = this;
  e.dataTransfer.setData('text', ''); 
  this.classList.add('dragging');
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add('dragover');
}

function drop(e) {
  e.preventDefault();
  this.classList.remove('dragover');

  if (!draggedItem) return;

  this.appendChild(draggedItem);
  draggedItem.classList.remove('dragging');
  draggedItem = null;

  showSuccessMessage('Item dropped successfully!');
}

// Reset Function
function reset() {
  container1.innerHTML = `
    <div class="item" draggable="true">
      <div class="image-container">
        <img src="assets/cet.jpg" alt="Image">
      </div>
    </div>
    <div class="item" draggable="true">
      <i class="fas fa-star"></i>
    </div>
    <div class="item" draggable="true">Item 3</div>
  `;
  container2.innerHTML = '';
  successMessage.innerHTML = '';

  // Reattach event listeners to enable dragging and dropping
  const items = container1.getElementsByClassName('item');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('dragstart', dragStart);
  }
}

// To show success message
function showSuccessMessage(message) {
  successMessage.innerHTML = message;
  setTimeout(() => {
    successMessage.innerHTML = '';
  }, 800);
}
