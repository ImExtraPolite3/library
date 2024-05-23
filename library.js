const myLibrary = [];
let read = '';

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
  const ifRead = document.querySelectorAll('.if-read');
  const confirm = document.getElementById('confirm');
  const clearAllText = document.querySelectorAll('.close-modal');
  let num = 0;

  ifRead.forEach(check => {
    check.addEventListener('click', () => {
      if (check.value == 'read') {
        read = 'read';
      } else {
        read = 'did not read';
      }
    })
  })

  confirm.addEventListener('click', () => {
    const newBook = new Book(title.value, author.value, numOfPages.value, read);
    myLibrary[num] = newBook;
    displayBooks(myLibrary[num].title, myLibrary[num].author, myLibrary[num].numOfPages, myLibrary[num].read);
    removeBook(num);
    num++; 
  })

  clearAllText.forEach(eachText => {
    eachText.addEventListener('click', () => {
      title.value = '';
      author.value = '';
      numOfPages.value = '';
      read = '';
    })
  })
}

function displayBooks(title, author, numOfPages, read) {
  const display = document.getElementById('display-books');
  const deleteBook = document.createElement('button');
  deleteBook.classList.add('delete-book');
  deleteBook.textContent = 'X';
  const eachBook = document.createElement('div');
  eachBook.classList.add('each-book');
  const eachBookTitle = document.createElement('h2');
  eachBookTitle.classList.add('each-book-title');
  eachBookTitle.textContent = title;
  const eachBookAuthor = document.createElement('p');
  eachBookAuthor.classList.add('each-book-author');
  eachBookAuthor.textContent = author;
  const eachBookNumOfPages = document.createElement('p');
  eachBookNumOfPages.classList.add('each-book-num-of-pages');
  eachBookNumOfPages.textContent = numOfPages;
  const eachBookIfRead = document.createElement('p');
  eachBookIfRead.classList.add('each-book-if-read');
  eachBookIfRead.textContent = read;
  display.appendChild(eachBook);
  eachBook.appendChild(deleteBook);
  eachBook.appendChild(eachBookTitle);
  eachBook.appendChild(eachBookAuthor);
  eachBook.appendChild(eachBookNumOfPages);
  eachBook.appendChild(eachBookIfRead);
}

function removeBook(num) {
  const allBooks = document.querySelectorAll('.each-book');
  const deleteBook = document.querySelectorAll('.delete-book');
  const display = document.getElementById('display-books');

  deleteBook.forEach(eachDelete => {
    eachDelete.addEventListener('click', () => {
      console.log(myLibrary[num]);
    })
  })
}

function openModal() {
  const openModalButton = document.querySelector('.open-modal');
  const modal = document.querySelector('.modal');

  openModalButton.addEventListener('click', () => {
    modal.showModal();
  })
}

function closeModal() {
  const closeModalButton = document.querySelectorAll('.close-modal');
  const modal = document.querySelector('.modal');

  closeModalButton.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
      modal.close();
    })
  })
}

openModal();
closeModal();
addBookToLibrary();