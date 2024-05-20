const myLibrary = [];
let read = false;

function Book(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const numOfPages = document.getElementById('num-of-pages');
  const yesRead = document.getElementById('read');
  const noRead = document.getElementById('not-read');
  const confirm = document.getElementById('confirm');

  yesRead.addEventListener('click', () => {
    read = true;
    const newBook = new Book(title.value, author.value, numOfPages.value, read);

    confirm.addEventListener('click', () => {
      whenConfirm(newBook.title, newBook.author, newBook.numOfPages, newBook.read);

      title.value = '';
      author.value = '';
      numOfPages.value = '';
      read = false;
    })
  });

  noRead.addEventListener('click', () => {
    read = false;
    const newBook = new Book(title.value, author.value, numOfPages.value, read);

    confirm.addEventListener('click', () => {
      whenConfirm(newBook.title, newBook.author, newBook.numOfPages, newBook.read);
    })
  });
}

function whenConfirm(title, author, numOfPages, read) {
  console.log(`${title}, ${author}, ${numOfPages}, ${read}`);
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