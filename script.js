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


handleAddBook = () => {
    const popupMenu = document.getElementById("myForm");
    popupMenu.classList.add("show");

    document.getElementById("overlay").classList.toggle("show");

}

turnOffOverlay = () => {
    document.getElementById("myForm").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("show");
}