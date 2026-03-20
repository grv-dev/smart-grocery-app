import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function ThemeToggle() {
 const { theme, setTheme } = useContext(ThemeContext);

 const handleToggle = () => {
   setTheme(theme === 'light' ? 'dark' : 'light');
 };

 return (
   <button onClick={handleToggle} className="theme-btn">
     Theme: {theme}
   </button>
 );
}

export default ThemeToggle;
