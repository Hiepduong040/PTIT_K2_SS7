"use strict";
;
let books = [
    {
        title: "Đời ngắn đừng ngủ dài",
        author: "Robin Sharma",
        price: 100000,
    },
    {
        title: "Khoa học về giấc ngủ",
        author: "Matthew Walker",
        price: 150000,
    }
];
function printBook(books) {
    console.log(books);
}
// printBook(book[0]);
printBook(books);
function updateBook(books, title, author, price) {
    books.forEach((book) => {
        if (book.title === title && book.author === author) {
            book.price = price;
        }
    });
    printBook(books);
}
updateBook(books, "Đời ngắn đừng ngủ dài", "Robin Sharma", 1);
