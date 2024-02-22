function Lesson02functionComponent({ books }) {
  return (
    <>
      {books.map((book) => {
        return (
          <p key={book.id}>
            {book.author} написал(а) "{book.book}"
          </p>
        );
      })}
    </>
  );
}

export default Lesson02functionComponent;
