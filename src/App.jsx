import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import UserContext from './context/UserContext';
import ThemeContext from './context/ThemeContext';

function App() {
 const [cartItems, setCartItems] = useState([]);
 const [theme, setTheme] = useState('light');

 const user = {
   name: 'Gaurav',
   role: 'Customer'
 };

 const handleAddToCart = (product) => {
   setCartItems([...cartItems, product]);
 };

 return (
   <UserContext.Provider value={user}>
     <ThemeContext.Provider value={{ theme, setTheme }}>
       <div className={theme === 'light' ? 'app light' : 'app dark'}>
         <Navbar />

         <div className="container">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route
               path="/products"
               element={
                 <Products
                   cartItems={cartItems}
                   onAddToCart={handleAddToCart}
                 />
               }
             />
             <Route path="/cart" element={<Cart cartItems={cartItems} />} />
             <Route path="/about" element={<About />} />
           </Routes>
         </div>
       </div>
     </ThemeContext.Provider>
   </UserContext.Provider>
 );
}

export default App;
