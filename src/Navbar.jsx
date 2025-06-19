import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const linkStyle = (path) => ({
    padding: '12px 20px',
    color: pathname === path ? '#fff' : '#eee',
    backgroundColor: pathname === path ? '#0077b6' : 'transparent',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: '0.3s',
    margin: '0 5px',
  });

  return (
    <nav style={{
      padding: '15px 30px',
      background: '#023e8a',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={linkStyle('/')}> Home</Link>
      <Link to="/about" style={linkStyle('/about')}> About</Link>
      <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
    </nav>
  );
};

export default Navbar;
