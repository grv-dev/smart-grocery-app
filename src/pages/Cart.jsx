function Cart({ cartItems }) {
 const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

 return (
   <div className="page">
     <h1>Your Cart</h1>

     {cartItems.length === 0 ? (
       <p>No items added yet.</p>
     ) : (
       <>
         <ul className="cart-list">
           {cartItems.map((item, index) => (
             <li key={index}>
               {item.name} - ₹{item.price}
             </li>
           ))}
         </ul>

         <h3>Total: ₹{totalAmount}</h3>
       </>
     )}
   </div>
 );
}

export default Cart;
