function BookCard({ book, setCartCount }) {
  function addToCart() {
    setCartCount(prev => prev + 1);
  }

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "200px",
      textAlign: "center"
    }}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <b>₹{book.price}</b><br /><br />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default BookCard;