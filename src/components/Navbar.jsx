import {Link} from 'react-router-dom';
import HeaderInfo from  './HeaderInfo';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="navbar">
        <div className='nav-left'>
            <h2>Smart Grocery</h2>
        </div>

<div className='nav-center'>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/about">About</Link>
    </div>
    <div className='nav-right'> 
          </div>  

      <HeaderInfo />
      <ThemeToggle />
    </nav>
  );
}
export default Navbar;