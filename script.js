ley myLibrary = []

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return console.log(`The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "have read" : "not read yet"}`);

    }
};

const book1 = new Book("Genshin", "Mihoyo", "99", false);
book1.info();