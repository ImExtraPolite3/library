const myLibrary = [];
let read = false;

function Book(title, author, numOfPages) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
}

Book.prototype.ifRead = function() {
  const yesRead = document.getElementById('read');
  const noRead = document.getElementById('not-read');

  yesRead.addEventListener('click', () => {
    read = true;
    this.read = read;
  });

  noRead.addEventListener('click', () => {
    read = false;
    this.read = read
  })
}

function addBookToLibrary() {
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
addBookToLibrary(); 