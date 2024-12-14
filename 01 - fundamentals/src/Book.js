const Book = (props) => {
  const { img, title, author, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p className="number">#{number}</p>
    </article>
  );
};

export default Book;
