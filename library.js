const myLibrary = ['hello', 'this is a book'];

function Book() {
  // the constructor...
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

displayBooks();