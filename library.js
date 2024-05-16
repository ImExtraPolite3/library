const myLibrary = [];

function Book(title, author, numOfPages, read, notRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
}

Book.prototype.ifRead = function() {

}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  const display = document.getElementById('display-books');

  for (let i = 0; i < myLibrary.length; i++) {
    const eachBook = document.createElement('div');
    eachBook.classList.add('each-book');
    eachBook.textContent = myLibrary[i];
    display.appendChild(eachBook);
  }
}

function openModal() {
  const openModalButton = document.querySelector('.open-modal');
  const modal = document.querySelector('.modal');

  openModalButton.addEventListener('click', () => {
    modal.showModal();
  })
}

function closeModal() {
  const closeModalButton = document.getElementById('close-modal');
  const modal = document.querySelector('.modal');

  closeModalButton.addEventListener('click', () => {
    modal.close();
  })
}

openModal();
closeModal();
displayBooks();