let myLibrary = [];

function Book(title, author, pages, isRead, img) {
  this.title = title.toString();
  this.author = author.toString();
  this.pages = pages;
  this.isRead = isRead;
  this.img = img;
}

const Naruto = new Book("Naruto", "Kishimoto", "240", false);
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
for (let i = 0; i < myLibrary.length; i++) {
  createBookCards(myLibrary[i]);
}

function createBookCards(book) {
  const bookContainer = document.getElementsByClassName("book-container");
  const divMain = document.createElement("div");
  const img = document.createElement("img");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  div1.classList.add("book-info");
  div1.classList.add("flex");

  const div1__div__left = document.createElement("div");
  div1__div__left.classList.add("book-info-left");
  div1__div__left.classList.add("flex");

  const div1__left__h3 = document.createElement("h3");
  div1__left__h3.innerHTML = book.title;

  const div1__left__span = document.createElement("span");
  div1__left__span.innerHTML = `by ${book.author}`;

  div1__div__left.appendChild(div1__left__h3);
  div1__div__left.appendChild(div1__left__span);
  div1.appendChild(div1__div__left);

  div2.classList.add("book-read-status");
  div2.classList.add("flex");

  div3.classList.add("book-button-container");

  divMain.appendChild(img);
  divMain.appendChild(div1);
  divMain.appendChild(div2);
  divMain.appendChild(div3);

  bookContainer[0].appendChild(divMain);
}
