let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title.toString();
    this.author = author.toString();
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary(book) {
    myLibrary.push(book)
};
