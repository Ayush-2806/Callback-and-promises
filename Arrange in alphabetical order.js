const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ];
  
  function logTitlesInAlphabeticalOrder(books) {
    const titles = books.map((book) => book.title).sort();
    console.log(titles);
  }
  
  logTitlesInAlphabeticalOrder(books);