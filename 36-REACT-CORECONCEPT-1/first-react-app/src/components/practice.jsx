import Books from './booksCompo'

function Practice() {
    const books = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        year: 1925,
      },
      { id: 2, title: "1984", author: "George Orwell", pages: 328, year: 1949 },
      {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        year: 1960,
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 432,
        year: 1813,
      },
      {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        year: 1937,
      },
    ];


    return (
        <div>
            <h1 className='flex'>List of Books</h1>
            <ul>
                {books.map((b) =>
                <Books key={b.id} title={b.title} author={b.author} pages={b.pages} year={b.year}></Books>
                
                )}
            </ul>
        </div>
    )
}

export default Practice 