import Book from './solution-1.js';

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } else {
            console.error("Invalid book instance.");
        }
    }
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    searchBooks(query) {
        return this.books.filter(
            book => book.title.includes(query) || book.author.includes(query)
        );
    }

    displayBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`);
        });
    }
}

export default Library;
