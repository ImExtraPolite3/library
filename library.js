const myLibrary = [];
let read = '';

class Book {
  constructor(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
  }
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

    if(newBook.title == '' || newBook.value == '' || newBook.numOfPages == '' || newBook.read == '') {
      alert('provide all information pertaining to the book');
    } else {
      displayBooks(myLibrary[num].title, myLibrary[num].author, myLibrary[num].numOfPages, myLibrary[num].read, num);
    }
    changeRead(num);
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

function displayBooks(title, author, numOfPages, read, num) {
  const display = document.getElementById('display-books');
  const deleteBook = document.createElement('button');
  deleteBook.className = 'delete-book delete-book' + num;
  deleteBook.textContent = 'X';
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
  eachBook.appendChild(deleteBook);
  eachBook.appendChild(eachBookTitle);
  eachBook.appendChild(eachBookAuthor);
  eachBook.appendChild(eachBookNumOfPages);
  eachBook.appendChild(eachBookIfRead);
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