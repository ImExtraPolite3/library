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
    myLibrary[num] = newBook.title;
    displayBooks(num);
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

function displayBooks(num) {
  const display = document.getElementById('display-books');

  const eachBook = document.createElement('div');
  eachBook.classList.add('each-book');
  eachBook.textContent = myLibrary[num];
  display.appendChild(eachBook);
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