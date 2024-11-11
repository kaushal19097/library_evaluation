import Book from '/solution-1.js';
import Library from '/solution-2.js';

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", Book.generateISBN(), 5);
const book2 = new Book("1984", "George Orwell", Book.generateISBN(), 10);

library.addBook(book1);
library.addBook(book2);
console.log("All books in the library:");
library.displayBooks();
book1.availableCopies = 4;
console.log("Updated available copies for The Great Gatsby:");
console.log(`Available Copies: ${book1.availableCopies}`);

console.log("Search results for '1984':");
console.log(library.searchBooks("1984"));
library.removeBook("1984");
console.log("Library after removing '1984':");
library.displayBooks();