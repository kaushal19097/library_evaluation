class Book {
    #isbn;

    constructor(title, author, isbn, availableCopies) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this._availableCopies = availableCopies;
    }

   
    get availableCopies() {
        return this._availableCopies;
    }

    set availableCopies(value) {
        if (typeof value === 'number' && value >= 0) {
            this._availableCopies = value;
        } else {
            console.error("Invalid number of copies.");
        }
    }

    #validateISBN(isbn) {
        const isbnPattern = /^[0-9]{3}-[0-9]{1,5}-[0-9]{1,7}-[0-9]{1,7}-[0-9]{1}$/;
        return isbnPattern.test(isbn);
    }

    set isbn(value) {
        if (this.#validateISBN(value)) {
            this.#isbn = value;
        } else {
            console.error("Invalid ISBN format.");
        }
    }

    get isbn() {
        return this.#isbn;
    }

    static generateISBN() {
        return `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 100000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10)}`;
    }
}

export default Book;
