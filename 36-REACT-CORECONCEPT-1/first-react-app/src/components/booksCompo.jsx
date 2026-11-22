function Books(props) {
  const { title, author, pages, year } = props;
  return (
    <div className="global">
      <li>{title}</li>
      <li>{author}</li>
      <li>{pages}</li>
      <li>{year}</li>
    </div>
  );
}

export default Books;
