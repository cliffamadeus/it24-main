// JavaScript for handling the modal

// Function to display the modal
function openModal() {
  document.getElementById('it24-main-index-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('it24-main-index-modal').style.display = 'none';
}

// Event listeners
document.getElementById('modalButton').addEventListener('click', openModal);
document.getElementById('closeModalButton').addEventListener('click', closeModal);
