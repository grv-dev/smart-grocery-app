function CartSummary({ cartItems }) {
 const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

 return (
   <div className="cart-summary">
     <h3>Cart Summary</h3>
     <p>Total Items: {cartItems.length}</p>
     <p>Total Amount: ₹{totalAmount}</p>
   </div>
 );
}

export default CartSummary;
