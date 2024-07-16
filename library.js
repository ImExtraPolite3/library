const myLibrary = [];
let read = '';

function Book(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function getTitle() {
  const title = document.getElementById('title');
  const no_name = document.querySelector('.no-name');

  if (title.value === '') {
    no_name.classList.remove('hide');
    return 'empty';
  } else {
    no_name.classList.add('hide');
    return title.value;
  }
}

function getAuthor() {
  const author = document.getElementById('author');
  const no_author = document.querySelector('.no-author');

  if (author.value === '') {
    no_author.classList.remove('hide');
    return 'empty';
  } else {
    no_author.classList.add('hide');
    return author.value;
  }
}

function getPage() {
  const pages = document.getElementById('num-of-pages');
  const no_pages = document.querySelector('.no-number');

  if (pages.value === '') {
    no_pages.classList.remove('hide');
    return 'empty';
  } else {
    no_pages.classList.add('hide');
    return pages.value;
  }
}

function if_read() {
  const ifRead = document.querySelectorAll('.if-read');

  ifRead.forEach(check => {
    check.addEventListener('click', () => {
      check.style.backgroundColor = 'black';
      check.style.color = 'white';
      read = check.value;
    })
  })
}

function addBookToLibrary() {
  let num = 0;
  const newBook = new Book(getTitle(), getAuthor(), getPage(), read);
  displayBooks(newBook.title, newBook.author, newBook.numOfPages, newBook.read, num);
  removeBook(num);
  num++;
}

function checkAllFields (event) {
  const confirm = document.getElementById('confirm');

  confirm.addEventListener('click', () => {
    if (getTitle() === 'empty' || getAuthor() === 'empty' || getPage() === 'empty') {
      event.preventDefault();
    } else {
      addBookToLibrary();
      allFieldsGood();
    }
  })
}

function allFieldsGood () {
  const modal = document.querySelector('.modal');

  modal.close();
}

function displayBooks(title, author, numOfPages, read, num) {
  const display = document.getElementById('display-books');
  const deleteBook = document.createElement('button');
  deleteBook.className = 'delete-book delete-book' + num;
  deleteBook.textContent = 'cancel';
  const eachBook = document.createElement('div');
  eachBook.className = 'each-book each-book' + num;
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
  eachBookIfRead.className = 'each-book-if-read each-book-if-read' + num;
  eachBookIfRead.textContent = read;
  display.appendChild(eachBook);
  eachBook.appendChild(eachBookTitle);
  eachBook.appendChild(eachBookAuthor);
  eachBook.appendChild(eachBookNumOfPages);
  eachBook.appendChild(eachBookIfRead);
  eachBook.appendChild(deleteBook);
}

function removeBook(num) {
  const allBooks = document.querySelector('.each-book' + num);
  const deleteBook = document.querySelector('.delete-book' + num);
  const display = document.getElementById('display-books');

  deleteBook.addEventListener('click', () => {
    display.removeChild(allBooks);
  })
}

function changeRead(num) {
  const ifRead = document.querySelector('.each-book-if-read' + num);

  if (ifRead.textContent == 'read') {
    ifRead.classList.add('green');
  } else if (ifRead.textContent == 'did not read'){
    ifRead.classList.add('red');
  }

  ifRead.addEventListener('click', () => {
    if (ifRead.textContent == 'read') {
      ifRead.textContent = 'did not read';
      ifRead.className = 'each-book-if-read each-book-if-read0 red';
    } else if (ifRead.textContent == 'did not read'){
      ifRead.textContent = 'read';
      ifRead.className = 'each-book-if-read each-book-if-read0 green';
    }
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
  const closeModalButton = document.querySelector('.close-modal');
  const modal = document.querySelector('.modal');

  closeModalButton.addEventListener('click', () => {
    modal.close();
  })
}

openModal();
closeModal();
if_read();
checkAllFields();