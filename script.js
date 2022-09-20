let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  // this.img = img;
}

const Naruto = new Book("Naruto", "Kishimoto", "240", true);
addBookToLibrary(Naruto);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

handleAddBook = () => {
  const popupMenu = document.getElementById("myForm");
  popupMenu.classList.add("show");

  document.getElementById("overlay").classList.toggle("show");
};

turnOffOverlay = () => {
  document.getElementById("myForm").classList.toggle("show");
  document.getElementById("overlay").classList.toggle("show");
};

// loop through array, and append all book to container
function checkLibraryForBooks() {
  const bookContainer = document.getElementsByClassName("book-container");
  bookContainer[0].innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    createBookCards(myLibrary[i], i);
  }
}

checkLibraryForBooks();

function createBookCards(book, indexNumber) {
  const bookContainer = document.getElementsByClassName("book-container");
  const divMain = document.createElement("div");
  divMain.dataset.indexNumber = indexNumber;

  let html = `
  <img class="book-img" src="/img/naurto-cover.webp" alt="">
  <div class="book-info flex">
      <div class="book-info-left flex">
          <h3>${book.title}</h3>
          <span>by ${book.author}</span>
      </div>
      <div class="book-info-right flex">
          <h7>${book.pages} Pages</h7>
      </div>
      
  </div>
  <div class="flex book-read-status"> 
      <span>Finish Reading</span>
      <label class="switch">
          <input type="checkbox" ${book.isRead ? "checked" : ""}>
          <span class="slider round"></span>
      </label>
      </label>
  </div>
  <div class="book-buttons-container">
      <button class="button"> Edit</button>
      <button class="button">Delete</button>
  </div>           `;

  divMain.innerHTML = html;
  bookContainer[0].appendChild(divMain);
}

const formContainer = document.getElementsByClassName("form-container");
formContainer[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const bookPages = document.getElementById("book-pages");
  const bookIsRead = document.getElementById("book-is-read");

  if (
    (bookTitle.value == "") |
    (bookAuthor.value == "") |
    (bookPages.value == "")
  ) {
    return;
  }

  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookIsRead.checked
  );
  addBookToLibrary(newBook);
  checkLibraryForBooks();

  //reset form
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookIsRead.checked = false;

  turnOffOverlay();
});

const bookCover = document.getElementsByClassName("book-img");

function showImage() {
  for (let i = 0; i < bookCover.length; i++) {
    bookCover[0].style.maxHeight = "22em";
  }
}

function hideImage() {
  for (let i = 0; i < bookCover.length; i++) {
    bookCover[0].style.maxHeight = "0";
  }
}
