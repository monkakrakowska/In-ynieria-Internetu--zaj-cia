import {Book, Reader} from "./types";

const readers: Reader[] = [
    {
        firstName: "Karola",
        lastName: "Jędryczka",
        libraryCardNumber: 1

    },

    {
        firstName: "Julia",
        lastName: "Piśniakowska",
        libraryCardNumber: 2

    },


    {
        firstName: "Monika",
        lastName: "Krakowska",
        libraryCardNumber: 3

    },


    {
        firstName: "Anna",
        lastName: "Hellmann",
        libraryCardNumber: 4

    },
]
const catalog: Book[] = [
    {
        title: "Władca Pierścieni",
        author: "J.R.R. Tolkien",
        year: 1954,
        borrower: readers[0],
        isBorrowed: true
    },
    {
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        borrower: null,
        isBorrowed: false
    },
    {
        title: "Duma i Uprzedzenie",
        author: "Jane Austen",
        year: 1813,
        borrower: readers[1],
        isBorrowed: true
    },
    {
        title: "Zbrodnia i Kara",
        author: "Fiodor Dostojewski",
        year: 1866,
        borrower: null,
        isBorrowed: false
    },
    {
        title: "Harry Potter i Kamień Filozoficzny",
        author: "J.K. Rowling",
        year: 1997,
        borrower: readers[2],
        isBorrowed: true
    }
]

function findBook(books: Book[], name: string) {
    return books.find(book => book.title === name);
}

function getAvaibleBooks(books: Book[]) {
    return books.filter((book: Book) => !book.isBorrowed);
}

function borrowBook(book: Book | undefined, reader: Reader) {
    if (book) {
        if (!book.isBorrowed) {
            book.borrower = reader;
            book.isBorrowed = true;
        } else {
            console.error("Book is currently borrowed!")
        }
    } else {
        console.error("Cannot find book!")
    }
}

console.log("Books", catalog);
const hobbit: Book | undefined = findBook(catalog, "Hobbit");
console.log("Hobbit", hobbit);
const available: Book[] = getAvaibleBooks(catalog);
console.log("Available", available);
borrowBook(hobbit, readers[2]);
console.log("Books", catalog);

