let myLibrary = [];

function Book(title, author, pages, isRead, img) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.img = img;
}

const Naruto = new Book("Naruto", "Kishimoto", "240", true, "");
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
  document.getElementById("overlay").classList.toggle("show");

  if (document.getElementById("myForm").classList.contains("show")) {
    document.getElementById("myForm").classList.toggle("show");
  }

  if (document.getElementById("edit-form").classList.contains("show")) {
    document.getElementById("edit-form").classList.toggle("show");
  }
};

// loop through array, and append all book to container
function checkLibraryForBooks() {
  const bookContainer = document.getElementsByClassName("book-container");
  bookContainer[0].innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    createBookCards(myLibrary[i], i);
    changeBookBorder();
  }
  handleDeleteEvent();
}

checkLibraryForBooks();

// create new book cards and append it to html
function createBookCards(book, indexNumber) {
  const bookContainer = document.getElementsByClassName("book-container");
  const divMain = document.createElement("div");
  divMain.dataset.indexNumber = indexNumber;

  let html = `
  <img class="book-img" src="${
    book.img == "" ? "img/naurto-cover.webp" : book.img
  }" alt="">
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
          <input class="book-checkbox" type="checkbox" onclick="changeBookBorder()" ${
            book.isRead ? "checked" : ""
          }>
          <span class="slider round"></span>
      </label>
      </label>
  </div>
  <div class="book-buttons-container">
      <button class="button" id="edit-btn" data-index-number=${indexNumber} onclick="handleEditButton(this)"> Edit</button>
      <button class="button" id="delete-btn" data-index-number=${indexNumber}>Delete</button>
  </div>           `;

  divMain.innerHTML = html;
  bookContainer[0].appendChild(divMain);
}

//receive value from new book form
const formContainer = document.getElementsByClassName("form-container");
formContainer[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const bookPages = document.getElementById("book-pages");
  const bookIsRead = document.getElementById("book-is-read");
  const bookCover = document.getElementById("book-cover");

  // do nothing if field is empty
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
    bookIsRead.checked,
    bookCover.value
  );

  addBookToLibrary(newBook);
  checkLibraryForBooks();

  //reset form
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookIsRead.checked = false;
  bookCover.value = "";

  turnOffOverlay();
});

const bookCover = document.getElementsByClassName("book-img");

//show book cards with image
function showImage() {
  for (let i = 0; i < bookCover.length; i++) {
    bookCover[i].style.height = "22em";
  }
}

function hideImage() {
  for (let i = 0; i < bookCover.length; i++) {
    bookCover[i].style.height = "0";
  }
}

// make border green when checkbox is true otherwise black
function changeBookBorder() {
  const bookCheckboxes = document.getElementsByClassName("book-checkbox");
  const bookImages = document.getElementsByClassName("book-img");

  for (let i = 0; i < bookCheckboxes.length; i++) {
    bookCheckboxes[i].checked
      ? (bookImages[i].style.border = "2px solid rgb(60, 223, 60) ")
      : (bookImages[i].style.border = "2px solid rgb(54, 39, 39)");
  }
}

function deleteBook(bookIndex) {
  myLibrary.splice(bookIndex, 1);
}

function handleDeleteEvent() {
  const deleteButtons = document.querySelectorAll("#delete-btn");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      buttonIndex = deleteButtons[i].dataset.indexNumber;
      deleteBook(buttonIndex);
      checkLibraryForBooks();
    });
  }
}

editButtonCurrentIndex = null;

//receive data from edit form popup
const editContainer = document.getElementById("edit-form-container");
editContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById("book-title-edit");
  const bookAuthor = document.getElementById("book-author-edit");
  const bookPages = document.getElementById("book-pages-edit");

  i = editButtonCurrentIndex;
  currentBook = myLibrary[i];

  currentBook.title = bookTitle.value;
  currentBook.author = bookAuthor.value;
  currentBook.pages = bookPages.value;

  //reset form

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";

  const editForm = document.getElementById("edit-form");
  editForm.classList.toggle("hidden");

  checkLibraryForBooks();
});

function handleEditButton(button) {
  editButtonCurrentIndex = button.dataset.indexNumber;
  const editForm = document.getElementById("edit-form");
  editForm.classList.add("show");
  document.getElementById("overlay").classList.toggle("show");
}

function toggleDarkMode(button) {
  document.body.classList.toggle("dark-theme");

  button.innerText == "Dark Mode"
    ? (button.innerText = "Light Mode")
    : (button.innerText = "Dark Mode");

  currentLogo = document.getElementsByClassName("logo")[0];
  currentLogo.src.toString().includes("img/open-book.png")
    ? (currentLogo.src = "img/open-book-dark.png")
    : (currentLogo.src = "img/open-book.png");
}
