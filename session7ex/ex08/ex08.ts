interface Book{
    title:string,
    author:string,
    price:number,
};
let books : Book[] =[
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
]
function printBook(books: Book[]): void {
    
    console.log(books);
    
  }
// printBook(book[0]);
printBook(books);
function updateBook(books: Book[], title: string, author: string, price: number): void {
    books.forEach((book) => {
      if (book.title === title && book.author === author) {
        book.price = price;
      }
    });
    printBook(books);
  }
  
  updateBook(books, "Đời ngắn đừng ngủ dài", "Robin Sharma", 1);