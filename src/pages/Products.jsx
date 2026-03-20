import products from '../data/products';
import ProductList from '../components/ProductList';
import CartSummary from '../components/CartSummary';

function Products({ cartItems, onAddToCart }) {
 return (
   <div className="page">
     <h1>Products</h1>
     <p>Choose grocery items and add them to your cart.</p>

     <CartSummary cartItems={cartItems} />
     <ProductList products={products} onAddToCart={onAddToCart} />
   </div>
 );
}

export default Products;
